import React, { JSX } from "react";
import { Eyebrow, IconChat, IconShield, IconBag, IconTag, IconStar, IconTruck } from "./primitives";

const items = [
  {
    title: "Fast, Tracked Delivery",
    desc: "Consolidated air cargo with GPS handoff to your doorstep anywhere in Nigeria.",
    icon: <IconTruck size={24} />,
    featured: true,
  },
  {
    title: "Secure Payments",
    desc: "Encrypted checkout with buyer protection on every order.",
    icon: <IconShield size={24} />,
    featured: false,
  },
  {
    title: "Wide Selection",
    desc: "Thousands of verified products across fashion, tech, and home.",
    icon: <IconBag size={24} />,
    featured: false,
  },
  {
    title: "Best Prices",
    desc: "Factory-direct pricing with consolidated freight savings.",
    icon: <IconTag size={24} />,
    featured: false,
  },
  {
    title: "Trusted Quality",
    desc: "On-ground inspection in Guangzhou and Yiwu before export.",
    icon: <IconStar size={24} />,
    featured: false,
  },
  {
    title: "24/7 Human Support",
    desc: "Real people on WhatsApp and live desk, average reply under 3 minutes.",
    icon: <IconChat size={24} />,
    featured: false,
  },
];

export default function Reasons(): JSX.Element {
  return (
    <section className="py-16 px-4 lg:px-6 bg-surface" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="max-w-2xl">
          <Eyebrow>Why Us</Eyebrow>
          <h2 id="why-heading" className="mt-2 text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-none">
            Why Choose <span className="text-primary">Ligowin Shopper</span>
          </h2>
          <p className="text-text-muted mt-3 text-base">
            The trusted bridge between China and Nigeria — fast, secure and reliable.
          </p>
        </div>

        {/* Bento Grid — one hero tile leads */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <article
              key={i}
              className={`p-6 rounded-2xl border border-outline-variant/20 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col ${
                item.featured
                  ? "bg-secondary text-on-secondary md:col-span-2 lg:col-span-1 lg:row-span-1"
                  : "bg-surface-container-lowest"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                item.featured ? "bg-on-secondary/15 text-on-secondary" : "bg-bg-light-lavender text-secondary"
              }`} aria-hidden="true">
                {item.icon}
              </div>
              <h3 className={`mb-2 text-lg font-bold ${item.featured ? "text-on-secondary" : "text-on-surface"}`}>
                {item.title}
              </h3>
              <p className={`text-sm leading-relaxed ${item.featured ? "text-on-secondary/85" : "text-text-muted"}`}>
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
