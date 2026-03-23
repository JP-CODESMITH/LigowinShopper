import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      colors: {
        // Foundation / Backgrounds
        'ocean-abyss': '#050505',
        'ocean-deep': '#0B1A16',
        'harbor-charcoal': '#1A1F1D',
        'port-slate': '#0f0f0f',
        'coal-dark': '#111111',
        
        // Gold accent
        'gold-premium': '#D4AF37',
        'gold-light': '#dcae32',
        'gold-muted': '#c9a227',
        'gold-border': 'rgba(212,175,55,0.25)',
        'gold-glow': 'rgba(212,175,55,0.4)',
        
        // Blue accent
        'ocean-primary': '#1D4ED8',
        'ocean-light': '#3B82F6',
        'ocean-dark': '#1E40AF',
        
        // Tertiary
        'trust-green': '#10B981',
        'teal-accent': '#0F766E',
        'alert-red': '#EF4444',
        
        // Text
        'text-bright': '#FFFFFF',
        'text-soft': '#F5F5F5',
        'text-muted': '#9CA3AF',
        'text-dim': '#6B7280',
        'text-gray-dark': '#1F2937',
        
        // Surface
        'surface-white': '#FFFFFF',
        'surface-glass': 'rgba(255,255,255,0.04)',
        'border-light': 'rgba(255,255,255,0.1)',
      }
    },
  },
  plugins: [
    scrollbarHide,
  ],
} satisfies Config;
