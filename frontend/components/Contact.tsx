"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Mail, MapPin, Users } from "lucide-react";

const infoCards = [
  {
    title: "Festival Desk",
    value: "hello@nakshatra2026.in",
    detail: "General queries, passes, and participant support.",
    icon: Mail,
  },
  {
    title: "Partnerships",
    value: "partners@nakshatra2026.in",
    detail: "Brand tie-ups, showcase decks, and activation plans.",
    icon: Building2,
  },
  {
    title: "Campus Venue",
    value: "MSEC Bangalore",
    detail: "Hosted across the central stage, labs, and activity courts.",
    icon: MapPin,
  },
  {
    title: "Volunteer Cell",
    value: "Student Operations Team",
    detail: "Crew onboarding and on-ground coordination support.",
    icon: Users,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden border-b border-[#00f5ff]/10 bg-transparent"
    >
      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mb-12 max-w-3xl"
        >
          <p className="caption-label">
            Contact
          </p>
          <h2 className="mt-4 font-orbitron text-4xl font-black uppercase text-[#00f5ff] md:text-5xl">
            Reach the team before
            <span className="heading-gradient block">festival week begins.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {infoCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="glass-card p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff3b3b]/12">
                      <Icon className="h-5 w-5 text-[#ffb020]" />
                    </div>
                    <div>
                      <p className="font-rajdhani text-[12px] uppercase tracking-[0.2em] text-[#00f5ff]/45">
                        {card.title}
                      </p>
                      <p className="mt-2 font-orbitron text-lg font-bold uppercase text-[#00f5ff]">
                        {card.value}
                      </p>
                      <p className="mt-2 font-rajdhani text-base text-[#00f5ff]/55">
                        {card.detail}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-card rounded-[28px] p-6 md:p-8"
          >
            {submitted ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <p className="font-orbitron text-2xl font-bold uppercase text-[#00f5ff]">
                  Message received.
                </p>
                <p className="mt-3 max-w-md font-rajdhani text-lg text-[#00f5ff]/58">
                  The Nakshatra team will reply with the right desk, timeline,
                  or access note shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="rounded-2xl border border-[#00f5ff]/10 bg-[#00f5ff]/[0.03] px-4 py-3 font-rajdhani text-base text-[#00f5ff] placeholder:text-[#00f5ff]/30 focus:border-[#00f5ff]/50 focus:outline-none"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Your email"
                    className="rounded-2xl border border-[#00f5ff]/10 bg-[#00f5ff]/[0.03] px-4 py-3 font-rajdhani text-base text-[#00f5ff] placeholder:text-[#00f5ff]/30 focus:border-[#00f5ff]/50 focus:outline-none"
                  />
                </div>

                <input
                  required
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-2xl border border-[#00f5ff]/10 bg-[#00f5ff]/[0.03] px-4 py-3 font-rajdhani text-base text-[#00f5ff] placeholder:text-[#00f5ff]/30 focus:border-[#00f5ff]/50 focus:outline-none"
                />

                <textarea
                  required
                  rows={6}
                  placeholder="How can we help?"
                  className="w-full rounded-2xl border border-[#00f5ff]/10 bg-[#00f5ff]/[0.03] px-4 py-3 font-rajdhani text-base text-[#00f5ff] placeholder:text-[#00f5ff]/30 focus:border-[#00f5ff]/50 focus:outline-none"
                />

                <button
                  type="submit"
                  className="btn-ui-blue inline-flex rounded-2xl px-6 py-4 font-rajdhani text-sm font-semibold uppercase tracking-[0.22em]"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
