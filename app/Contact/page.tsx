import React from "react";
import * as motion from "motion/react-client"

const Contacts = () => {
  return (
    <div className="cursor-auto select-none text-white min-h-screen items-center overflow-hidden justify-center bg-ocean-abyss font-sans no-scrollbar">
      {" "}
      <section className="flex justify-center items-center p-9 w-screen h-screen flex-col gap-5 bg-linear-to-b from-ocean-abyss to-ocean-deep">
        <motion.h1 className="text-3xl font-serif font-extrabold text-gold-premium"
          initial={{ opacity: -5, y: -5 }}
          whileInView={{ y: 1, opacity: 1 }}
          viewport={{ once: false, amount: "some" }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
          layout>
          Contact LigowinShopper
        </motion.h1>
        <motion.p className="text-lg text-justify text-gray-300 md:w-[80%]"
          initial={{ opacity: -5, y: 5 }}
          whileInView={{ y: 1, opacity: 1 }}
          viewport={{ once: false, amount: "some" }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          layout>
          Have questions about importing goods from China? Our team is ready to
          assist you. Contact us for personalized support and guidance on your
          import journey. We&apos;re here to help you navigate the process and ensure
          your products are delivered safely to their doorstep.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-5">
          <motion.a
            href="https://wa.me/+2349160582481"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-trust-green hover:bg-teal-accent text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            initial={{ opacity: 0.5, scale: 0.7 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: "some" }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
            layout
          >
            Contact Us on WhatsApp
          </motion.a>
          <motion.a
            href="tel:+2347082639358"
            className="bg-gold-premium hover:bg-ocean-primary text-white text-center font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            initial={{ opacity: 0.5, scale: 0.7 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: "some" }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
            layout
          >
            Contact Us on Call
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
