/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "space-black": "#030712",
        "city-dark": "#030312",
        "deep-navy": "#0a0f1e",
        "cosmic-purple": "#1a0a2e",
        "neon-cyan": "#00f5ff",
        "neon-pink": "#ff2d78",
        "neon-violet": "#b44fff",
        "neon-blue": "#0040ff",
        "electric-violet": "#7c3aed",
        "nebula-pink": "#ec4899",
        "star-gold": "#fbbf24",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "monospace"],
        rajdhani: ["var(--font-rajdhani)", "sans-serif"],
        exo: ["var(--font-exo)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 25s linear infinite",
        "spin-slow-rev": "spin-rev 30s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        "border-pulse": "border-pulse 2s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px rgba(0,245,255,0.3), 0 0 40px rgba(0,245,255,0.1)" },
          to: { boxShadow: "0 0 40px rgba(0,245,255,0.7), 0 0 80px rgba(0,245,255,0.3), 0 0 120px rgba(124,58,237,0.2)" },
        },
        "spin-rev": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "border-pulse": {
          "0%, 100%": { borderColor: "rgba(0,245,255,0.3)" },
          "50%": { borderColor: "rgba(0,245,255,0.8)" },
        },
        fadeInUp: {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "cosmic-gradient": "linear-gradient(135deg, #030712 0%, #0a0f1e 30%, #1a0a2e 60%, #030712 100%)",
        "neon-gradient": "linear-gradient(90deg, #00f5ff, #7c3aed, #ec4899)",
        "card-glass": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "hero-radial": "radial-gradient(ellipse at center, #1a0a2e 0%, #0a0f1e 40%, #030712 100%)",
      },
      dropShadow: {
        glow: ["0 0 20px rgba(0,245,255,0.5)", "0 0 60px rgba(0,245,255,0.25)"],
        "glow-violet": ["0 0 20px rgba(124,58,237,0.5)", "0 0 60px rgba(124,58,237,0.25)"],
        "glow-pink": ["0 0 20px rgba(236,72,153,0.5)", "0 0 60px rgba(236,72,153,0.25)"],
      },
    },
  },
  plugins: [],
};
