"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Music2, Film, Mic, Radio, Sparkles } from "lucide-react";

const specials = [
  {
    icon: Music2,
    title: "Nakshatra Anthem",
    subtitle: "Official Theme Song",
    desc: "An original anthem composed exclusively for Nakshatra 2026, blending electronic beats with classical Indian instruments. The sound of a generation rising.",
    color: "#00f5ff",
    gradient: "from-cyan-500/15 to-transparent",
    border: "border-cyan-500/20",
    size: "large",
    tag: "EXCLUSIVE",
  },
  {
    icon: Film,
    title: "Documentary",
    subtitle: "OTT + Television",
    desc: "The behind-the-scenes story of Nakshatra — premiering on a major OTT platform and national television. 3 days. Thousands of stories. One film.",
    color: "#7c3aed",
    gradient: "from-violet-600/15 to-transparent",
    border: "border-violet-500/20",
    size: "large",
    tag: "OTT PREMIERE",
  },
  {
    icon: Mic,
    title: "Stand-up Night",
    subtitle: "Comedy Special",
    desc: "A night of side-splitting laughter featuring top stand-up comedians from the national circuit. Expect the unexpected.",
    color: "#fbbf24",
    gradient: "from-yellow-500/15 to-transparent",
    border: "border-yellow-500/20",
    size: "small",
    tag: "LIVE SHOW",
  },
  {
    icon: Radio,
    title: "Concert Night: Reble",
    subtitle: "Musical Extravaganza",
    desc: "The grand finale — an electrifying concert night featuring chart-topping artists. Lights, bass, and 5,000 people in pure euphoria.",
    color: "#ec4899",
    gradient: "from-pink-600/15 to-transparent",
    border: "border-pink-500/20",
    size: "small",
    tag: "GRAND FINALE",
  },
];

export default function SpecialFeatures() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const large = specials.filter((s) => s.size === "large");
  const small = specials.filter((s) => s.size === "small");

  return (
    <section id="special" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] rounded-full bg-pink-900/8 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-cyan-900/8 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="font-rajdhani text-sm tracking-[0.3em] uppercase text-yellow-400/70">
              Beyond Events
            </span>
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </div>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-[#00f5ff] mb-4">
            Special{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="font-rajdhani text-lg text-slate-400 max-w-2xl mx-auto">
            Nakshatra goes beyond competition. These are the moments you'll talk about for years.
          </p>
        </motion.div>

        {/* Large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {large.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`relative p-8 rounded-3xl border ${item.border} bg-gradient-to-br ${item.gradient} bg-[#0a0f1e]/70  overflow-hidden group hover:-translate-y-2 transition-all duration-500`}
                style={{ boxShadow: `0 0 0 0 ${item.color}00` }}
                whileHover={{ boxShadow: `0 20px 60px ${item.color}20` }}
              >
                {/* Animated background circle */}
                <div
                  className="absolute -right-12 -top-12 w-48 h-48 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: item.color }}
                />

                {/* Tag */}
                <span
                  className="inline-block mb-5 px-3 py-1 rounded-full text-xs font-orbitron font-black tracking-widest"
                  style={{
                    background: `${item.color}20`,
                    border: `1px solid ${item.color}40`,
                    color: item.color,
                  }}
                >
                  {item.tag}
                </span>

                <div className="flex items-start gap-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}15`, boxShadow: `0 0 25px ${item.color}25` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-black text-2xl text-[#00f5ff] mb-1">{item.title}</h3>
                    <p className="font-rajdhani text-sm font-semibold tracking-wider uppercase mb-4" style={{ color: item.color }}>
                      {item.subtitle}
                    </p>
                    <p className="font-rajdhani text-slate-400 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.color}60, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Small cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {small.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
                className={`relative p-7 rounded-2xl border ${item.border} bg-gradient-to-r ${item.gradient} bg-[#0a0f1e]/70  overflow-hidden group hover:-translate-y-1.5 transition-all duration-400 cursor-pointer`}
                whileHover={{ boxShadow: `0 15px 40px ${item.color}20` }}
              >
                <div className="flex items-center gap-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: item.color }} />
                  </div>
                  <div>
                    <span
                      className="text-xs font-orbitron font-black tracking-widest"
                      style={{ color: item.color }}
                    >
                      {item.tag}
                    </span>
                    <h3 className="font-orbitron font-bold text-xl text-[#00f5ff] mb-1 mt-0.5">{item.title}</h3>
                    <p className="font-rajdhani text-slate-400 text-sm">{item.subtitle}</p>
                  </div>
                </div>
                <p className="font-rajdhani text-slate-400 text-sm leading-relaxed mt-4">{item.desc}</p>

                <div
                  className="absolute top-0 right-0 w-32 h-full opacity-5 pointer-events-none"
                  style={{ background: `linear-gradient(to left, ${item.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
