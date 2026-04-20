"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, ShoppingBag, Brush, UtensilsCrossed, Camera, Handshake, Shirt, Music, Star, Gift } from "lucide-react";

const stalls = [
  {
    icon: Briefcase,
    title: "Career Guidance",
    desc: "One-on-one sessions with HR professionals, resume reviews, and mock interviews from top companies.",
    tag: "Professional",
    color: "#00f5ff",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Handshake,
    title: "Brand Collaborations",
    desc: "Meet and engage with industry-leading brands. Special offers, product demos, and giveaways.",
    tag: "Partners",
    color: "#7c3aed",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: Brush,
    title: "Handicrafts & Art",
    desc: "Discover handcrafted masterpieces from artisans across Karnataka. Live art installations and workshops.",
    tag: "Art & Culture",
    color: "#f59e0b",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Fun",
    desc: "A culinary carnival featuring street food, gourmet bites, exotic beverages, and sweet treats from 50+ vendors.",
    tag: "Food Court",
    color: "#ec4899",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
  {
    icon: Camera,
    title: "Photo Booths",
    desc: "Themed photo zones with AR filters, neon backdrops, and professional photographers capturing your Nakshatra moments.",
    tag: "Experience",
    color: "#10b981",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: ShoppingBag,
    title: "Nakshatra Merch",
    desc: "Limited edition merchandise — hoodies, tees, badges, and collectibles. Own a piece of the legend.",
    tag: "Exclusive",
    color: "#f97316",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    icon: Music,
    title: "Music Lounge",
    desc: "Chill acoustic sessions, DJ sets, and open-mic opportunities in an ambient lounge setting.",
    tag: "Vibe Zone",
    color: "#8b5cf6",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Gift,
    title: "Lucky Draws",
    desc: "Hourly prize giveaways including gadgets, vouchers, and experience passes. Your lucky star might shine.",
    tag: "Prizes",
    color: "#fbbf24",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
  {
    icon: Shirt,
    title: "Styling Studio",
    desc: "Get a complete makeover from professional stylists. Fashion forward, always.",
    tag: "Beauty",
    color: "#f43f5e",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
  {
    icon: Star,
    title: "VIP Lounge",
    desc: "Exclusive zone for premium pass holders — premium seating, complimentary refreshments, and priority access.",
    tag: "Premium",
    color: "#a78bfa",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
  },
];

export default function CarnivalZone() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="carnival" className="relative py-28 bg-[#06080f] overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #00f5ff 0px, transparent 1px, transparent 40px)`,
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-pink-900/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-rajdhani text-sm tracking-[0.3em] uppercase text-orange-400/70 mb-4">
            — The Carnival Experience —
          </span>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-[#00f5ff] mb-4">
            Carnival{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Zone
            </span>
          </h2>
          <p className="font-rajdhani text-lg text-slate-400 max-w-2xl mx-auto">
            Step into a world of wonder. The Nakshatra Carnival is a 3-day extravaganza of food, fun, art, and unforgettable experiences.
          </p>
        </motion.div>

        {/* Masonry-style stall grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {stalls.map((stall, i) => {
            const Icon = stall.icon;
            // Make some cards span 2 cols for visual interest
            const isWide = i === 0 || i === 4 || i === 9;
            return (
              <motion.div
                key={stall.title}
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative p-6 rounded-2xl border ${stall.border} ${stall.bg}  overflow-hidden cursor-pointer transition-all duration-400 hover:-translate-y-2 ${isWide ? "xl:col-span-2" : ""}`}
                whileHover={{
                  boxShadow: `0 20px 40px ${stall.color}20, 0 0 0 1px ${stall.color}30`,
                }}
              >
                {/* Number watermark */}
                <span
                  className="absolute -bottom-2 -right-2 font-orbitron font-black text-[4rem] opacity-5 select-none leading-none"
                  style={{ color: stall.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `${stall.color}15`,
                    boxShadow: `0 0 20px ${stall.color}20`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: stall.color }} />
                </div>

                {/* Tag */}
                <span
                  className="inline-block mb-2 text-xs font-rajdhani font-bold tracking-widest uppercase"
                  style={{ color: `${stall.color}90` }}
                >
                  {stall.tag}
                </span>

                <h3 className="font-orbitron font-bold text-base text-[#00f5ff] mb-2 group-hover:text-[#00f5ff]/90">
                  {stall.title}
                </h3>
                <p className="font-rajdhani text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">
                  {stall.desc}
                </p>

                {/* Top line */}
                <div
                  className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `linear-gradient(90deg, transparent, ${stall.color}60, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
