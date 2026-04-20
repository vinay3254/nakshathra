"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Building2, ShieldCheck, Ticket } from "lucide-react";

const trustBadges = [
  {
    title: "Campus stay support",
    detail: "Accommodation desk opens with early registrations.",
    icon: Building2,
  },
  {
    title: "Fast-track entry",
    detail: "QR check-in and event wristband pickup on arrival.",
    icon: Ticket,
  },
  {
    title: "Verified registration",
    detail: "Confirmation mail and support response within one business day.",
    icon: ShieldCheck,
  },
];

export default function Registration() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="store"
      className="section-pad relative overflow-hidden border-b border-[#00f5ff]/10 bg-transparent"
    >
      <div id="register" className="absolute -top-20" />
      <div id="accommodation" className="absolute -top-20" />

      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="glass-card overflow-hidden rounded-[28px] border-[#00f5ff]/10"
        >
          <div className="grid gap-10 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
            <div>
              <p className="caption-label">
                Registration
              </p>
              <h2 className="mt-4 font-orbitron text-4xl font-black uppercase text-[#00f5ff] md:text-5xl">
                Lock your pass before
                <span className="heading-gradient block">the city wakes up.</span>
              </h2>
              <p className="mt-6 max-w-xl font-rajdhani text-lg leading-8 text-[#00f5ff]/58">
                Register for Nakshatra 2026, request accommodation support, and
                reserve access to competitions, workshops, and the closing-night
                showcases from one desk.
              </p>

              <div className="mt-10 space-y-4">
                {trustBadges.map((badge) => {
                  const Icon = badge.icon;

                  return (
                    <div
                      key={badge.title}
                      className="flex items-start gap-4 rounded-2xl border border-[#00f5ff]/8 bg-[#00f5ff]/[0.03] px-5 py-4"
                    >
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00f5ff]/10">
                        <Icon className="h-5 w-5 text-[#00f5ff]" />
                      </div>
                      <div>
                        <p className="font-orbitron text-sm font-bold uppercase text-[#00f5ff]">
                          {badge.title}
                        </p>
                        <p className="mt-1 font-rajdhani text-base text-[#00f5ff]/52">
                          {badge.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[24px] border border-[#00f5ff]/8 bg-[rgba(0, 245, 255,0.03)] p-6 md:p-8">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#00f5ff]/14">
                    <BadgeCheck className="h-7 w-7 text-[#00f5ff]" />
                  </div>
                  <h3 className="mt-6 font-orbitron text-2xl font-bold uppercase text-[#00f5ff]">
                    You&apos;re on the list.
                  </h3>
                  <p className="mt-3 max-w-md font-rajdhani text-lg text-[#00f5ff]/58">
                    A confirmation mail and your festival access details will be
                    shared shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      required
                      type="text"
                      placeholder="Full name"
                      className="rounded-2xl border border-[#00f5ff]/10 bg-[#00f5ff]/[0.03] px-4 py-3 font-rajdhani text-base text-[#00f5ff] placeholder:text-[#00f5ff]/30 focus:border-[#00f5ff]/50 focus:outline-none"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email address"
                      className="rounded-2xl border border-[#00f5ff]/10 bg-[#00f5ff]/[0.03] px-4 py-3 font-rajdhani text-base text-[#00f5ff] placeholder:text-[#00f5ff]/30 focus:border-[#00f5ff]/50 focus:outline-none"
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      required
                      type="text"
                      placeholder="College / Institution"
                      className="rounded-2xl border border-[#00f5ff]/10 bg-[#00f5ff]/[0.03] px-4 py-3 font-rajdhani text-base text-[#00f5ff] placeholder:text-[#00f5ff]/30 focus:border-[#00f5ff]/50 focus:outline-none"
                    />
                    <select
                      required
                      defaultValue=""
                      className="rounded-2xl border border-[#00f5ff]/10 bg-[#00f5ff]/[0.03] px-4 py-3 font-rajdhani text-base text-[#00f5ff] focus:border-[#00f5ff]/50 focus:outline-none"
                    >
                      <option value="" disabled className="bg-[#09101d]">
                        Preferred track
                      </option>
                      <option className="bg-[#09101d]">Competitions</option>
                      <option className="bg-[#09101d]">Workshops</option>
                      <option className="bg-[#09101d]">Gaming Arena</option>
                      <option className="bg-[#09101d]">Accommodation Help</option>
                    </select>
                  </div>

                  <textarea
                    rows={5}
                    placeholder="Tell us what you want to register for."
                    className="w-full rounded-2xl border border-[#00f5ff]/10 bg-[#00f5ff]/[0.03] px-4 py-3 font-rajdhani text-base text-[#00f5ff] placeholder:text-[#00f5ff]/30 focus:border-[#00f5ff]/50 focus:outline-none"
                  />

                  <button
                    type="submit"
                    className="btn-ui-blue mt-3 inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 font-rajdhani text-sm font-semibold uppercase tracking-[0.22em]"
                  >
                    Reserve My Spot
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
