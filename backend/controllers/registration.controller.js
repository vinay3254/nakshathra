const Event = require("../models/Event");
const Registration = require("../models/Registration");
const User = require("../models/User");
const {
  sendEmail,
  buildRegistrationConfirmationTemplate,
} = require("../utils/sendEmail");

const createRegistration = async (req, res, next) => {
  try {
    const { eventId, teamName, teamMembers = [] } = req.body;

    const event = await Event.findById(eventId);

    if (!event) {
      throw Object.assign(new Error("Event not found"), { statusCode: 404 });
    }

    if (event.status !== "open") {
      throw Object.assign(new Error("Event registrations are closed"), {
        statusCode: 400,
      });
    }

    const existingRegistration = await Registration.findOne({
      user: req.user._id,
      event: eventId,
    });

    if (existingRegistration) {
      throw Object.assign(
        new Error("You have already registered for this event"),
        {
          statusCode: 400,
        }
      );
    }

    if (
      typeof event.maxParticipants === "number" &&
      event.registeredCount >= event.maxParticipants
    ) {
      throw Object.assign(new Error("Event is full"), { statusCode: 400 });
    }

    const sanitizedTeamMembers = Array.isArray(teamMembers)
      ? teamMembers
          .filter((member) => member && (member.name || member.email || member.college))
          .map((member) => ({
            name: member.name?.trim(),
            email: member.email?.trim()?.toLowerCase(),
            college: member.college?.trim(),
          }))
      : [];

    const totalParticipants = 1 + sanitizedTeamMembers.length;

    if (event.teamSize?.min && totalParticipants < event.teamSize.min) {
      throw Object.assign(
        new Error(`Minimum team size for this event is ${event.teamSize.min}`),
        { statusCode: 400 }
      );
    }

    if (event.teamSize?.max && totalParticipants > event.teamSize.max) {
      throw Object.assign(
        new Error(`Maximum team size for this event is ${event.teamSize.max}`),
        { statusCode: 400 }
      );
    }

    if (totalParticipants > 1 && !teamName) {
      throw Object.assign(new Error("Team name is required for team events"), {
        statusCode: 400,
      });
    }

    const registration = await Registration.create({
      user: req.user._id,
      event: event._id,
      teamName,
      teamMembers: sanitizedTeamMembers,
      status: "confirmed",
    });

    event.registeredCount += 1;
    await event.save();

    await User.findByIdAndUpdate(req.user._id, {
      $push: { registeredEvents: registration._id },
    });

    const populatedRegistration = await Registration.findById(
      registration._id
    ).populate("event");

    try {
      await sendEmail({
        to: req.user.email,
        subject: `${event.name} registration confirmed`,
        html: buildRegistrationConfirmationTemplate({
          name: req.user.name,
          eventName: event.name,
          eventDate: event.date,
          eventTime: event.time,
          venue: event.venue,
          teamName,
          teamMembers: sanitizedTeamMembers,
        }),
      });
    } catch (emailError) {
      console.error(
        `Registration email failed for ${req.user.email}: ${emailError.message}`
      );
    }

    res.status(201).json({
      success: true,
      message: "Registration confirmed",
      data: {
        registration: populatedRegistration,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getMyRegistrations = async (req, res, next) => {
  try {
    const registrations = await Registration.find({ user: req.user._id })
      .populate("event")
      .sort({ registeredAt: -1 });

    res.status(200).json({
      success: true,
      message: "Registrations fetched successfully",
      data: {
        registrations,
      },
    });
  } catch (error) {
    next(error);
  }
};

const cancelRegistration = async (req, res, next) => {
  try {
    const registration = await Registration.findById(req.params.id).populate(
      "event"
    );

    if (!registration) {
      throw Object.assign(new Error("Registration not found"), {
        statusCode: 404,
      });
    }

    if (
      registration.user.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      throw Object.assign(new Error("You cannot cancel this registration"), {
        statusCode: 403,
      });
    }

    if (registration.status === "cancelled") {
      throw Object.assign(new Error("Registration already cancelled"), {
        statusCode: 400,
      });
    }

    registration.status = "cancelled";
    await registration.save();

    const event = await Event.findById(registration.event._id);

    if (event) {
      event.registeredCount = Math.max((event.registeredCount || 0) - 1, 0);
      await event.save();
    }

    res.status(200).json({
      success: true,
      message: "Registration cancelled successfully",
      data: {
        registration,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getAllRegistrations = async (req, res, next) => {
  try {
    const registrations = await Registration.find()
      .populate("user", "name email college department yearOfStudy role")
      .populate("event", "name slug category date time venue status")
      .sort({ registeredAt: -1 });

    res.status(200).json({
      success: true,
      message: "All registrations fetched successfully",
      data: {
        registrations,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getUserRegistrations = async (req, res, next) => {
  try {
    const registrations = await Registration.find({ user: req.user._id })
      .populate("event")
      .sort({ registeredAt: -1 });

    res.status(200).json({
      success: true,
      message: "User registrations fetched successfully",
      data: {
        registrations,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getRegistrationById = async (req, res, next) => {
  try {
    const registration = await Registration.findById(req.params.id)
      .populate("user")
      .populate("event");

    if (!registration) {
      throw Object.assign(new Error("Registration not found"), {
        statusCode: 404,
      });
    }

    if (
      registration.user._id.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      throw Object.assign(
        new Error("You do not have permission to view this registration"),
        { statusCode: 403 }
      );
    }

    res.status(200).json({
      success: true,
      message: "Registration fetched successfully",
      data: {
        registration,
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateRegistration = async (req, res, next) => {
  try {
    const registration = await Registration.findById(req.params.id);

    if (!registration) {
      throw Object.assign(new Error("Registration not found"), {
        statusCode: 404,
      });
    }

    if (
      registration.user.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      throw Object.assign(new Error("You cannot update this registration"), {
        statusCode: 403,
      });
    }

    if (req.body.status) {
      registration.status = req.body.status;
    }

    if (req.body.teamName) {
      registration.teamName = req.body.teamName;
    }

    await registration.save();

    res.status(200).json({
      success: true,
      message: "Registration updated successfully",
      data: {
        registration,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getEventRegistrations = async (req, res, next) => {
  try {
    const registrations = await Registration.find({ event: req.params.eventId })
      .populate("user", "name email college department yearOfStudy")
      .populate("event", "name slug category");

    res.status(200).json({
      success: true,
      message: "Event registrations fetched successfully",
      data: {
        count: registrations.length,
        registrations,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createRegistration,
  getMyRegistrations,
  cancelRegistration,
  getAllRegistrations,
  getUserRegistrations,
  getRegistrationById,
  updateRegistration,
  getEventRegistrations,
};
