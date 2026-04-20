"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Crown, Star, ArrowRight, Sparkles, TrendingUp } from "lucide-react";

const recognitions = [
  {
    icon: TrendingUp,
    title: "Budding Entrepreneurs",
    subtitle: "Recognizing the Founders of Tomorrow",
    desc: "We honour student entrepreneurs who have launched ventures, driven social change, or demonstrated extraordinary business acumen. Nominees are evaluated on impact, innovation, scalability, and leadership.",
    criteria: ["Active venture or prototype", "Demonstrated impact", "Under 25 years old", "3 nominations required"],
    color: "#00f5ff",
    gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    border: "border-cyan-500/25",
    award: "Entrepreneur of the Year",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  },
  {
    icon: Crown,
    title: "Honouring Greatest Personalities",
    subtitle: "Legends Who Shaped Our World",
    desc: "A special recognition ceremony honouring distinguished alumni, faculty, industry stalwarts, and community leaders who have made extraordinary contributions to society, technology, or culture.",
    criteria: ["Significant societal contribution", "Industry or academic leadership", "Nominated by institution", "Public recognition"],
    color: "#fbbf24",
    gradient: "from-yellow-500/20 via-yellow-500/5 to-transparent",
    border: "border-yellow-500/25",
    award: "Lifetime Achievement",
    badgeColor: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
  },
];

export default function SocietalRecognitions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="recognitions" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-yellow-900/6 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="font-rajdhani text-sm tracking-[0.3em] uppercase text-yellow-400/70">
              Societal Recognitions
            </span>
            <Award className="w-5 h-5 text-yellow-400" />
          </div>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-[#00f5ff] mb-4">
            Honours &{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Recognition
            </span>
          </h2>
          <p className="font-rajdhani text-lg text-slate-400 max-w-2xl mx-auto">
            Nakshatra celebrates not just competition, but the individuals who illuminate the path for others.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {recognitions.map((rec, i) => {
            const Icon = rec.icon;
            return (
              <motion.div
                key={rec.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={`relative p-8 rounded-3xl border ${rec.border} bg-gradient-to-br ${rec.gradient} bg-[#0a0f1e]/60  overflow-hidden group`}
                whileHover={{ y: -6, boxShadow: `0 25px 60px ${rec.color}15` }}
                style={{ transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)" }}
              >
                {/* Decorative star cluster */}
                <div className="absolute top-4 right-4 flex gap-1 opacity-30">
                  {[...Array(5)].map((_, si) => (
                    <Star
                      key={si}
                      className="w-3 h-3 fill-current"
                      style={{ color: rec.color, opacity: 1 - si * 0.15 }}
                    />
                  ))}
                </div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: `${rec.color}15`, boxShadow: `0 0 30px ${rec.color}25` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: rec.color }} />
                  </div>
                  <div>
                    <span className={`inline-block mb-1.5 px-3 py-0.5 rounded-full text-xs font-orbitron font-bold border tracking-widest ${rec.badgeColor}`}>
                      {rec.award}
                    </span>
                    <h3 className="font-orbitron font-black text-xl text-[#00f5ff]">{rec.title}</h3>
                  </div>
                </div>

                <p className="font-rajdhani text-sm font-semibold tracking-wider uppercase mb-3" style={{ color: `${rec.color}90` }}>
                  {rec.subtitle}
                </p>

                <p className="font-rajdhani text-slate-400 leading-relaxed mb-6">{rec.desc}</p>

                {/* Criteria */}
                <div className="mb-7">
                  <p className="font-rajdhani text-xs tracking-widest uppercase text-slate-600 mb-3">
                    Nomination Criteria
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {rec.criteria.map((c) => (
                      <div key={c} className="flex items-start gap-2">
                        <Sparkles className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: rec.color }} />
                        <span className="font-rajdhani text-sm text-slate-400">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  className="group/btn flex items-center gap-2 px-6 py-3 rounded-full border font-orbitron font-bold text-sm tracking-wider hover:gap-4 transition-all duration-300"
                  style={{
                    borderColor: `${rec.color}40`,
                    color: rec.color,
                    background: `${rec.color}10`,
                  }}
                >
                  Nominate Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Bottom line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${rec.color}60, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="font-rajdhani text-slate-500 italic text-lg max-w-xl mx-auto">
            "True Nakshatra — stars — are those who light the way for others."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
