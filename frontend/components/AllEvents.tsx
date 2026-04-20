"use client";

import { startTransition, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Music4, Puzzle, Radio, Trophy, Wrench } from "lucide-react";

type Category = "All" | "Technical" | "Cultural" | "Gaming" | "Workshop";

const tabs: Category[] = ["All", "Technical", "Cultural", "Gaming", "Workshop"];

const events = [
  {
    title: "Hack Relay",
    category: "Technical",
    detail: "Timed sprint across four coding checkpoints.",
    meta: "Lab Arena",
  },
  {
    title: "Cloud Forge",
    category: "Workshop",
    detail: "Deploy-first engineering session with live mentors.",
    meta: "Innovation Lab",
  },
  {
    title: "Stage Frequency",
    category: "Cultural",
    detail: "Live vocal and acoustic performance face-off.",
    meta: "Open Air Deck",
  },
  {
    title: "Valor Clash",
    category: "Gaming",
    detail: "Tactical bracket with live shoutcasting and finals.",
    meta: "Arena Dome",
  },
  {
    title: "UI Drift",
    category: "Technical",
    detail: "Rapid interface design challenge with judges on floor.",
    meta: "Design Bay",
  },
  {
    title: "Beat Circuit",
    category: "Cultural",
    detail: "Street dance crews meet a neon festival crowd.",
    meta: "Main Stage",
  },
  {
    title: "Retro Respawn",
    category: "Gaming",
    detail: "Arcade-style knockout format for fast rounds.",
    meta: "Game Lounge",
  },
  {
    title: "Build with AI",
    category: "Workshop",
    detail: "Hands-on product prototyping using modern AI stacks.",
    meta: "Workshop Hall",
  },
  {
    title: "Circuit Quest",
    category: "Technical",
    detail: "Embedded systems puzzle hunt for hardware teams.",
    meta: "Maker Street",
  },
  {
    title: "Street Lens",
    category: "Cultural",
    detail: "Photo storytelling and visual narrative challenge.",
    meta: "Campus Loop",
  },
] as const;

const iconMap = {
  Technical: Wrench,
  Cultural: Music4,
  Gaming: Puzzle,
  Workshop: Radio,
};

const accentMap = {
  Technical: "#00f5ff",
  Cultural: "#ec4899",
  Gaming: "#7c3aed",
  Workshop: "#fbbf24",
};

export default function AllEvents() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const filteredEvents = useMemo(() => {
    if (activeTab === "All") {
      return events;
    }

    return events.filter((event) => event.category === activeTab);
  }, [activeTab]);

  return (
    <section className="section-pad relative overflow-hidden border-b border-[#00f5ff]/5 bg-transparent">
      <div id="workshops" className="absolute -top-20" />
      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="font-rajdhani text-[12px] uppercase tracking-[0.28em] text-[#00f5ff]/50">
              All Events
            </p>
            <h2 className="mt-4 font-orbitron text-4xl font-black uppercase text-[#00f5ff] md:text-5xl">
              One festival,
              <span className="heading-gradient block">multiple entry points.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  startTransition(() => setActiveTab(tab));
                }}
                className={`rounded-full border px-4 py-2 font-rajdhani text-sm font-semibold uppercase tracking-[0.18em] transition-all ${
                  activeTab === tab
                    ? "border-[#00f5ff]/40 bg-[#00f5ff]/10 text-[#00f5ff]"
                    : "border-[#00f5ff]/10 bg-[#00f5ff]/[0.03] text-[#00f5ff]/55 hover:text-[#00f5ff]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            {filteredEvents.map((event, index) => {
              const Icon = iconMap[event.category];
              const accent = accentMap[event.category];

              return (
                <motion.article
                  key={event.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.04, duration: 0.28 }}
                  className="glass-card card-hover-glow p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{ background: `${accent}18` }}
                    >
                      <Icon className="h-5 w-5 text-[#00f5ff]" />
                    </div>
                    <span
                      className="rounded-full border px-2.5 py-1 font-rajdhani text-[11px] uppercase tracking-[0.16em]"
                      style={{
                        color: accent,
                        borderColor: `${accent}55`,
                        background: `${accent}12`,
                      }}
                    >
                      {event.category}
                    </span>
                  </div>

                  <h3 className="mt-5 font-orbitron text-lg font-bold uppercase text-[#00f5ff]">
                    {event.title}
                  </h3>
                  <p className="mt-3 font-rajdhani text-sm leading-6 text-[#00f5ff]/55">
                    {event.detail}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[#00f5ff]/8 pt-4">
                    <p className="font-rajdhani text-[12px] uppercase tracking-[0.18em] text-[#00f5ff]/35">
                      {event.meta}
                    </p>
                    <Trophy className="h-4 w-4 text-[#00f5ff]/30" />
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
