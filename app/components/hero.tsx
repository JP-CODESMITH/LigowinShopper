"use client";
import React, { JSX } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const Hero = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-bg-soft-cream via-bg-light-lavender/40 to-bg-warm-white py-16 lg:py-24 px-4 lg:px-6">
      {/* Ambient Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-container/15 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-accent-emerald/10 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: Typography & Actions */}
        <motion.div
          className="lg:col-span-6 flex flex-col items-start gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Live Alert Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-lowest shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-emerald animate-ping"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">Direct Global Sourcing Active</span>
            <span className="px-2 py-0.5 rounded-full bg-bg-soft-cream text-primary-container text-xs font-bold">Fresh Drop</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight leading-none">
            Shop More.<br />
            <span className="bg-gradient-to-r from-primary-container via-accent-pink to-secondary bg-clip-text text-transparent">Discover More.</span><br />
            Enjoy More.
          </h1>

          <p className="text-lg text-on-surface-variant max-w-xl">
            Discover vetted international collections, uncover trending factory-direct goods, and experience lightning-fast cross-border logistics crafted for confident shoppers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <Link
              href="/shop"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary px-8 py-3.5 rounded-full font-bold text-lg shadow-btn-primary hover:scale-105 hover:bg-primary transition-all"
            >
              <span>Shop Now</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="#categories"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-bg-light-lavender text-secondary px-6 py-3.5 rounded-full font-bold text-lg hover:bg-surface-container-high transition-colors"
            >
              <span>Explore Categories</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-3 w-full">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest shadow-sm text-xs font-semibold text-on-surface">
              <span className="text-accent-amber font-bold">⚡</span>
              <span>Express Sourcing</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest shadow-sm text-xs font-semibold text-on-surface">
              <span className="text-accent-emerald font-bold">✓</span>
              <span>Buyer Protection Guaranteed</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest shadow-sm text-xs font-semibold text-on-surface">
              <span className="text-secondary font-bold">🌍</span>
              <span>40+ Countries Delivered</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Floating Product Collage */}
        <motion.div
          className="lg:col-span-6 relative w-full h-[420px] sm:h-[500px] flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Floating Backdrop Rings */}
          <div className="absolute inset-4 rounded-[40px] bg-gradient-to-tr from-secondary/15 via-primary-container/10 to-accent-amber/20 rotate-2"></div>
          <div className="absolute inset-8 rounded-[36px] bg-surface-container-lowest/80 backdrop-blur-md -rotate-1"></div>

          {/* Live Purchase Banner */}
          <div className="absolute top-4 left-2 sm:left-6 z-30 bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-emerald"></span>
            <span className="text-xs text-on-surface font-semibold">Someone in Lagos bought <strong className="text-primary-container font-bold">Sneakers</strong> 2m ago</span>
          </div>

          {/* Product Card 1 */}
          <div className="absolute top-10 right-4 sm:right-8 w-52 sm:w-60 bg-surface-container-lowest rounded-2xl p-3 shadow-card z-20 hover:-translate-y-1 transition-transform">
            <div className="relative w-full h-32 rounded-xl overflow-hidden bg-bg-light-lavender flex items-center justify-center">
              <div className="text-4xl">🎧</div>
              <span className="absolute top-2 left-2 bg-secondary text-on-secondary px-2 py-0.5 rounded-full text-[10px] font-bold">TRENDING</span>
            </div>
            <div className="pt-2 flex justify-between items-start">
              <div>
                <p className="text-sm font-bold text-on-surface">AeroSound Max Pro</p>
                <div className="flex items-center gap-1 text-accent-amber text-xs font-bold">
                  <span>★</span>
                  <span>4.9 (1.4k)</span>
                </div>
              </div>
              <span className="text-base font-bold text-primary-container">$89</span>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="absolute bottom-28 left-2 sm:left-6 w-56 sm:w-64 bg-surface-container-lowest rounded-2xl p-3 shadow-card z-20 hover:-translate-y-1 transition-transform">
            <div className="relative w-full h-36 rounded-xl overflow-hidden bg-bg-soft-cream flex items-center justify-center">
              <div className="text-5xl">👟</div>
              <span className="absolute top-2 right-2 bg-accent-emerald text-on-primary px-2 py-0.5 rounded-full text-[10px] font-bold">GLOBAL DROP</span>
            </div>
            <div className="pt-2 flex justify-between items-end">
              <div>
                <span className="text-[10px] text-text-muted uppercase tracking-wider">Direct Milan</span>
                <p className="text-sm font-bold text-on-surface">Strata Low Velocity</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-text-muted line-through block">$160</span>
                <span className="text-base font-bold text-on-surface">$120</span>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="absolute bottom-4 right-6 sm:right-12 w-44 sm:w-52 bg-surface-container-lowest rounded-2xl p-2 shadow-card z-30 hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-3 p-1">
              <div className="w-12 h-12 rounded-xl bg-bg-light-blue flex items-center justify-center text-2xl">⌚</div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold text-primary-container">FLASH DEAL</span>
                <p className="text-xs font-bold text-on-surface truncate">Apex Pulse 4</p>
                <p className="text-sm font-bold text-on-surface">$65</p>
              </div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="absolute top-28 left-1/2 -translate-x-1/2 w-44 bg-surface-container-lowest/95 backdrop-blur-sm rounded-2xl p-2 shadow-elevated z-10 hidden sm:block">
            <div className="w-full h-20 rounded-lg bg-bg-light-lavender flex items-center justify-center text-3xl">👜</div>
            <div className="pt-1 flex items-center justify-between px-1">
              <span className="text-xs font-semibold text-secondary">Aura Mini</span>
              <span className="text-xs font-bold text-on-surface">$140</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
