import type { Metadata } from "next";
import { Exo_2, Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nakshatra 2026 | MSEC Bangalore",
  description:
    "Nakshatra 2026 by MSEC Bangalore is a 3-day intercollegiate IT, cultural, and innovation festival with flagship competitions, workshops, and a 24-hour hackathon.",
  keywords: [
    "Nakshatra 2026",
    "MSEC Bangalore",
    "college fest",
    "hackathon",
    "technology festival",
    "cultural festival",
  ],
  openGraph: {
    title: "Nakshatra 2026 | MSEC Bangalore",
    description:
      "A neon-soaked 3-day intercollegiate IT, cultural, and innovation festival powered by MSEC Bangalore.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nakshatra 2026 | MSEC Bangalore",
    description:
      "A neon-soaked 3-day intercollegiate IT, cultural, and innovation festival powered by MSEC Bangalore.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${rajdhani.variable} ${exo2.variable}`}
    >
      <body className="bg-black font-rajdhani text-[#00f5ff] antialiased">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 z-[-1] min-h-full min-w-full object-cover opacity-50"
        >
          <source src="/cyberpunk-bg.mp4" type="video/mp4" />
        </video>
        <main className="relative z-0">
          {children}
        </main>
      </body>
    </html>
  );
}
