"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "ACCOMMODATION", href: "/accommodation" },
  { label: "WORKSHOPS", href: "/workshops" },
  { label: "COMPETITIONS", href: "/competitions" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Schedule", href: "/schedule" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const goTo = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  const goToRegisterFlow = () => {
    setIsOpen(false);
    window.open("/loading", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="fixed left-0 right-0 top-0 z-40 h-[64px] bg-transparent md:left-[150px] md:right-[112px]"
      >
        <div className="grid h-full grid-cols-[auto_1fr_auto] items-center px-4 md:grid-cols-[1fr_auto_1fr] md:px-8">
          <div className="flex items-center md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(0,245,255,0.35)] bg-transparent text-[#00f5ff] transition-colors hover:border-[rgba(0,245,255,0.7)] hover:text-[#00f5ff]"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          <div className="hidden items-center md:flex">
            {/* MSEC Logo removed as requested */}
          </div>

          <div className="flex items-center justify-center gap-10">
            <div className="hidden items-center gap-10 md:flex">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => goTo(link.href)}
                  className="group relative font-rajdhani text-[13px] font-semibold tracking-[0.12em] text-[rgba(0, 245, 255,0.65)] transition-colors hover:text-[#00f5ff]"
                >
                  {link.label}
                  <span className="absolute -bottom-[10px] left-0 h-px w-0 bg-[#00f5ff] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={goToRegisterFlow}
              className="hidden rounded-md border border-[#fb932e] bg-[#fb932e] px-5 py-2 font-rajdhani text-[13px] font-semibold tracking-[0.1em] text-black transition-all hover:bg-[#ffaa55] hover:border-[#ffaa55] hover:shadow-[0_0_16px_rgba(251,147,46,0.45)] md:inline-flex"
            >
              REGISTER
            </button>

            <button
              type="button"
              onClick={goToRegisterFlow}
              className="rounded-md border border-[#fb932e] bg-[#fb932e] px-3 py-2 font-rajdhani text-[11px] font-semibold tracking-[0.1em] text-black transition-all hover:bg-[#ffaa55] hover:border-[#ffaa55] md:hidden"
            >
              REGISTER
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[59] bg-black/45 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="fixed inset-y-0 left-0 z-[60] w-[min(86vw,360px)] border-r border-[#00f5ff]/10 bg-[rgba(3,7,18,0.92)] px-6 pb-8 pt-5 md:hidden"
            >
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <p className="font-orbitron text-lg tracking-[0.32em] text-[#00f5ff]">
                    NAKSHATRA
                  </p>
                  <p className="font-rajdhani text-xs tracking-[0.3em] text-[#00f5ff]/50">
                    MSEC BANGALORE
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(0,245,255,0.35)] bg-transparent text-[#00f5ff]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-3">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    type="button"
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * index }}
                    onClick={() => goTo(link.href)}
                    className="w-full rounded-2xl border border-[#00f5ff]/10 bg-[#00f5ff]/[0.04] px-4 py-4 text-left font-rajdhani text-sm font-semibold tracking-[0.16em] text-[#00f5ff]/75 transition-colors hover:border-[rgba(0,245,255,0.35)] hover:text-[#00f5ff]"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <div className="mt-8 space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    type="button"
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.22 + 0.05 * index }}
                    onClick={() => goTo(link.href)}
                    className="flex w-full items-center justify-between rounded-xl border border-[#00f5ff]/8 px-4 py-3 font-rajdhani text-sm tracking-[0.12em] text-[#00f5ff]/65"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#00f5ff]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
