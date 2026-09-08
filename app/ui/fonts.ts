import {
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";

// Display / Body Font — Plus Jakarta Sans
export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

// Label / UI Font — Space Grotesk
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});
