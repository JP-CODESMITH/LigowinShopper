"use client";
import React, { JSX, useRef, useState } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import Link from "next/link";
import { CaretForwardOutline, CartOutline } from "react-ionicons";
import { adverts } from "@/public/advert/advert";

const LandingShowCase = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
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
      if (card instanceof HTMLElement) {
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
    <section className="h-screen w-full flex flex-col justify-center items-center headlist bg-ocean-abyss">
      <div />
      <p className="md:text-4xl text-2xl text-white font-bold text-center font-mono">
        {" "}
        Arriving <span className="text-gold-premium">Soon</span>
      </p>
      {/* <Scrollview></Scrollview> */}
      <div
        className="w-full flex gap-4 overflow-x-auto scroll-smooth no-scrollbar mt-5 px-4 h-[80%] items-center justify-start relative"
        ref={containerRef}
      >
        {/* Each card needs 'flex-shrink-0' to keep its width */}
        {adverts.map((adverts, index) => (
          <div
            key={index}
            id={adverts.ids}
            className="rounded-lg border border-gold-border bg-coal-dark p-6 shadow-sm shrink-0"
          >
            <div className="h-56 w-full">
              <a href="#">
                <Image
                  className="mx-auto h-full object-contain rounded-2xl"
                  src={adverts.path}
                  alt={adverts.name}
                  width={300}
                  
                />
              </a>
            </div>

            <div className="pt-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded bg-ocean-primary/20 px-2.5 py-0.5 text-xs font-medium text-gold-light">
                  {adverts.time}
                </span>
              </div>

              <a
                href="#"
                className="text-lg font-semibold text-white hover:underline"
              >
                {adverts.name}
              </a>

              <div className="mt-2 flex items-center gap-2">
                <div className="flex text-gold-premium">★★★★★</div>
                <p className="text-sm font-medium text-white">4.9</p>
                <p className="text-sm text-harbor-charcoal">(4,775)</p>
              </div>

              <ul className="mt-2  gap-4 text-sm text-gray-400">
                <li>{adverts.description}</li>
                <li>Best Price</li>
              </ul>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-2xl font-extrabold text-gold-premium">
                  $899
                </p>

                <a
                  href=""
                  className="rounded-lg bg-ocean-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-ocean-primary/80"
                >
                  Preorder Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/shop"
        className="text-xl flex gap-2.5 pt-3 pl-10 pr-10 pb-3 bg-gold-premium hover:bg-ocean-primary transition duration-300 ease-in text-ocean-abyss font-bold py-2 px-4 rounded-full mt-2.5 sm:text-lg text-md"
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
