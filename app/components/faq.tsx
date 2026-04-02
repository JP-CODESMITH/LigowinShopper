"use client";
import React, { useState } from "react";
import { ChevronDownOutline } from "react-ionicons";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What is Ligowin Shopper?",
    answer:
      "Ligowin Shopper is a China-to-Nigeria import platform that helps you buy, ship, and receive products directly from China with ease.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery typically takes 7–21 days depending on the shipping method and product type.",
  },
  {
    question: "Is payment secure?",
    answer:
      "Yes, all transactions are protected with secure and encrypted payment systems.",
  },
  {
    question: "Can I order any product from China?",
    answer:
      "Yes, you can request almost any product, and we’ll help source and deliver it for you.",
  },
  {
    question: "Do you offer doorstep delivery?",
    answer:
      "Absolutely, we deliver directly to your location anywhere in Nigeria.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-ocean-abyss py-16 px-6">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-bright">
          Frequently Asked <span className="text-gold-premium">Questions</span>
        </h2>
        <p className="text-text-muted mt-3">
          Everything you need to know about Ligowin Shopper
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {faqData.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className="border border-border-light rounded-xl bg-harbor-charcoal p-4"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center"
              >
                <p className="text-sm font-semibold text-gold-premium text-left">
                  {item.question}
                </p>

                <ChevronDownOutline
                  color="#D4AF37"
                  height="24px"
                  width="24px"
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-text-soft mt-3 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}