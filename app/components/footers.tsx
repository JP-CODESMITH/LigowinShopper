"use client";
import React from "react";
import { motion } from "motion/react";

const Footers = () => {
  return (
    <div className="w-full bg-inverse-surface text-inverse-on-surface pt-12 pb-8 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <motion.div
          className="w-full rounded-2xl bg-secondary p-8 lg:p-12 mb-12 shadow-elevated relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: "some" }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary-container/20 blur-2xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h5 className="text-2xl font-bold text-on-secondary tracking-tight">
                Buy from us now
              </h5>
              <p className="text-sm text-surface-container-high mt-1">
                Shop from Ligowin Shopper through our WhatsApp platform
              </p>
            </div>
            <a
              href="https://wa.me/+2349160582481"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-emerald hover:bg-accent-emerald/90 text-on-primary font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-btn-primary flex items-center gap-2 whitespace-nowrap"
            >
              💬 Contact Us on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-surface-container-highest/20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-extrabold tracking-tight text-on-primary">LIGOWIN<span className="text-primary-container">SHOPPER</span></span>
            </div>
            <p className="text-sm text-surface-dim max-w-sm">
              Bridging global markets directly to your doorstep. Verified international sourcing, seamless checkout, and lightning-fast fulfillment.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-on-primary text-sm mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="/" className="text-sm text-surface-dim hover:text-on-primary transition-colors">Home</a>
              <a href="/shop" className="text-sm text-surface-dim hover:text-on-primary transition-colors">Shop</a>
              <a href="/about" className="text-sm text-surface-dim hover:text-on-primary transition-colors">About</a>
              <a href="/Contact" className="text-sm text-surface-dim hover:text-on-primary transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-on-primary text-sm mb-3">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-surface-dim">
              <p>WhatsApp: +234 916 058 2481</p>
              <p>Email: globalimport1234@gmail.com</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs text-surface-dim">
          © {new Date().getFullYear()} Ligowin Shopper. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footers;
