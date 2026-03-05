import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        tajawal: ["Tajawal", "sans-serif"],
        amiri: ["Amiri", "serif"],
        quran: ["Amiri Quran", "serif"],
      },
      fontSize: {
        xxs: "0.625rem",
        xxxs: "0.5rem",
      },
      backgroundImage: {
        "hero-grad": "var(--hero-grad)",
        "prog-fill": "var(--prog-fill)",
        "verse-div": "var(--verse-div)",
        "play-grad": "var(--play-grad)",
        "hadith-bg": "var(--hadith-bg)",
        "art-overlay": "var(--art-overlay)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        teal: {
          deep: "hsl(var(--teal-deep))",
          emerald: "hsl(var(--teal-emerald))",
        },
        mint: {
          fresh: "hsl(var(--mint-fresh))",
        },
        mist: {
          light: "hsl(var(--mist-light))",
        },
        pine: {
          charcoal: "hsl(var(--pine-charcoal))",
        },
        surface: "var(--surface)",
        surface2: "var(--surface2)",
        surface3: "var(--surface3)",
        text: "var(--text)",
        text2: "var(--text2)",
        bdr: "var(--bdr)",
        "bdr-p": "var(--bdr-p)",
        primary2: "var(--primary2)",
        "hero-text": "var(--hero-text)",
        "hero-sub": "var(--hero-sub)",
        "cd-bg": "var(--cd-bg)",
        "cd-bdr": "var(--cd-bdr)",
        "cd-digit": "var(--cd-digit)",
        "pi-active-bg": "var(--pi-active-bg)",
        "pi-active-bdr": "var(--pi-active-bdr)",
        "pi-active-nm": "var(--pi-active-nm)",
        "pi-active-tm": "var(--pi-active-tm)",
        "pi-dot": "var(--pi-dot)",
        "bism-ar": "var(--bism-ar)",
        "tag-bg": "var(--tag-bg)",
        "tag-bdr": "var(--tag-bdr)",
        "tag-text": "var(--tag-text)",
        "verse-ar": "var(--verse-ar)",
        "play-glow": "var(--play-glow)",
        "play-icon": "var(--play-icon)",
        "play-nm": "var(--play-nm)",
        "hadith-bdr": "var(--hadith-bdr)",
        "hadith-q": "var(--hadith-q)",
        "hadith-tm": "var(--hadith-tm)",
        "art-bdr": "var(--art-bdr)",
        "art-cat-bg": "var(--art-cat-bg)",
        "nav-bg": "var(--nav-bg)",
        "nav-bdr": "var(--nav-bdr)",
        "nav-act": "var(--nav-act)",
        "nav-muted": "var(--nav-muted)",
        "qa-icon-bg": "var(--qa-icon-bg)",
        "qa-icon-cl": "var(--qa-icon-cl)",
        "icn-bg": "var(--icn-bg)",
        "icn-bdr": "var(--icn-bdr)",
        "icn-cl": "var(--icn-cl)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "play-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 var(--play-glow)" },
          "50%": { boxShadow: "0 0 0 12px transparent" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-gentle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "pulse-gentle": "pulse-gentle 3s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease both",
        "play-pulse": "playPulse 2.5s ease infinite",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
