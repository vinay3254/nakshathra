"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, X } from "lucide-react";

const items = [
  { id: 1, title: "Hero stage lighting", height: "h-[320px]", accent: "#00f5ff" },
  { id: 2, title: "Crowd bridge walkthrough", height: "h-[220px]", accent: "#7c3aed" },
  { id: 3, title: "Hack zone deskline", height: "h-[280px]", accent: "#ec4899" },
  { id: 4, title: "Workshop hall grid", height: "h-[250px]", accent: "#fbbf24" },
  { id: 5, title: "Finals crowd energy", height: "h-[340px]", accent: "#00f5ff" },
  { id: 6, title: "Night skyline reveal", height: "h-[230px]", accent: "#ec4899" },
  { id: 7, title: "Gaming arena floor", height: "h-[300px]", accent: "#7c3aed" },
  { id: 8, title: "Artist tunnel entry", height: "h-[210px]", accent: "#fbbf24" },
  { id: 9, title: "Awards light wash", height: "h-[290px]", accent: "#00f5ff" },
];

export default function Gallery() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const activeItem = items.find((item) => item.id === activeId) ?? null;

  return (
    <section
      id="gallery"
      className="section-pad relative overflow-hidden border-b border-[#00f5ff]/5 bg-[linear-gradient(180deg,rgba(5,9,22,1),rgba(4,7,16,1))]"
    >
      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mb-12 max-w-3xl"
        >
          <p className="font-rajdhani text-[12px] uppercase tracking-[0.28em] text-[#00f5ff]/50">
            Gallery
          </p>
          <h2 className="mt-4 font-orbitron text-4xl font-black uppercase text-[#00f5ff] md:text-5xl">
            Built for screens,
            <span className="heading-gradient block">remembered in fragments.</span>
          </h2>
        </motion.div>

        <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
          {items.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              onClick={() => setActiveId(item.id)}
              className={`glass-card group relative mb-5 block w-full overflow-hidden text-left ${item.height}`}
              style={{ breakInside: "avoid" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 20% 18%, ${item.accent}33, transparent 40%), linear-gradient(180deg, rgba(0, 245, 255,0.02), rgba(0,0,0,0.18))`,
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0, 245, 255,0.03),transparent_55%)]" />

              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#00f5ff]/20 bg-black/35">
                  <Expand className="h-4 w-4 text-[#00f5ff]" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent p-5">
                <p className="font-orbitron text-lg font-bold uppercase text-[#00f5ff]">
                  {item.title}
                </p>
                <p className="mt-1 font-rajdhani text-sm uppercase tracking-[0.18em] text-[#00f5ff]/45">
                  Nakshatra 2026 Frame
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 "
            onClick={() => setActiveId(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="glass-card relative w-full max-w-4xl overflow-hidden rounded-[28px]"
              onClick={(event) => event.stopPropagation()}
            >
              <div
                className="h-[60vh] min-h-[360px] w-full"
                style={{
                  background: `radial-gradient(circle at 22% 18%, ${activeItem.accent}55, transparent 40%), linear-gradient(180deg, rgba(0, 245, 255,0.05), rgba(0,0,0,0.28))`,
                }}
              />
              <div className="border-t border-[#00f5ff]/10 p-6">
                <p className="font-orbitron text-2xl font-bold uppercase text-[#00f5ff]">
                  {activeItem.title}
                </p>
                <p className="mt-2 font-rajdhani text-base text-[#00f5ff]/55">
                  A cinematic launch frame from the Nakshatra 2026 visual
                  language, built to preview the mood of the festival gallery.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveId(null)}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#00f5ff]/20 bg-black/40"
              >
                <X className="h-4 w-4 text-[#00f5ff]" />
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
