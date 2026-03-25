"use client";
import React, { useContext, createContext, useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/images/ChatGPT Image Jan 9, 2026, 10_54_57 PM.png";
import Carti from "../components/cart";
import { AddOutline, SearchCircleOutline } from "react-ionicons";
import Allm from "../shoppage/all";
import { describe } from "node:test";
import { products } from "../../public/products/products";

const links = [
  { name: "All", href: "#", type: "all" },
  { name: "Male Wears", href: "#", type: "male" },
  { name: "Female Wears", href: "#", type: "female" },
  { name: "Male Bags", href: "#", type: "male-bags" },
  { name: "Female Bags", href: "#", type: "female-bags" },
  { name: "Kitchen utls", href: "#", type: "kitchen" },
  { name: "device", href: "#", type: "devices" },
  { name: "Solar", href: "#", type: "solar" },
  { name: "Vehicle", href: "#", type: "vehicle" },
  { name: "furniture", href: "#", type: "furniture" },
  { name: "Jewelry", href: "#", type: "jewelry" },
  { name: "others", href: "#", type: "others" },
];

const Shop = () => {
  const [currentLink, setCurrentLink] = useState("all");
  const [cartNumber, setCartNumber] = useState(0);
  const [cart, setCart] = useState([]); // State to track cart items

  const Counts = () => {
    setCartNumber(cartNumber + 1);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check we're in the browser
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart);
      setCartNumber(savedCart.length);
    }
  }, []);
  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart); // This triggers the second useEffect
  };

  return (
    <div className="cursor-auto select-none text-text-bright min-h-screen items-center overflow-hidden justify-center bg-ocean-abyss font-sans no-scrollbar">
      <Carti carts={cartNumber} />
      <div className="flex">
        <div className="hidden"></div>
        <div className="hidden w-50 h-screen lg:flex md:fixed left-0 top-0 z-10 bg-linear-to-r from-ocean-deep to-ocean-abyss flex-col">
          <div className="w-full h-25 flex items-center justify-center ">
            <Image
              src={Logo}
              alt={""}
              width={70}
              height={70}
              className="z-10"
            />
          </div>

          <div className="w-full h-full mt-5 flex items-center justify-center flex-col gap-2 scroll-smooth no-scrollbar">
            <h3 className="font-bold font-mono text-gold-premium">Categories</h3>
            {links.map((link) => (
              <button
                className={
                  "w-full rounded-4xl" +
                  (link.type === currentLink ? " border bg-gold-premium" : "")
                }
                key={link.name}
                onClick={() => {
                  setCurrentLink(link.type);
                }}
              >
                <p
                  className={
                    link.type === currentLink ? "text-ocean-abyss" : "text-text-bright"
                  }
                >
                  {link.name}
                </p>
              </button>
            ))}
          </div>
        </div>
        <div className="w-full lg:ml-50">
          <div className="w-full h-25 flex items-center pl-10 ">
            <Image
              src={Logo}
              alt={""}
              width={100}
              height={100}
              className="lg:hidden"
            />
            <h1 className="font-extrabold font-mono sm:text-3xl text-gold-premium">
              LIGOWINSHOPER
            </h1>
          </div>
          <div
            className="lg:hidden
           flex gap-3 overflow-x-auto whitespace-nowrap px-2 scroll-smooth no-scrollbar"
          >
            {" "}
            {links.map((link) => (
              <button
                className={
                  "px-4 py-2 rounded-4xl shrink-0" +
                  (link.type === currentLink ? " border bg-gold-premium" : "")
                }
                key={link.name}
                onClick={() => {
                  setCurrentLink(link.type);
                }}
              >
                <p
                  className={
                    link.type === currentLink ? "text-ocean-abyss" : "text-text-bright"
                  }
                >
                  {link.name}
                </p>
              </button>
            ))}
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-[80%] text-center self-center h-15 m-5 overflow-hidden p-5 flex flex-row rounded-full bg-port-slate gap-2 justify-center items-center">
              <input
                placeholder="search products"
                className="w-full h-13 border-0 bg-transparent text-text-bright placeholder:text-text-muted"
              />
              <button className="w-13 h-13 hover:bg-harbor-charcoal rounded-full flex items-center justify-center">
                <SearchCircleOutline
                  title="Search"
                  color="#F5F5F5"
                  width="30px"
                  height="30px"
                  classname="h-full w-full"
                />
              </button>
            </div>
            <section className="listp w-full h-full pb-50 flex items-center justify-center">
              {currentLink === "all" &&
                products.map((items, index) => (
                  <Allm
                    key={index}
                    image={items.path}
                    price={items.price}
                    name={items.name}
                    description={items.description}
                    Count={() => {
                      addToCart({
                        name: items.name,
                        image: items.path,
                        price: items.price, // Fix: was items.path
                        description: items.description,
                      });
                    }}
                    Minus={() => {
                      setCartNumber(cartNumber - 1);
                    }}
                  />
                ))}

              {currentLink === "male" &&
                products
                  .filter((item) => item.type === "male")
                  .map((items) => (
                    <Allm
                      key={items}
                      image={items.path}
                      price={items.price}
                      description={items.description}
                      Count={() => {
                        setCartNumber(cartNumber + 1);
                      }}
                    />
                  ))}
              {currentLink === "female" &&
                products
                  .filter((item) => item.type === "female")
                  .map((items) => (
                    <Allm
                      key={items}
                      image={items.path}
                      price={items.price}
                      description={items.description}
                      Count={() => {
                        setCartNumber(cartNumber + 1);
                      }}
                    />
                  ))}
              {currentLink === "kitchen" &&
                products
                  .filter((item) => item.type === "kitchen")
                  .map((items) => (
                    <Allm
                      key={items}
                      image={items.path}
                      price={items.price}
                      description={items.description}
                      Count={() => {
                        setCartNumber(cartNumber + 1);
                      }}
                    />
                  ))}
              {currentLink === "devices" &&
                products
                  .filter((item) => item.type === "devices")
                  .map((items) => (
                    <Allm
                      key={items}
                      image={items.path}
                      price={items.price}
                      description={items.description}
                      Count={() => {
                        setCartNumber(cartNumber + 1);
                      }}
                    />
                  ))}
              {currentLink === "vehicle" &&
                products
                  .filter((item) => item.type === "vehicle")
                  .map((items) => (
                    <Allm
                      key={items}
                      image={items.path}
                      price={items.price}
                      description={items.description}
                      Count={() => {
                        setCartNumber(cartNumber + 1);
                      }}
                    />
                  ))}
              {currentLink === "solar" &&
                products
                  .filter((item) => item.type === "solar")
                  .map((items) => (
                    <Allm
                      key={items}
                      image={items.path}
                      price={items.price}
                      description={items.description}
                      Count={() => {
                        setCartNumber(cartNumber + 1);
                      }}
                    />
                  ))}
              {currentLink === "furniture" &&
                products
                  .filter((item) => item.type === "furniture")
                  .map((items) => (
                    <Allm
                      key={items}
                      image={items.path}
                      price={items.price}
                      description={items.description}
                      Count={() => {
                        setCartNumber(cartNumber + 1);
                      }}
                    />
                  ))}
              {currentLink === "male-bags" &&
                products
                  .filter((item) => item.type === "male-bags")
                  .map((items) => (
                    <Allm
                      key={items}
                      image={items.path}
                      price={items.price}
                      description={items.description}
                      Count={() => {
                        setCartNumber(cartNumber + 1);
                      }}
                    />
                  ))}
              {currentLink === "female-bags" &&
                products
                  .filter((item) => item.type === "female-bags")
                  .map((items) => (
                    <Allm
                      key={items}
                      image={items.path}
                      price={items.price}
                      description={items.description}
                      Count={() => {
                        setCartNumber(cartNumber + 1);
                      }}
                    />
                  ))}
              {currentLink === "jewelry" &&
                products
                  .filter((item) => item.type === "jewelry")
                  .map((items) => (
                    <Allm
                      key={items}
                      image={items.path}
                      price={items.price}
                      description={items.description}
                      Count={() => {
                        setCartNumber(cartNumber + 1);
                      }}
                    />
                  ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
