import React, { JSX } from "react";

export default function Reasons(): JSX.Element {
  return (
    <section className="py-16 px-4 lg:px-6 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-light-lavender text-secondary text-xs font-bold uppercase tracking-wider mb-3">
            Why Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight">
            Why Choose <span className="text-primary-container">Ligowin Shopper</span>
          </h2>
          <p className="text-text-muted mt-2 max-w-2xl mx-auto">
            Your trusted bridge between China and Nigeria — fast, secure and reliable.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Fast Delivery",
              desc: "Get your orders delivered quickly and safely right to your doorstep.",
              icon: "🚚",
              color: "bg-bg-light-green",
              textColor: "text-accent-emerald",
            },
            {
              title: "Secure Payments",
              desc: "Shop with confidence using our safe and encrypted payment systems.",
              icon: "🔒",
              color: "bg-bg-light-lavender",
              textColor: "text-secondary",
            },
            {
              title: "Wide Selection",
              desc: "Discover a wide range of products across multiple categories.",
              icon: "🛍️",
              color: "bg-bg-soft-cream",
              textColor: "text-primary-container",
            },
            {
              title: "Best Prices",
              desc: "Enjoy unbeatable prices and amazing discounts on every purchase.",
              icon: "💰",
              color: "bg-bg-light-blue",
              textColor: "text-tertiary",
            },
            {
              title: "Trusted Quality",
              desc: "We offer only high-quality and verified products you can trust.",
              icon: "⭐",
              color: "bg-bg-soft-cream",
              textColor: "text-primary-container",
            },
            {
              title: "24/7 Support",
              desc: "Our team is always available to help you anytime you need support.",
              icon: "💬",
              color: "bg-bg-light-green",
              textColor: "text-accent-emerald",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-surface-container-lowest shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className={`w-12 h-12 rounded-xl ${item.color} ${item.textColor} flex items-center justify-center mb-4 text-2xl`}>
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-on-surface">
                {item.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
