"use client";
import React from "react";

import { motion } from "motion/react";
const footers = () => {
  return (
    <motion.div
      className="w-[99%] sm:w-[80%] h-[90%] rounded rounded-t-4xl bg-ocean-deep self-center"
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: "some" }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
    >
      <div className="w-full text-center bg-harbor-charcoal p-6 rounded-base shadow-xs">
        {" "}
        <h5 className="mb-3 text-2xl tracking-tight font-semibold text-gold-premium">
          Buy from us now
        </h5>
        <p className="mb-6 text-base text-text-muted sm:text-lg">
          Shop from ligowinShopper through our Whatsapp platform now
          <br />
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <a
            href="https://wa.me/+2349160582481"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-trust-green hover:bg-teal-accent text-text-bright font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default footers;
