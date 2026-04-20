export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full scale-[1.14] object-cover object-[62%_center]"
          src="/videoplayback.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <img
          src="/hero-logo-transparent.png"
          alt="Nakshatra 2026"
          className="h-auto w-[min(88vw,760px)] object-contain"
        />
      </div>
    </section>
  );
}
