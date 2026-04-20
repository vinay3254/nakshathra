"use client";

import { motion } from "framer-motion";
import { Cpu, Gamepad2, Lightbulb, Mic2, ArrowUpRight } from "lucide-react";

const events = [
  {
    num: "01",
    title: "CodeStorm",
    subtitle: "Flagship coding sprint",
    description:
      "A pressure-cooker coding showdown for algorithmic speed, debugging instinct, and problem-solving under stage lights.",
    prize: "₹1.5L",
    icon: Cpu,
    accent: "#00f5ff",
    glow: "rgba(0,245,255,0.14)",
    gradFrom: "rgba(0,245,255,0.07)",
    gradTo: "transparent",
  },
  {
    num: "02",
    title: "TechTalks",
    subtitle: "Industry-led workshop series",
    description:
      "Hands-on masterclasses on AI systems, product design, and startup velocity led by builders from Bengaluru's tech ecosystem.",
    prize: "Pass Access",
    icon: Mic2,
    accent: "#7c3aed",
    glow: "rgba(124,58,237,0.14)",
    gradFrom: "rgba(124,58,237,0.07)",
    gradTo: "transparent",
  },
  {
    num: "03",
    title: "ByteWars",
    subtitle: "Campus gaming finals",
    description:
      "Competitive multiplayer brackets, shoutcasters, and roaring crowd moments across the most-watched gaming arena of the fest.",
    prize: "₹75K",
    icon: Gamepad2,
    accent: "#ec4899",
    glow: "rgba(236,72,153,0.14)",
    gradFrom: "rgba(236,72,153,0.07)",
    gradTo: "transparent",
  },
  {
    num: "04",
    title: "InnoVision",
    subtitle: "Startup and demo showcase",
    description:
      "Concept pitches, live prototypes, and future-facing student ventures judged for originality, execution, and social impact.",
    prize: "₹1L",
    icon: Lightbulb,
    accent: "#fbbf24",
    glow: "rgba(251,191,36,0.14)",
    gradFrom: "rgba(251,191,36,0.07)",
    gradTo: "transparent",
  },
];

export default function FlagshipEvents() {
  return (
    <section
      id="events"
      className="section-pad relative overflow-hidden border-b border-[#00f5ff]/5 bg-transparent"
    >
      <div id="competitions" className="absolute -top-20" />

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,245,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container-tight relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mb-16 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#00f5ff]/60" />
              <p className="font-rajdhani text-[11px] uppercase tracking-[0.32em] text-[#00f5ff]/70">
                Flagship Events
              </p>
            </div>
            <h2 className="mt-4 font-orbitron text-4xl font-black uppercase leading-tight text-[#00f5ff] md:text-5xl">
              Four stages.
              <br />
              <span className="heading-gradient">Everyone&apos;s talking.</span>
            </h2>
          </div>
          <p className="max-w-xs font-rajdhani text-base leading-7 text-[#00f5ff]/40 lg:text-right">
            Prize pool across flagship events.{" "}
            <span className="font-semibold text-[#00f5ff]/65">₹3.25L+ total.</span>
          </p>
        </motion.div>

        {/* Event cards grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {events.map((event, index) => {
            const Icon = event.icon;

            return (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.09, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group relative flex min-h-[300px] cursor-pointer flex-col overflow-hidden rounded-sm border border-[#00f5ff]/[0.07] bg-[rgba(10,15,30,0.5)] p-7  transition-all duration-300"
                style={{
                  boxShadow: "inset 0 0 0 0 transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 20px 60px ${event.glow}, inset 0 0 0 1px ${event.accent}28`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "inset 0 0 0 0 transparent";
                }}
              >
                {/* Top gradient accent bar */}
                <div
                  className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    background: `linear-gradient(90deg, ${event.accent}, transparent)`,
                  }}
                />

                {/* Diagonal corner accent */}
                <div
                  className="pointer-events-none absolute right-0 top-0 h-24 w-24 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 100% 0%, ${event.gradFrom} 0%, ${event.gradTo} 70%)`,
                  }}
                />

                {/* Ghost event number */}
                <span
                  className="pointer-events-none absolute -right-3 -top-5 select-none font-orbitron text-[7rem] font-black leading-none opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.08]"
                  style={{ color: event.accent }}
                >
                  {event.num}
                </span>

                {/* Header row */}
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#00f5ff]/[0.08] transition-all duration-300 group-hover:border-current"
                    style={{
                      background: `${event.accent}12`,
                      color: event.accent,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <span
                    className="mt-1 shrink-0 rounded-full border px-3 py-1 font-orbitron text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{
                      color: event.accent,
                      borderColor: `${event.accent}50`,
                      background: `${event.accent}10`,
                    }}
                  >
                    {event.prize}
                  </span>
                </div>

                {/* Body */}
                <div className="mt-7 flex flex-1 flex-col">
                  <p
                    className="font-rajdhani text-[11px] uppercase tracking-[0.26em]"
                    style={{ color: `${event.accent}cc` }}
                  >
                    {event.subtitle}
                  </p>
                  <h3 className="mt-2 font-orbitron text-[1.65rem] font-black uppercase leading-tight text-[#00f5ff]">
                    {event.title}
                  </h3>
                  <p className="mt-4 flex-1 font-rajdhani text-base leading-7 text-[#00f5ff]/50">
                    {event.description}
                  </p>
                </div>

                {/* Footer */}
                <div
                  className="mt-6 flex items-center gap-2 border-t pt-5"
                  style={{ borderColor: "rgba(0, 245, 255,0.06)" }}
                >
                  <span className="font-rajdhani text-sm font-semibold uppercase tracking-[0.18em] text-[#00f5ff]/40 transition-colors group-hover:text-[#00f5ff]/70">
                    Explore format
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-[#00f5ff]/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#00f5ff]/70"
                    style={{ color: `${event.accent}99` }}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom view-all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex justify-center"
        >
          <button
            type="button"
            className="btn-neon inline-flex items-center gap-2.5 rounded-md px-8 py-3 font-rajdhani text-sm font-semibold uppercase tracking-[0.2em] text-[#00f5ff] transition-all hover:shadow-[0_0_28px_rgba(0,245,255,0.28)]"
          >
            View All Events
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
