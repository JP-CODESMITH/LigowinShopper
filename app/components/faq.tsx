"use client";
import React, { useState } from "react";
import { Eyebrow } from "./primitives";

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
    <section className="py-16 px-4 lg:px-6 bg-bg-warm-white" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 max-w-2xl">
          <Eyebrow>Quick Answers</Eyebrow>
          <h2 id="faq-heading" className="mt-2 text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-none">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-text-muted mt-3 text-base">
            Everything you need to know about sourcing with Ligowin Shopper.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-outline-variant/20 rounded-xl bg-surface-container-lowest shadow-card overflow-hidden"
              >
                <h3>
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    className="w-full flex justify-between items-center p-5 text-left hover:bg-surface-container-low active:bg-surface-container transition-colors rounded-xl"
                  >
                    <span className="text-sm font-semibold text-on-surface pr-4">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg className="w-4 h-4 text-on-surface" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  hidden={!isOpen}
                  className="overflow-hidden"
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
