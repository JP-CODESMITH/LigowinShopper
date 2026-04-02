import React, { JSX } from "react";

export default function Reasons(): JSX.Element {
  return (
    <section className="bg-ocean-abyss py-16 px-6">
      
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-bright">
          Why Choose <span className="text-gold-premium">Ligowin Shopper</span>
        </h2>
        <p className="text-text-muted mt-3 max-w-2xl mx-auto">
          Your trusted bridge between China and Nigeria — fast, secure and reliable.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {/* CARD TEMPLATE */}
        {[
          {
            title: "Fast Delivery",
            desc: "Get your orders delivered quickly and safely right to your doorstep.",
            icon: (
              <path d="M3 3h11v8h2l1 2v2h-2a2 2 0 11-4 0H9a2 2 0 11-4 0H3V3z"/>
            ),
          },
          {
            title: "Secure Payments",
            desc: "Shop with confidence using our safe and encrypted payment systems.",
            icon: (
              <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v2H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zM8 8V6a2 2 0 114 0v2H8z" clipRule="evenodd"/>
            ),
          },
          {
            title: "Wide Selection",
            desc: "Discover a wide range of products across multiple categories.",
            icon: (
              <path d="M16 6V4a4 4 0 10-8 0v2H5a1 1 0 000 2h1l1 9h6l1-9h1a1 1 0 100-2h-3z"/>
            ),
          },
          {
            title: "Best Prices",
            desc: "Enjoy unbeatable prices and amazing discounts on every purchase.",
            icon: (
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-1H8a1 1 0 110-2h3a1 1 0 100-2H9a3 3 0 010-6h1V2h2v1h1a1 1 0 110 2h-3a1 1 0 100 2h2a3 3 0 010 6h-1v1z"/>
            ),
          },
          {
            title: "Trusted Quality",
            desc: "We offer only high-quality and verified products you can trust.",
            icon: (
              <path d="M9.049 2.927C9.3 2.17 10.7 2.17 10.951 2.927l1.286 3.95a1 1 0 00.95.69h4.15c.78 0 1.1 1 .47 1.45l-3.36 2.44a1 1 0 00-.36 1.12l1.29 3.95c.25.76-.61 1.39-1.25.93L10 14.35l-3.08 2.23c-.64.46-1.5-.17-1.25-.93l1.29-3.95a1 1 0 00-.36-1.12L3.24 9.02c-.63-.45-.31-1.45.47-1.45h4.15a1 1 0 00.95-.69l1.29-3.95z"/>
            ),
          },
          {
            title: "24/7 Support",
            desc: "Our team is always available to help you anytime you need support.",
            icon: (
              <path d="M18 10a8 8 0 10-16 0v3a2 2 0 002 2h2v-6H4a6 6 0 1112 0h-2v6h2a2 2 0 002-2v-3z"/>
            ),
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-harbor-charcoal border border-gold-border hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition duration-300"
          >
            <div className="flex flex-col items-center text-center">
              
              {/* Icon */}
              <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-gold-premium">
                <svg
                  className="w-6 h-6 text-ocean-abyss"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {item.icon}
                </svg>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-xl font-bold text-gold-premium tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}