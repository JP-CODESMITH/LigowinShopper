"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { IconChat } from "./primitives";

const Footers = () => {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface pt-12 pb-8 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section — one action */}
        <motion.div
          className="w-full rounded-2xl bg-secondary p-8 lg:p-12 mb-12 shadow-elevated relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div aria-hidden="true" className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary-container/20 blur-2xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold text-on-secondary tracking-tight leading-none">
                Buy from us now
              </h2>
              <p className="text-sm text-surface-container-high mt-2">
                Shop from Ligowin Shopper through our WhatsApp platform — replies in under 3 minutes.
              </p>
            </div>
            <a
              href="https://wa.me/+2349160582481"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-emerald hover:brightness-95 active:brightness-90 text-on-primary font-bold py-3 px-6 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-btn-primary flex items-center gap-2 whitespace-nowrap"
            >
              <IconChat size={18} />
              Contact Us on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-surface-container-highest/20" aria-label="Footer">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-extrabold tracking-tight text-on-primary">LIGOWIN<span className="text-primary-container">SHOPPER</span></span>
            </div>
            <p className="text-sm text-surface-dim max-w-sm leading-relaxed">
              Bridging global markets directly to your doorstep. Verified international sourcing, clear pricing, and tracked fulfillment.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-on-primary text-sm mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-surface-dim hover:text-on-primary transition-colors w-fit rounded-sm">Home</Link>
              <Link href="/shop" className="text-sm text-surface-dim hover:text-on-primary transition-colors w-fit rounded-sm">Shop</Link>
              <Link href="/about" className="text-sm text-surface-dim hover:text-on-primary transition-colors w-fit rounded-sm">About</Link>
              <Link href="/contact" className="text-sm text-surface-dim hover:text-on-primary transition-colors w-fit rounded-sm">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-on-primary text-sm mb-3">Contact</h3>
            <address className="flex flex-col gap-2 text-sm text-surface-dim not-italic">
              <p>WhatsApp: +234 916 058 2481</p>
              <p>Email: globalimport1234@gmail.com</p>
              <p>Lagos, Nigeria</p>
            </address>
          </div>
        </nav>

        <div className="pt-6 text-center text-xs text-surface-dim">
          © {new Date().getFullYear()} Ligowin Shopper. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footers;
