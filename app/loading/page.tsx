"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/dashboard");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ChatGPT%20Image%20Apr%2014,%202026,%2004_14_07%20PM.png"
        alt="Loading background"
        className="cyber-bg absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* burst glitch RGB split layers */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ChatGPT%20Image%20Apr%2014,%202026,%2004_14_07%20PM.png"
        alt=""
        aria-hidden="true"
        className="glitch-r pointer-events-none absolute inset-0 h-full w-full object-cover object-center mix-blend-screen"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ChatGPT%20Image%20Apr%2014,%202026,%2004_14_07%20PM.png"
        alt=""
        aria-hidden="true"
        className="glitch-b pointer-events-none absolute inset-0 h-full w-full object-cover object-center mix-blend-screen"
      />

      {/* parallax illusion layers */}
      <div aria-hidden="true" className="cyber-grid absolute inset-0" />
      <div aria-hidden="true" className="scanline-layer absolute inset-0" />
      <div aria-hidden="true" className="noise-layer absolute inset-0" />
      <div aria-hidden="true" className="data-lines absolute inset-0" />

      <div aria-hidden="true" className="glow-bars absolute inset-0">
        <span className="glow-bar bar-a" />
        <span className="glow-bar bar-b" />
        <span className="glow-bar bar-c" />
      </div>

      <div className="absolute inset-0 bg-black/28" />

      <div className="absolute left-1/2 top-12 z-10 -translate-x-1/2 text-center">
        <p className="font-rajdhani text-[10px] uppercase tracking-[0.42em] text-[#00f5ff]/85">
          System Boot Sequence
        </p>
        <h1 className="mt-2 font-orbitron text-2xl tracking-[0.2em] text-[#00f5ff]/90 md:text-3xl">
          NAKSHATRA 2026
        </h1>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 w-[min(78vw,420px)] -translate-x-1/2 px-4">
        <div className="mb-2 flex items-center justify-between font-rajdhani text-[11px] uppercase tracking-[0.32em] text-[#00f5ff]/70">
          <span>Loading</span>
          <span>Dashboard</span>
        </div>

        <div className="h-[2px] w-full overflow-hidden rounded-full bg-[#00f5ff]/10">
          <div className="h-full w-full origin-left rounded-full bg-[#00f5ff] shadow-[0_0_18px_rgba(0,245,255,0.65)] animate-[loading-progress_3s_linear_forwards]" />
        </div>
      </div>
    </main>
  );
}
