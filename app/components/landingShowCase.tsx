"use client";
import React, { JSX, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { adverts } from "@/public/advert/advert";
import { Eyebrow, IconArrowRight, IconCart, IconStar } from "./primitives";

const LandingShowCase = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: 1 | -1) {
    containerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  }

  return (
    <section className="w-full flex flex-col justify-center items-start py-16 px-4 lg:px-6 bg-bg-warm-white" id="categories" aria-labelledby="categories-heading">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-8">
        {/* Section Header — left aligned, one thing leads */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Eyebrow>Curated Aisles</Eyebrow>
            <h2 id="categories-heading" className="mt-2 text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-none">
              Arriving <span className="text-primary">Soon</span>
            </h2>
            <p className="text-text-muted text-base mt-2">
              A focused edit from premier manufacturing hubs — verified before it ships.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 mr-2" role="group" aria-label="Scroll categories">
              <button onClick={() => scrollBy(-1)} aria-label="Scroll categories left" className="w-10 h-10 rounded-full border border-outline-variant text-on-surface flex items-center justify-center hover:bg-surface-container active:bg-surface-container-high transition-colors">
                <span aria-hidden="true">←</span>
              </button>
              <button onClick={() => scrollBy(1)} aria-label="Scroll categories right" className="w-10 h-10 rounded-full border border-outline-variant text-on-surface flex items-center justify-center hover:bg-surface-container active:bg-surface-container-high transition-colors">
                <span aria-hidden="true">→</span>
              </button>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 font-bold text-secondary hover:text-primary transition-colors group rounded-md px-1 py-0.5"
            >
              <span>View All Categories</span>
              <IconArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Product Rail */}
        <div
          className="w-full flex gap-4 overflow-x-auto scroll-smooth no-scrollbar pb-1"
          ref={containerRef}
          role="region"
          aria-label="Upcoming products"
          tabIndex={0}
        >
          {adverts.map((item, index) => (
            <article
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

                <div className="mt-1.5 flex items-center gap-1" aria-label="Rated 4.9 out of 5">
                  <div className="flex text-primary text-xs" aria-hidden="true">
                    <IconStar size={12} /><IconStar size={12} /><IconStar size={12} /><IconStar size={12} /><IconStar size={12} />
                  </div>
                  <p className="text-xs font-bold text-on-surface">4.9</p>
                </div>

                <p className="mt-1 text-xs text-text-muted line-clamp-2">
                  {item.description}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-lg font-extrabold text-primary">
                    ₦899,000
                  </p>
                  <Link
                    href="/shop"
                    className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-on-primary hover:brightness-95 active:brightness-90 shadow-btn-primary transition-all"
                  >
                    Preorder
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Link
          href="/shop"
          className="text-lg flex gap-2.5 pt-3 justify-center items-center bg-primary hover:brightness-95 active:brightness-90 text-on-primary font-bold py-2.5 px-8 rounded-full shadow-btn-primary hover:-translate-y-0.5 transition-all w-fit"
        >
          <IconCart size={20} />
          Shop More
        </Link>
      </div>
    </section>
  );
};

export default LandingShowCase;
