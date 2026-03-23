"use client";
import React, { JSX, use, useRef, useState } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import Link from "next/link";
import { CaretForwardOutline, CartOutline } from "react-ionicons";

const LandingShowCase = (): JSX.Element => {
  const containerRef = useRef(null);
  const [show, setShow] = useState(false);
  const categories = [
    {
      title: "Air Freight",
      description: "Fast delivery from China to Lagos within 5-7 days.",
      imageUrl: "/images/W69531s.webp",
      ids: "1",
      idn: "2",
    },
    {
      title: "Sea Freight",
      description:
        "Cost-effective shipping for large machinery and containers.",
      imageUrl: "/images/imagesb.jpeg",
      ids: "2",
      idn: "3",
    },
    {
      title: "Procurement",
      description: "We help you buy directly from 1688 and Alibaba.",
      imageUrl: "/images/imagesc.jpeg",
      ids: "3",
      idn: "4",
    },
    {
      title: "Air Freight",
      description: "Fast delivery from China to Lagos within 5-7 days.",
      imageUrl: "/images/imagesd.jpeg",
      ids: "4",
      idn: "5",
    },
    {
      title: "Sea Freight",
      description:
        "Cost-effective shipping for large machinery and containers.",
      imageUrl: "/images/images.jpeg",
      ids: "5",
      idn: "6",
    },
    {
      title: "Procurement",
      description: "We help you buy directly from 1688 and Alibaba.",
      imageUrl: "/images/images.png",
      ids: "6",
      idn: "7",
    },
  ];
  const scrollNext = () => {
    if (containerRef.current) {
      const card = containerRef.current.querySelector(".cards");
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 16; // gap-4 in Tailwind = 1rem = 16px
        containerRef.current.scrollBy({
          left: cardWidth + gap,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center headlist bg-[#050505]">
      <div />
      <p className="md:text-4xl text-1xl text-white font-bold text-center ">
        {" "}
        Available products
      </p>
      {/* <Scrollview></Scrollview> */}
      <div
        className="w-full flex gap-4 overflow-x-auto scroll-smooth no-scrollbar mt-5 px-4 h-[80%] items-center justify-start relative"
        ref={containerRef}
      >
        {/* Each card needs 'flex-shrink-0' to keep its width */}
        {categories.map((category, index) => (
          <div
            key={index}
            id={category.ids}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 shrink-0"
          >
            <div className="h-56 w-full">
              <a href="#">
                <img
                  className="mx-auto h-full object-contain rounded-2xl"
                  src={category.imageUrl}
                  alt={category.title}
                />
              </a>
            </div>

            <div className="pt-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  Up to 35% off
                </span>
              </div>

              <a
                href="#"
                className="text-lg font-semibold text-gray-900 hover:underline dark:text-white"
              >
                {category.title}
              </a>

              <div className="mt-2 flex items-center gap-2">
                <div className="flex text-yellow-400">★★★★★</div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  4.9
                </p>
                <p className="text-sm text-gray-500">(4,775)</p>
              </div>

              <ul className="mt-2  gap-4 text-sm text-gray-500">
                <li>{category.description}</li>
                <li>Best Price</li>
              </ul>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-2xl font-extrabold text-gray-900 dark:text-white">
                  $899
                </p>

                <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="bg-white rounded-full p-5 absolute z-120 right-0 flex justify-center items-center"
        onClick={scrollNext}
      >
        <CaretForwardOutline
          color={"#00000"}
          title={"next"}
          height="30px"
          width="30px"
        />
      </button>
      <Link
        href="/shop"
        className="text-xl flex gap-2.5 pt-3 pl-10 pr-10 pb-3 bg-[#D4AF37] hover:bg-blue-700 transition duration-300 ease-in text-[#050505] font-bold py-2 px-4 rounded-full mt-2.5 sm:text-lg text-md"
      >
        <CartOutline
          color={"#00000"}
          beat
          title="shop"
          height="25px"
          width="25px"
        />
        <p className=" text-2xl ">Shop More</p>
      </Link>
    </section>
  );
};

export default LandingShowCase;
