
import type { Metadata } from "next";
import { plusJakarta, spaceGrotesk } from "@/app/ui/fonts";
import "./globals.css";
import Menus from "./components/menu";

export const metadata: Metadata = {
  title: "Ligowin Shopper — Global Sourcing & Discovery",
  description: "Your trusted China-to-Nigeria shopping & import partner. Shop more, discover more, enjoy more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}>
      <body
        className="antialiased bg-bg-warm-white text-on-surface font-sans"
        suppressHydrationWarning={true}
      >
        <Menus />
        <main>{children}</main>
      </body>
    </html>
  );
}
