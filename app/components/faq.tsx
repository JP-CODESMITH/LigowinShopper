"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "What is Ligowin Shopper?",
    answer:
      "Ligowin Shopper is a China-to-Nigeria import platform that helps you buy, ship, and receive products directly from China with ease.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery typically takes 7–21 days depending on the shipping method and product type. Air freight takes 5–7 days, while sea freight takes 25–32 days.",
  },
  {
    question: "Is payment secure?",
    answer:
      "Yes, all transactions are protected with secure and encrypted payment systems. We accept credit/debit cards, bank transfers, and mobile payments.",
  },
  {
    question: "Can I order any product from China?",
    answer:
      "Yes, you can request almost any product, and we'll help source and deliver it for you. Send us a photo or link and we'll provide a quote within 24 hours.",
  },
  {
    question: "Do you offer doorstep delivery?",
    answer:
      "Absolutely, we deliver directly to your location anywhere in Nigeria with real-time tracking on every shipment.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 lg:px-6 bg-bg-warm-white">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest shadow-sm mb-3">
            <span className="text-secondary text-sm">?</span>
            <span className="text-xs text-secondary uppercase tracking-wider font-bold">Quick Answers</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface tracking-tight">
            Frequently Asked <span className="text-primary-container">Questions</span>
          </h2>
          <p className="text-text-muted mt-2 text-sm">
            Everything you need to know about Ligowin Shopper
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-3">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-outline-variant/20 rounded-xl bg-surface-container-lowest shadow-card overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <p className="text-sm font-semibold text-on-surface pr-4">
                    {item.question}
                  </p>
                  <span
                    className={`w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg className="w-4 h-4 text-on-surface" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-text-muted text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
