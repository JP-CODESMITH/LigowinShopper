"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  CartOutline,
  InformationCircleOutline,
  PhonePortraitOutline,
  ReorderThreeOutline,
} from "react-ionicons";
import { CloseOutline } from "react-ionicons";
import { HomeOutline } from "react-ionicons";
import bg from "../../public/images/background.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client";
import Logo from "../../public/images/ChatGPT Image Jan 9, 2026, 10_54_57 PM.png";

const navLinks = [
  { href: "/", label: "Home", icon: HomeOutline },
  { href: "/shop", label: "Shop", icon: CartOutline },
  { href: "/about", label: "About", icon: InformationCircleOutline },
  { href: "/Contact", label: "Contact", icon: PhonePortraitOutline },
];

const Menus = () => {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === "/";
  return (
    <div className="select-none">
      {!menu ? (
        <>
          <nav className="round absolute rounded-full flex flex-row mt-1.5 right-1.5 p-1 md:hidden z-50 fixed">
            <button
              onClick={() => {
                setMenu(true);
                console.log("menu opened");
              }}
            >
              <ReorderThreeOutline
                color={"#ffffff"}
                title={"this is menu"}
                height="50px"
                width="50px"
                shake
              />
            </button>
          </nav>
        </>
      ) : (
          <motion.nav
          className={ menu ? "w-[80%] p-9.5 fixed top-0 right-0 bg-harbor-charcoal h-screen z-30 border-l border-gold-border" : " transition-all ease-linear transform = 'translateX(180px) duration-500 delay-75'" }
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: "some" }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          layout
        >
          <button
            onClick={() => {
              setMenu(false);
            }}
            className=" self-start"
          >
            {}
            <CloseOutline
              color={"#D4AF37"}
              title={"cancel menu"}
              height="40px"
              width="40px"
            />
          </button>
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenu(false)}
                className={`text-3xl border font-semibold grid grid-cols-[2fr_1fr] h-12  rounded-full w-full gap-4 pl-10 grid-rows-1 items-center justify-center my-5 transition-transform transform ease-in-out ${
                  pathname === link.href
                    ? "text-ocean-abyss bg-gold-premium rounded-full"
                    : "text-text-bright"
                }`}
              >
                <p className="text-2xl">{link.label}</p>
                <IconComponent
                  color={pathname === link.href ? "#050505" : "#D4AF37"}
                  height="30px"
                  width="30px"
                  className="font-extrabold"
                />
                {"  "}
              </Link>
            );
          })}
          <div className="w-full flex justify-center items-center flex-col gap-0">
            <Image src={Logo} alt="hello" className="w-100" />
            <h5 className="font-extrabold text-3xl text-gold-premium">
              LigowinShopper
            </h5>
          </div>
        </motion.nav>
      )}
      <div className="hidden md:flex justify-end">
        <nav className="fixed gap-5 right-5 z-50 mt-6 flex w-[500px] px-8 py-2.5 rounded-full bg-harbor-charcoal shadow-md overflow-hidden border border-gold-border">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <div
                className="flex rounded-full items-center sm:hover:bg-gold-premium hover:rounded-full gap-1 transition duration-300"
                key={link.href}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenu(false)}
                  className={` sm:hover:bg-gold-premium hover:rounded-full  text-1xl font-semibold flex gap-1 justify-center items-center pl-3 pr-3 transition duration-300 ${
                    pathname === link.href
                      ? "text-ocean-abyss w-full bg-gold-premium rounded-full"
                      : "text-text-bright"
                  }`}
                >
                  <IconComponent
                    color={pathname === link.href ? "#050505" : "#D4AF37"}
                    height="20px"
                    width="20px"
                    className="font-extrabold"
                  />
                  {link.label}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Menus;
