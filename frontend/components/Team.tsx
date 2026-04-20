"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const committees = [
  {
    name: "Core Committee",
    color: "#00f5ff",
    members: [
      { name: "Arjun Sharma", role: "President", initials: "AS" },
      { name: "Priya Nair", role: "Vice President", initials: "PN" },
      { name: "Rahul Menon", role: "General Secretary", initials: "RM" },
      { name: "Sneha Iyer", role: "Treasurer", initials: "SI" },
    ],
  },
  {
    name: "Technical Committee",
    color: "#7c3aed",
    members: [
      { name: "Dev Kumar", role: "Tech Head", initials: "DK" },
      { name: "Anjali Singh", role: "Hackathon Lead", initials: "AJ" },
      { name: "Kiran Rao", role: "AI/ML Head", initials: "KR" },
      { name: "Meera Pillai", role: "Cybersec Lead", initials: "MP" },
    ],
  },
  {
    name: "Cultural Committee",
    color: "#ec4899",
    members: [
      { name: "Aditya Patel", role: "Cultural Head", initials: "AP" },
      { name: "Riya Desai", role: "Fashion Show Lead", initials: "RD" },
      { name: "Sameer Khan", role: "Music Head", initials: "SK" },
      { name: "Nisha Tiwari", role: "Dance Head", initials: "NT" },
    ],
  },
  {
    name: "Operations",
    color: "#10b981",
    members: [
      { name: "Vikram Joshi", role: "Operations Head", initials: "VJ" },
      { name: "Pooja Reddy", role: "Logistics Lead", initials: "PR" },
      { name: "Aryan Gupta", role: "Venue Manager", initials: "AG" },
      { name: "Kavya Nambiar", role: "Security Head", initials: "KN" },
    ],
  },
  {
    name: "Marketing & PR",
    color: "#f59e0b",
    members: [
      { name: "Shreya Bose", role: "Marketing Head", initials: "SB" },
      { name: "Rohit Verma", role: "Social Media Lead", initials: "RV" },
      { name: "Isha Malhotra", role: "Design Head", initials: "IM" },
      { name: "Nikhil Saha", role: "Content Head", initials: "NS" },
    ],
  },
  {
    name: "Sponsorship",
    color: "#f97316",
    members: [
      { name: "Tanvi Mehta", role: "Sponsorship Head", initials: "TM" },
      { name: "Varun Das", role: "Corp Relations", initials: "VD" },
      { name: "Pallavi Sharma", role: "Brand Manager", initials: "PS" },
      { name: "Aman Kaur", role: "Partnership Lead", initials: "AK" },
    ],
  },
];

function MemberCard({ member, color, delay }: { member: any; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group relative flex flex-col items-center p-5 rounded-2xl border border-[#00f5ff]/8 bg-[#00f5ff]/[0.02] hover:border-opacity-50 hover:bg-[#00f5ff]/[0.04] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
      style={{ "--hover-color": color } as any}
      whileHover={{ borderColor: `${color}40`, boxShadow: `0 10px 30px ${color}15` }}
    >
      {/* Avatar */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center font-orbitron font-black text-xl mb-3 group-hover:scale-110 transition-transform duration-300"
        style={{
          background: `linear-gradient(135deg, ${color}25, ${color}10)`,
          border: `1px solid ${color}30`,
          color: color,
          boxShadow: `0 0 20px ${color}15`,
        }}
      >
        {member.initials}
      </div>

      <h4 className="font-rajdhani font-bold text-sm text-[#00f5ff] text-center mb-0.5">{member.name}</h4>
      <p className="font-rajdhani text-xs text-slate-500 text-center mb-3">{member.role}</p>

      {/* Social icons */}
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {[Linkedin, Twitter, Instagram].map((Icon, i) => (
          <div
            key={i}
            className="w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer"
            style={{ background: `${color}15` }}
          >
            <Icon className="w-3 h-3" style={{ color }} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="team" className="relative py-28 bg-[#06080f] overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-emerald-900/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-rajdhani text-sm tracking-[0.3em] uppercase text-emerald-400/70 mb-4">
            — The Architects —
          </span>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-[#00f5ff] mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="font-rajdhani text-lg text-slate-400 max-w-2xl mx-auto">
            Nakshatra is powered by 100+ passionate students who work tirelessly to build something extraordinary.
          </p>
        </motion.div>

        <div className="space-y-12">
          {committees.map((committee, ci) => (
            <motion.div
              key={committee.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.1 }}
            >
              {/* Committee header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="px-4 py-2 rounded-xl font-orbitron font-bold text-sm"
                  style={{
                    background: `${committee.color}15`,
                    border: `1px solid ${committee.color}30`,
                    color: committee.color,
                  }}
                >
                  {committee.name}
                </div>
                <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${committee.color}30, transparent)` }} />
              </div>

              {/* Members */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {committee.members.map((member, mi) => (
                  <MemberCard
                    key={member.name}
                    member={member}
                    color={committee.color}
                    delay={ci * 0.05 + mi * 0.06}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Faculty advisors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 p-8 rounded-3xl border border-[#00f5ff]/8 bg-[#00f5ff]/[0.02] text-center"
        >
          <h3 className="font-orbitron font-bold text-xl text-[#00f5ff] mb-2">Faculty Advisors</h3>
          <p className="font-rajdhani text-slate-400 mb-6">Guided by visionary mentors who believe in student excellence.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Dr. Ramesh Kumar", "Prof. Sunita Rao", "Dr. Anil Krishnan", "Prof. Meghna Bhatia"].map((advisor) => (
              <div key={advisor} className="px-5 py-2.5 rounded-full border border-[#00f5ff]/10 bg-[#00f5ff]/3 font-rajdhani font-semibold text-sm text-slate-300">
                {advisor}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
