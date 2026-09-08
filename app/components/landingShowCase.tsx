"use client";
import React, { JSX, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { adverts } from "@/public/advert/advert";

const LandingShowCase = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full flex flex-col justify-center items-center py-16 px-4 lg:px-6 bg-bg-warm-white" id="categories">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-light-lavender text-secondary text-xs font-bold uppercase tracking-wider mb-2">
              Curated Aisles
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-on-surface tracking-tight">
              Arriving <span className="text-primary-container">Soon</span>
            </h2>
            <p className="text-text-muted text-sm mt-1">
              Worldwide catalog parsed directly from premier manufacturing hubs.
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 font-bold text-secondary hover:text-primary transition-colors group"
          >
            <span>View All Categories</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Product Grid */}
        <div
          className="w-full flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
          ref={containerRef}
        >
          {adverts.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-3 shadow-card hover:shadow-card-hover transition-all flex-shrink-0 w-64 sm:w-72 group"
            >
              <div className="h-48 w-full rounded-xl overflow-hidden bg-bg-warm-white flex items-center justify-center">
                <Image
                  className="object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                  src={item.path}
                  alt={item.name}
                  width={300}
                  height={200}
                />
              </div>

              <div className="pt-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-bg-light-lavender px-2.5 py-0.5 text-[10px] font-bold text-secondary">
                    {item.time}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                  {item.name}
                </h3>

                <div className="mt-1.5 flex items-center gap-1">
                  <div className="flex text-accent-amber text-xs">★★★★★</div>
                  <p className="text-xs font-bold text-on-surface">4.9</p>
                </div>

                <p className="mt-1 text-xs text-text-muted line-clamp-2">
                  {item.description}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-lg font-extrabold text-primary-container">
                    $899
                  </p>
                  <Link
                    href="/shop"
                    className="rounded-full bg-primary-container px-4 py-1.5 text-xs font-bold text-on-primary hover:bg-primary shadow-btn-primary transition-all"
                  >
                    Preorder
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/shop"
          className="text-lg flex gap-2.5 pt-3 justify-center items-center bg-primary-container hover:bg-primary text-on-primary font-bold py-2.5 px-8 rounded-full shadow-btn-primary hover:scale-105 transition-all w-fit mx-auto"
        >
          🛒 Shop More
        </Link>
      </div>
    </section>
  );
};

export default LandingShowCase;
