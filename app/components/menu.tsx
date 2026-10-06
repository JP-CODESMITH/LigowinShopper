"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { IconMenu, IconX, IconChat } from "./primitives";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Menus = () => {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menu) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "unset";
    };
  }, [menu]);

  return (
    <div>
      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMenu(true)}
          aria-label="Open navigation menu"
          aria-expanded={menu}
          aria-haspopup="dialog"
          className="w-12 h-12 rounded-full bg-surface-container-lowest shadow-card flex items-center justify-center text-on-surface hover:bg-surface-container active:bg-surface-container-high transition-colors"
        >
          <IconMenu size={24} />
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menu && (
          <>
            <motion.div
              className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenu(false)}
              aria-hidden="true"
            />
            <motion.nav
              aria-label="Mobile navigation"
              role="dialog"
              aria-modal="true"
              className="fixed top-0 right-0 w-[80%] max-w-sm h-screen bg-surface-container-lowest z-50 p-8 shadow-elevated flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-extrabold text-on-surface tracking-tight">LIGOWIN<span className="text-primary">SHOPPER</span></span>
                </div>
                <button
                  ref={closeRef}
                  onClick={() => setMenu(false)}
                  aria-label="Close navigation menu"
                  className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high active:bg-surface-container-highest transition-colors"
                >
                  <IconX size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenu(false)}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`px-5 py-3 rounded-xl font-semibold text-lg transition-colors ${
                      pathname === link.href
                        ? "bg-primary text-on-primary"
                        : "text-on-surface hover:bg-surface-container active:bg-surface-container-high"
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
                  className="w-full flex items-center justify-center gap-2 bg-accent-emerald text-on-primary py-3 rounded-full font-bold shadow-btn-primary hover:brightness-95 active:brightness-90 transition-all"
                >
                  <IconChat size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-end">
        <nav aria-label="Primary navigation" className="fixed top-6 right-6 z-50 flex items-center gap-1 px-2 py-2 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-card border border-outline-variant/20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                pathname === link.href
                  ? "bg-primary text-on-primary shadow-btn-primary"
                  : "text-on-surface hover:bg-surface-container active:bg-surface-container-high"
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
