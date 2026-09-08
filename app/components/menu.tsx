"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/Contact", label: "Contact" },
];

const Menus = () => {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  return (
    <div className="select-none">
      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMenu(true)}
          className="w-12 h-12 rounded-full bg-surface-container-lowest shadow-card flex items-center justify-center"
        >
          <svg className="w-6 h-6 text-on-surface" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menu && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenu(false)}
            />
            <motion.nav
              className="fixed top-0 right-0 w-[80%] max-w-sm h-screen bg-surface-container-lowest z-50 p-8 shadow-elevated flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-extrabold text-on-surface tracking-tight">LIGOWIN<span className="text-primary-container">SHOPPER</span></span>
                </div>
                <button onClick={() => setMenu(false)} className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                  <svg className="w-5 h-5 text-on-surface" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenu(false)}
                    className={`px-5 py-3 rounded-xl font-semibold text-lg transition-colors ${
                      pathname === link.href
                        ? "bg-primary-container text-on-primary"
                        : "text-on-surface hover:bg-surface-container"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto">
                <a
                  href="https://wa.me/+2349160582481"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-accent-emerald text-on-primary py-3 rounded-full font-bold shadow-btn-primary hover:scale-105 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chat on WhatsApp
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-end">
        <nav className="fixed top-6 right-6 z-50 flex items-center gap-1 px-2 py-2 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-card border border-outline-variant/20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                pathname === link.href
                  ? "bg-primary-container text-on-primary shadow-btn-primary"
                  : "text-on-surface hover:bg-surface-container"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Menus;
