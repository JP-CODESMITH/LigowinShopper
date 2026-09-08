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
        // Warm Backgrounds
        'bg-warm-white': '#FFFDF9',
        'bg-soft-cream': '#FFF4E8',
        'bg-light-lavender': '#F3F0FF',
        'bg-light-blue': '#EFF6FF',
        'bg-light-green': '#ECFDF5',

        // Surface
        'surface': '#f9f9ff',
        'surface-dim': '#d3daef',
        'surface-bright': '#f9f9ff',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f1f3ff',
        'surface-container': '#e9edff',
        'surface-container-high': '#e1e8fd',
        'surface-container-highest': '#dce2f7',
        'surface-variant': '#dce2f7',

        // Primary - Orange
        'primary': '#ab3500',
        'on-primary': '#ffffff',
        'primary-container': '#ff6b35',
        'on-primary-container': '#5f1900',
        'inverse-primary': '#ffb59d',
        'primary-fixed': '#ffdbd0',
        'primary-fixed-dim': '#ffb59d',

        // Secondary - Purple
        'secondary': '#5c40d2',
        'on-secondary': '#ffffff',
        'secondary-container': '#755ced',
        'on-secondary-container': '#fffbff',
        'secondary-fixed': '#e6deff',
        'on-secondary-fixed': '#1b0063',
        'on-secondary-fixed-variant': '#4624bc',

        // Tertiary - Blue
        'tertiary': '#005ac2',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#6198ff',
        'on-tertiary-container': '#002f6c',

        // Accents
        'accent-emerald': '#10B981',
        'accent-amber': '#FBBF24',
        'accent-pink': '#EC4899',

        // Text
        'on-surface': '#141b2b',
        'on-surface-variant': '#594139',
        'inverse-surface': '#293040',
        'inverse-on-surface': '#edf0ff',
        'text-muted': '#6B7280',

        // Outline
        'outline': '#8d7168',
        'outline-variant': '#e1bfb5',

        // Error
        'error': '#ba1a1a',
        'on-error': '#ffffff',

        // Legacy aliases for backward compat
        'ocean-abyss': '#141b2b',
        'ocean-deep': '#e9edff',
        'harbor-charcoal': '#f1f3ff',
        'port-slate': '#e9edff',
        'coal-dark': '#293040',

        'gold-premium': '#ff6b35',
        'gold-light': '#ffb59d',
        'gold-muted': '#ab3500',
        'gold-border': '#e1bfb5',
        'gold-glow': 'rgba(255,107,53,0.4)',

        'ocean-primary': '#5c40d2',
        'ocean-light': '#005ac2',
        'ocean-dark': '#755ced',

        'trust-green': '#10B981',
        'teal-accent': '#005ac2',
        'alert-red': '#EF4444',

        'text-bright': '#141b2b',
        'text-soft': '#594139',
        'text-dim': '#6B7280',
        'text-gray-dark': '#1F2937',

        'surface-white': '#ffffff',
        'surface-glass': 'rgba(255,255,255,0.88)',
        'border-light': '#e1bfb5',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(91,63,209,0.06), 0 2px 6px -1px rgba(17,24,39,0.04)',
        'card-hover': '0 16px 36px -6px rgba(255,107,53,0.12), 0 6px 12px -2px rgba(17,24,39,0.05)',
        'btn-primary': '0 8px 24px -4px rgba(255,107,53,0.35)',
        'btn-secondary': '0 8px 24px -4px rgba(91,63,209,0.2)',
        'elevated': '0 16px 36px -6px rgba(91,63,209,0.15), 0 6px 12px -2px rgba(17,24,39,0.05)',
      },
    },
  },
  plugins: [
    scrollbarHide,
  ],
} satisfies Config;
