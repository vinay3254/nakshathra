"use client";

import { motion } from "framer-motion";
import { Crown, Gem, Medal } from "lucide-react";

const tiers = [
  {
    title: "Title",
    accent: "#fbbf24",
    icon: Crown,
    logos: ["Aster Grid", "Nova Bank"],
  },
  {
    title: "Gold",
    accent: "#00f5ff",
    icon: Medal,
    logos: ["Pixel Forge", "Cloud Mint", "Vertex Labs"],
  },
  {
    title: "Silver",
    accent: "#ec4899",
    icon: Gem,
    logos: ["Signal Hive", "Code Orchard", "Mira Studio", "Blue Orbit"],
  },
];

const partners = [
  "Community Circle",
  "Founder Grid",
  "Student Pod",
  "Design Deck",
  "Maker Lane",
  "Cloud Guild",
  "Campus Radio",
  "City Creators",
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="section-pad relative overflow-hidden border-b border-[#00f5ff]/10 bg-transparent"
    >
      {/* Ghost number */}
      <span
        className="pointer-events-none absolute right-4 top-4 select-none font-orbitron text-[9rem] font-black leading-none text-[#00f5ff] opacity-[0.02] lg:text-[14rem]"
        aria-hidden="true"
      >
        05
      </span>

      <div className="container-tight relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mb-14 max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#ff3b3b]/70" />
            <p className="caption-label">
              Sponsors
            </p>
          </div>
          <h2 className="mt-4 font-orbitron text-4xl font-black uppercase text-[#00f5ff] md:text-5xl">
            Backed by brands that want
            <span className="heading-gradient block">visibility with momentum.</span>
          </h2>
        </motion.div>

        {/* Tier cards */}
        <div className="grid gap-4 lg:grid-cols-3">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;

            return (
              <motion.article
                key={tier.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.09, ease: "easeOut" }}
                className="glass-card relative overflow-hidden p-6"
              >
                {/* Top accent */}
                <div
                  className="absolute inset-x-0 top-0 h-[1.5px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${tier.accent}, transparent)`,
                  }}
                />

                {/* Tier header */}
                <div className="flex items-center gap-3">
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: `${tier.accent}14` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: tier.accent }} />
                  </div>
                  <div>
                    <p
                      className="font-rajdhani text-[10px] uppercase tracking-[0.26em]"
                      style={{ color: tier.accent }}
                    >
                      {tier.title} Tier
                    </p>
                    <p className="font-orbitron text-base font-bold uppercase text-[#00f5ff]">
                      Sponsors
                    </p>
                  </div>
                </div>

                {/* Logo placeholders */}
                <div className="mt-7 grid gap-2.5">
                  {tier.logos.map((logo) => (
                    <div
                      key={logo}
                      className="flex min-h-[80px] items-center justify-center rounded-sm border border-[#00f5ff]/[0.07] bg-[#00f5ff]/[0.025] transition-all hover:border-[#00f5ff]/[0.14] hover:bg-[#00f5ff]/[0.04]"
                    >
                      <span className="font-orbitron text-[11px] uppercase tracking-[0.28em] text-[#00f5ff]/45">
                        {logo}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Partner marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 overflow-hidden rounded-full border border-[#00f5ff]/[0.08] bg-[#00f5ff]/[0.02] py-3"
        >
          <div className="flex w-max min-w-full animate-[marquee_22s_linear_infinite] items-center gap-12 whitespace-nowrap px-8">
            {[...partners, ...partners].map((partner, index) => (
              <span
                key={`${partner}-${index}`}
                className="flex items-center gap-3 font-rajdhani text-[11px] uppercase tracking-[0.28em] text-[#00f5ff]/35"
              >
                <span className="star-dot" />
                {partner}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
