"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can attend Nakshatra 2026?",
    answer:
      "The festival is open to intercollegiate participants, student clubs, and invited campus communities. Individual competitions and workshops are accessible through the registration desk.",
  },
  {
    question: "Does registration include accommodation help?",
    answer:
      "Yes. Early registrations can request accommodation support, and the festival desk will share stay options, arrival instructions, and campus access windows.",
  },
  {
    question: "How many events can one student join?",
    answer:
      "Participants can register for multiple slots as long as event timings do not overlap. The schedule is structured to leave room for workshops, headline finals, and stage events.",
  },
  {
    question: "Will the 24-hour hackathon have mentor support?",
    answer:
      "Yes. Mentors, review checkpoints, and late-night technical support will be available through the hacking window so teams can keep shipping with context.",
  },
  {
    question: "Are there team and college-level awards?",
    answer:
      "Yes. Nakshatra recognises event winners, standout teams, and top-performing campuses through cumulative points and jury picks during the closing ceremony.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="section-pad relative overflow-hidden border-b border-[#00f5ff]/5 bg-[linear-gradient(180deg,rgba(4,7,16,1),rgba(5,8,18,1))]"
    >
      <div className="container-tight relative max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <p className="font-rajdhani text-[12px] uppercase tracking-[0.28em] text-[#00f5ff]/50">
            FAQs
          </p>
          <h2 className="mt-4 font-orbitron text-4xl font-black uppercase text-[#00f5ff] md:text-5xl">
            Questions before
            <span className="heading-gradient block">you step inside.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="glass-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="font-orbitron text-lg font-bold uppercase text-[#00f5ff]">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#00f5ff]/10 bg-[#00f5ff]/[0.03]"
                  >
                    <ChevronDown className="h-4 w-4 text-[#00f5ff]/60" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#00f5ff]/8 px-5 pb-5 pt-4">
                        <p className="font-rajdhani text-lg leading-8 text-[#00f5ff]/58">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
