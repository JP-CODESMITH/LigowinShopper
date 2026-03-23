"use client";
import React, { JSX, useEffect } from "react";
import Image from "next/image";
import hero from "@/public/images/ship.png";
import * as motion from "motion/react-client";
import { useMotionValue } from "motion/react";
import { mont } from '@/app/ui/fonts'

const Hero = (): JSX.Element => {
  const x = useMotionValue(0);

  useEffect(() => {
    // Won't trigger a re-render!
    const timeout = setTimeout(() => x.set(100), 1000);

    return () => clearTimeout(timeout);
  });
  return (
    <section className="h-screen relative w-screen overflow-hidden flex flex-col-reverse lg:flex-row justify-center items-center  gap-1 sad:gap-2 bg-linear-to-r from-[#050505] to-[#0B1A16]">
      {/* <div className="w-90 h-90 rounded-full blur-lg bg-amber-50 absol"  /> */}
      <motion.div
        className="flex h-[40%] md:h-screen lg:px-20 flex-col pt-10 gap-3 sm:justify-center items-center sm:mt-10 md:w-[70%]"
        initial={{ opacity: -5, scale: 0.9 }}
        animate={{ scale: 1, opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
        layout
      >
        <p className=" text-montserat max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white text-justify">
          Your Trusted China-To-Nigeria Shopping & Import Partner
        </p>
        <p className="max-w-2xl text-justify mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-800">
          We import, procure,and deliver quality products from China to Nigeria
          - shoes, bags clothes, power banks, smart gadgets and more. delivered
          to your doorstep.{" "}
        </p>
        <a
          className="shadow z-20 bg-[#D4AF37] hover:bg-blue-700 transition duration-300 ease-in text-[#050505] font-bold py-2 px-4 rounded-full mt-2.5 sm:text-lg text-md "
          href="/shop"
        >
          Start Shipping Now
        </a>
      </motion.div>
      <motion.div
        className="w-ful flex  h-[40%] md:h-screen md:w[40%] overflow  justify-center items-center z-10"
        initial={{ opacity: 0, x: 50 }} // Reduced x distance for mobile
        whileInView={{ opacity: 1, x: 0 }}
        // 'some' ensures it triggers easier on small screens
        viewport={{ once: false, amount: "some" }}
        // Reduced delay so it feels responsive
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        layout
      >
        <Image
          src={hero}
          width={700}
          height={700}
          alt="ship"
          className="object-contain h-[150%] max-md:self-end-last"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
