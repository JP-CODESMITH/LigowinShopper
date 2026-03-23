// app/ui/fonts.ts
import {
  Inter,
  Montserrat,
  Playfair_Display,
  JetBrains_Mono,
} from "next/font/google";

// Body Font — Clean, readable UI text
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Display Font — Bold headlines & brand statements
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

// Accent Font — Premium serif for emotional moments
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Monospace — Prices, codes, technical labels
export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
