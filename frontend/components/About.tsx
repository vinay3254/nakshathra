"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Radar, Sparkles, Trophy, Users } from "lucide-react";

/* ---------- count-up hook ---------- */
function useCountUp(target: number, duration = 1400, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      // ease-out
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const statDefs = [
  { raw: 2000, display: "+", suffix: "Students",  icon: Users,    accent: "#00f5ff", glow: "rgba(0,245,255,0.18)"    },
  { raw: 50,   display: "+", suffix: "Colleges",  icon: Radar,    accent: "#7c3aed", glow: "rgba(124,58,237,0.18)"   },
  { raw: 30,   display: "+", suffix: "Events",    icon: Sparkles, accent: "#ec4899", glow: "rgba(236,72,153,0.18)"   },
  { raw: 5,    display: "L+", suffix: "₹ Prizes", icon: Trophy,   accent: "#fbbf24", glow: "rgba(251,191,36,0.18)"   },
];

function StatCard({ stat, delay }: { stat: typeof statDefs[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(stat.raw, 1200, inView);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      whileHover={{ y: -4, boxShadow: `0 20px 50px ${stat.glow}` }}
      className="glass-card relative flex flex-col overflow-hidden p-5 transition-all duration-300"
    >
      {/* top bar */}
      <div
        className="absolute inset-x-0 top-0 h-[1.5px]"
        style={{ background: `linear-gradient(90deg,transparent,${stat.accent},transparent)` }}
      />
      {/* corner dot */}
      <div
        className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full opacity-60 pulse-ring"
        style={{ background: stat.accent, boxShadow: `0 0 8px ${stat.accent}` }}
      />

      <div
        className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#00f5ff]/[0.08]"
        style={{ background: `${stat.accent}12` }}
      >
        <Icon className="h-5 w-5" style={{ color: stat.accent }} />
      </div>

      {/* animated number */}
      <p className="font-orbitron text-3xl font-black leading-none" style={{ color: stat.accent }}>
        {stat.raw < 10 ? `₹${count}${stat.display}` : `${count}${stat.display}`}
      </p>
      <p className="mt-2 font-rajdhani text-[11px] uppercase tracking-[0.28em] text-[#00f5ff]/45">
        {stat.suffix}
      </p>
    </motion.div>
  );
}

const pillars = ["MSEC Bangalore", "3 Festival Days", "24-Hour Hackathon"];

const wordV = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const letterV = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16,1,0.3,1] } },
};

function AnimHeading({ text }: { text: string }) {
  return (
    <motion.span
      variants={wordV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="inline-flex flex-wrap"
    >
      {text.split("").map((ch, i) => (
        <motion.span key={i} variants={letterV} className={ch === " " ? "mr-2" : ""}>
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="section-pad relative overflow-hidden border-b border-[#00f5ff]/10 bg-transparent"
    >
      <div className="pointer-events-none absolute left-[8%] top-16 h-56 w-56 rounded-full bg-[#00f5ff]/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute bottom-16 right-[10%] h-64 w-64 rounded-full bg-[#ff3b3b]/[0.08] blur-3xl" />

      <span className="pointer-events-none absolute right-4 top-4 select-none font-orbitron text-[9rem] font-black leading-none text-[#00f5ff] opacity-[0.025] lg:text-[14rem]" aria-hidden="true">
        01
      </span>

      <div className="container-tight relative">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#00f5ff]/60" />
              <p className="caption-label">
                About Nakshatra
              </p>
            </div>

            <h2 className="mt-5 font-orbitron text-4xl font-black uppercase leading-[1.08] text-[#00f5ff] md:text-[3.2rem]">
              A city of ideas,
              <span className="heading-gradient mt-1 block">
                <AnimHeading text="performance & code." />
              </span>
            </h2>

            <div className="mt-7 space-y-4">
              <p className="font-rajdhani text-lg leading-8 text-[#00f5ff]/58">
                Nakshatra 2026 is MSEC Bangalore&apos;s flagship intercollegiate
                festival — built as a collision point for sharp technical
                contests, late-night innovation, campus culture, and high-energy
                stage moments. Cinematic at first glance. Deeply participatory
                once you step inside.
              </p>
              <p className="font-rajdhani text-lg leading-8 text-[#00f5ff]/42">
                Across three days, students move between hacker pits, creator
                workshops, speaker sessions, gaming arenas, and headline finals
                without losing the pulse of a single unified festival world.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {pillars.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.04, borderColor: "rgba(0,245,255,0.3)" }}
                  className="cursor-default rounded-full border border-[#00f5ff]/[0.1] bg-[#00f5ff]/[0.03] px-4 py-2 font-rajdhani text-[13px] font-semibold uppercase tracking-[0.2em] text-[#00f5ff]/58 transition-colors"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-[#00f5ff]/20 to-transparent" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#00f5ff]/50 shadow-[0_0_8px_rgba(0,245,255,0.5)]" />
            </div>

            <p className="mt-6 font-orbitron text-sm font-bold uppercase tracking-[0.22em] text-[#00f5ff]/22">
              Est. MSEC · Bengaluru, Karnataka
            </p>
          </motion.div>

          {/* Right — animated stat cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:pt-4">
            {statDefs.map((stat, index) => (
              <StatCard key={stat.suffix} stat={stat} delay={index * 0.09} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
