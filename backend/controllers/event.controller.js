const Event = require("../models/Event");
const Registration = require("../models/Registration");
const User = require("../models/User");

const slugify = (value = "") =>
  value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const buildUniqueSlug = async (name, excludeId) => {
  const baseSlug = slugify(name) || `event-${Date.now()}`;
  let slug = baseSlug;
  let counter = 1;

  while (
    await Event.exists({
      slug,
      ...(excludeId ? { _id: { $ne: excludeId } } : {}),
    })
  ) {
    slug = `${baseSlug}-${counter}`;
    counter += 1;
  }

  return slug;
};

const getEvents = async (req, res, next) => {
  try {
    const { category, status, search } = req.query;
    const filter = {};

    if (category) {
      filter.category = category;
    }

    if (status) {
      filter.status = status;
    }

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { venue: { $regex: search, $options: "i" } },
      ];
    }

    const events = await Event.find(filter).sort({ date: 1, createdAt: 1 });

    res.status(200).json({
      success: true,
      message: "Events fetched successfully",
      data: {
        count: events.length,
        events,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getEventBySlug = async (req, res, next) => {
  try {
    const event = await Event.findOne({ slug: req.params.slug });

    if (!event) {
      throw Object.assign(new Error("Event not found"), { statusCode: 404 });
    }

    res.status(200).json({
      success: true,
      message: "Event fetched successfully",
      data: {
        event,
      },
    });
  } catch (error) {
    next(error);
  }
};

const createEvent = async (req, res, next) => {
  try {
    const payload = {
      ...req.body,
      slug: await buildUniqueSlug(req.body.name),
    };

    const event = await Event.create(payload);

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      data: {
        event,
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      throw Object.assign(new Error("Event not found"), { statusCode: 404 });
    }

    if (req.body.name && req.body.name !== event.name) {
      event.slug = await buildUniqueSlug(req.body.name, event._id);
    }

    Object.entries(req.body).forEach(([key, value]) => {
      if (value !== undefined) {
        event[key] = value;
      }
    });

    await event.save();

    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      data: {
        event,
      },
    });
  } catch (error) {
    next(error);
  }
};

const deleteEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      throw Object.assign(new Error("Event not found"), { statusCode: 404 });
    }

    const registrations = await Registration.find({ event: event._id }).select(
      "_id user"
    );

    await Promise.all(
      registrations.map((registration) =>
        User.findByIdAndUpdate(registration.user, {
          $pull: { registeredEvents: registration._id },
        })
      )
    );

    await Registration.deleteMany({ event: event._id });
    await event.deleteOne();

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getEventStats = async (req, res, next) => {
  try {
    const totalEvents = await Event.countDocuments();
    const openEvents = await Event.countDocuments({ status: "open" });
    const totalRegistrations = await Registration.countDocuments();
    const totalUsers = await User.countDocuments();

    const eventsByStatus = await Event.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } },
    ]);

    const registrationsByStatus = await Registration.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } },
    ]);

    res.status(200).json({
      success: true,
      message: "Event statistics fetched successfully",
      data: {
        totalEvents,
        openEvents,
        totalRegistrations,
        totalUsers,
        eventsByStatus,
        registrationsByStatus,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getEvents,
  getEventBySlug,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventStats,
};
