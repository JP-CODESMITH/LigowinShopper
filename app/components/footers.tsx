"use client";
import React from "react";

import { motion } from "motion/react";
const footers = () => {
  return (
    <motion.div
      className="w-[99%] sm:w-[80%] h-[90%] focus:outline-none bg-[#0B1A16] rounded-tl-4xl rounded-tr-4xl self-center"
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      // 'some' ensures it triggers easier on small screens
      viewport={{ once: false, amount: "some" }}
      // Reduced delay so it feels responsive
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
    >
      <div className="w-full text-center bg-neutral-primary-soft p-6 rounded-base shadow-xs">
        {" "}
        <h5 className="mb-3 text-2xl tracking-tight font-semibold text-heading">
          Buy from us now
        </h5>
        <p className="mb-6 text-base text-body sm:text-lg">
          Shop from ligowinShopper through our Whatsapp platform now
          <br />
          
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
         <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Contact Us on WhatsApp
        </a>
        </div>
      </div>
    </motion.div>
  );
};

export default footers;
