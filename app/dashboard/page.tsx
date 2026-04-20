import {
  CalendarDays,
  ChevronRight,
  Clock3,
  MapPinned,
  Ticket,
  Users,
  Zap,
} from "lucide-react";

const stats = [
  { label: "Registered Events", value: "08", icon: Ticket },
  { label: "Live Sessions", value: "12", icon: Zap },
  { label: "Team Members", value: "04", icon: Users },
  { label: "Days Left", value: "03", icon: CalendarDays },
];

const featuredEvents = [
  {
    name: "Cyber Circuit",
    time: "10:30 AM",
    venue: "Main Arena",
    tag: "Workshop",
  },
  {
    name: "Neon Hackathon",
    time: "01:00 PM",
    venue: "Innovation Hall",
    tag: "Hackathon",
  },
  {
    name: "Tech Beats",
    time: "06:00 PM",
    venue: "Stage 02",
    tag: "Cultural",
  },
];

export default function DashboardPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--space-black)] text-[#00f5ff]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videoplayback.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.14),rgba(3,7,18,0.42)_45%,rgba(3,7,18,0.58))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,245,255,0.1),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.12),transparent_34%)]" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-10 pt-8 md:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-[#00f5ff]/10 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-rajdhani text-xs uppercase tracking-[0.45em] text-[#00f5ff]">
              Nakshatra 2026
            </p>
            <h1 className="mt-2 font-orbitron text-3xl tracking-[0.08em] md:text-5xl">
              Dashboard
            </h1>
            <p className="mt-3 max-w-2xl font-rajdhani text-sm text-[#00f5ff]/70 md:text-base">
              Your events, schedule, and participation overview are live over the
              cyberpunk city backdrop.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
            <button className="rounded-full border border-[#00f5ff] bg-[#00f5ff] px-5 py-2.5 font-rajdhani text-sm font-semibold tracking-[0.12em] text-[#00f5ff] transition hover:bg-[#00d8e0]">
              Open Schedule
            </button>
            <button className="rounded-full border border-[#00f5ff]/15 bg-[#00f5ff]/5 px-5 py-2.5 font-rajdhani text-sm font-semibold tracking-[0.12em] text-[#00f5ff] transition hover:border-[#00f5ff] hover:text-[#00f5ff]">
              My Pass
            </button>
          </div>
        </header>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article
                key={stat.label}
                className="card-hover-glow relative overflow-hidden rounded-2xl border border-[#00f5ff]/12 bg-[rgba(10,15,30,0.28)] p-5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-rajdhani text-xs uppercase tracking-[0.32em] text-[#00f5ff]/50">
                      {stat.label}
                    </p>
                    <p className="mt-3 font-orbitron text-4xl text-[#00f5ff]">
                      {stat.value}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#00f5ff]/20 bg-[#00f5ff]/3 p-3 text-[#00f5ff]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <section className="card-hover-glow rounded-3xl border border-[#00f5ff]/12 bg-[rgba(10,15,30,0.28)] p-6 md:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-rajdhani text-xs uppercase tracking-[0.35em] text-[#00f5ff]">
                  Featured Track
                </p>
                <h2 className="mt-2 font-orbitron text-2xl tracking-[0.08em] md:text-3xl">
                  Next Events on Your Radar
                </h2>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-[#00f5ff]/15 bg-[#00f5ff]/3 px-4 py-2 font-rajdhani text-sm text-[#00f5ff]/80 transition hover:border-[#00f5ff] hover:text-[#00f5ff]">
                View all <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 grid gap-4">
              {featuredEvents.map((event) => (
                <article
                  key={event.name}
                  className="rounded-2xl border border-[#00f5ff]/10 bg-[rgba(0, 245, 255,0.02)] p-5 transition hover:border-[#00f5ff]/40"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="font-rajdhani text-xs uppercase tracking-[0.3em] text-[#00f5ff]">
                        {event.tag}
                      </p>
                      <h3 className="mt-2 font-orbitron text-xl tracking-[0.05em] text-[#00f5ff]">
                        {event.name}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-[#00f5ff]/70">
                      <span className="inline-flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-[#00f5ff]" />
                        {event.time}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPinned className="h-4 w-4 text-[#00f5ff]" />
                        {event.venue}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="grid gap-6">
            <section className="rounded-3xl border border-[#00f5ff]/12 bg-[rgba(10,15,30,0.28)] p-6">
              <p className="font-rajdhani text-xs uppercase tracking-[0.35em] text-[#00f5ff]">
                Today&apos;s Focus
              </p>
              <h2 className="mt-2 font-orbitron text-2xl tracking-[0.08em]">
                Cyber Arena
              </h2>
              <p className="mt-4 font-rajdhani text-sm leading-6 text-[#00f5ff]/70">
                Complete your registrations, lock your slots, and keep an eye on
                the live schedule. The dashboard keeps everything visible over
                the city backdrop.
              </p>

              <div className="mt-6 space-y-3 text-sm text-[#00f5ff]/75">
                <div className="flex items-center justify-between rounded-xl border border-[#00f5ff]/10 bg-[#00f5ff]/3 px-4 py-3">
                  <span>Profile Completion</span>
                  <span className="text-[#00f5ff]">92%</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-[#00f5ff]/10 bg-[#00f5ff]/3 px-4 py-3">
                  <span>Confirmed Entries</span>
                  <span className="text-[#00f5ff]">8</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-[#00f5ff]/10 bg-[#00f5ff]/3 px-4 py-3">
                  <span>Pending Approvals</span>
                  <span className="text-[#00f5ff]">2</span>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-[#00f5ff]/12 bg-[rgba(10,15,30,0.28)] p-6">
              <p className="font-rajdhani text-xs uppercase tracking-[0.35em] text-[#00f5ff]">
                Quick Links
              </p>
              <div className="mt-4 grid gap-3">
                {[
                  "My Registrations",
                  "Event Calendar",
                  "Help Center",
                  "Support Team",
                ].map((item) => (
                  <button
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-[#00f5ff]/10 bg-[#00f5ff]/3 px-4 py-3 text-left font-rajdhani text-sm text-[#00f5ff]/80 transition hover:border-[#00f5ff]/45 hover:text-[#00f5ff]"
                  >
                    <span>{item}</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
