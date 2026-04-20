"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarClock, Mic2, Sparkles, Trophy, Users } from "lucide-react";

const days = [
  {
    id: "day1", label: "Day 1", theme: "Launch Sequence", accent: "#00f5ff",
    items: [
      { time: "09:00", title: "Festival gates open",   detail: "Registration lanes, welcome kits, neon route maps.",                   icon: Users },
      { time: "11:30", title: "CodeStorm prelims",     detail: "Timed elimination rounds across core coding tracks.",                  icon: CalendarClock },
      { time: "15:00", title: "TechTalks keynote",     detail: "Opening session on product design and AI systems.",                    icon: Mic2 },
      { time: "19:30", title: "Main stage opener",     detail: "Night-one cultural headline performance and announcements.",           icon: Sparkles },
    ],
  },
  {
    id: "day2", label: "Day 2", theme: "Signal Boost", accent: "#7c3aed",
    items: [
      { time: "10:00", title: "Build with AI workshop", detail: "Hands-on shipping sprint with mentor pods.",                          icon: CalendarClock },
      { time: "13:00", title: "ByteWars bracket stage", detail: "Live gaming quarterfinals and crowd callouts.",                       icon: Trophy },
      { time: "16:00", title: "InnoVision demos",       detail: "Student ventures present live prototypes to judges.",                 icon: Mic2 },
      { time: "20:00", title: "Festival after-dark set",detail: "Performance block, creator reveals, and campus visuals.",             icon: Sparkles },
    ],
  },
  {
    id: "day3", label: "Day 3", theme: "Final Orbit", accent: "#ec4899",
    items: [
      { time: "10:30", title: "Grand workshop review", detail: "Shortlists, mentor wrap-ups, and final badges.",                       icon: Users },
      { time: "13:30", title: "CodeStorm finals",      detail: "Top teams race live in the closing technical showdown.",               icon: Trophy },
      { time: "17:00", title: "Prize ceremony",         detail: "Awards, college trophies, and recognition moments.",                  icon: Sparkles },
      { time: "19:00", title: "Nakshatra closing set",  detail: "The final crowd moment with all-stage winners on deck.",              icon: Mic2 },
    ],
  },
];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(days[0].id);
  const currentDay = days.find((d) => d.id === activeDay) ?? days[0];

  return (
    <section
      id="schedule"
      className="section-pad relative overflow-hidden border-b border-[#00f5ff]/5 bg-[linear-gradient(180deg,rgba(6,10,22,1),rgba(5,8,20,1))]"
    >
      <div className="pointer-events-none absolute right-[10%] top-16 h-52 w-52 rounded-full bg-[#ec4899]/[0.07] blur-3xl" />
      <span className="pointer-events-none absolute right-4 top-4 select-none font-orbitron text-[9rem] font-black leading-none text-[#00f5ff] opacity-[0.022] lg:text-[14rem]" aria-hidden="true">
        04
      </span>

      <div className="container-tight relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#ec4899]/60" />
              <p className="font-rajdhani text-[11px] uppercase tracking-[0.32em] text-[#ec4899]/70">
                Schedule
              </p>
            </div>
            <h2 className="mt-4 font-orbitron text-4xl font-black uppercase text-[#00f5ff] md:text-5xl">
              Built as a
              <span className="heading-gradient block">three-day escalation.</span>
            </h2>
          </div>

          {/* Day tabs */}
          <div className="flex flex-wrap gap-2">
            {days.map((day) => (
              <motion.button
                key={day.id}
                type="button"
                onClick={() => setActiveDay(day.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-full border px-5 py-2 font-rajdhani text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-200"
                style={{
                  color:       activeDay === day.id ? day.accent : "rgba(0, 245, 255,0.5)",
                  borderColor: activeDay === day.id ? `${day.accent}66` : "rgba(0, 245, 255,0.1)",
                  background:  activeDay === day.id ? `${day.accent}14` : "rgba(0, 245, 255,0.03)",
                  boxShadow:   activeDay === day.id ? `0 0 20px ${day.accent}22` : "none",
                }}
              >
                {day.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDay.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
          >
            {/* Theme chip + horizontal line */}
            <div className="mb-10 flex items-center gap-4">
              <motion.span
                layoutId="theme-chip"
                className="rounded-full border px-4 py-2 font-orbitron text-[10px] font-bold uppercase tracking-[0.28em]"
                style={{
                  color: currentDay.accent,
                  borderColor: `${currentDay.accent}66`,
                  background: `${currentDay.accent}12`,
                  boxShadow: `0 0 18px ${currentDay.accent}22`,
                }}
              >
                {currentDay.theme}
              </motion.span>
              <div
                className="h-px flex-1"
                style={{ background: `linear-gradient(90deg,${currentDay.accent}55,transparent)` }}
              />
            </div>

            {/* Alternating timeline items */}
            <div className="relative">
              {/* center line */}
              <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#00f5ff]/[0.07] md:block" />

              <div className="space-y-6">
                {currentDay.items.map((item, index) => {
                  const Icon = item.icon;
                  const isLeft = index % 2 === 0;

                  return (
                    <div
                      key={`${currentDay.id}-${item.time}`}
                      className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]"
                    >
                      {/* Card — alternates left/right */}
                      <motion.div
                        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.07, duration: 0.4, ease: "easeOut" }}
                        whileHover={{ y: -3, boxShadow: `0 16px 40px ${currentDay.accent}18` }}
                        className={`glass-card p-5 transition-all duration-300 ${isLeft ? "md:col-start-1" : "md:col-start-3"}`}
                      >
                        {/* Top accent line */}
                        <div
                          className="absolute inset-x-0 top-0 h-[1.5px] rounded-t-[12px]"
                          style={{ background: `linear-gradient(90deg,transparent,${currentDay.accent}80,transparent)` }}
                        />

                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p
                              className="font-orbitron text-sm font-bold"
                              style={{ color: currentDay.accent }}
                            >
                              {item.time}
                            </p>
                            <h3 className="mt-2 font-orbitron text-lg font-bold uppercase text-[#00f5ff]">
                              {item.title}
                            </h3>
                            <p className="mt-3 font-rajdhani text-base leading-7 text-[#00f5ff]/50">
                              {item.detail}
                            </p>
                          </div>
                          <div
                            className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                            style={{ background: `${currentDay.accent}14` }}
                          >
                            <Icon className="h-5 w-5" style={{ color: currentDay.accent }} />
                          </div>
                        </div>
                      </motion.div>

                      {/* Center dot */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.07 + 0.1, type: "spring", stiffness: 300 }}
                        className="relative hidden items-center justify-center md:flex"
                      >
                        <span
                          className="relative z-10 h-4 w-4 rounded-full border-2 pulse-ring"
                          style={{
                            borderColor: currentDay.accent,
                            background: `${currentDay.accent}30`,
                            boxShadow: `0 0 20px ${currentDay.accent}88`,
                          }}
                        />
                      </motion.div>

                      <div className="hidden md:block" />
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
