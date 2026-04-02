"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/images/ChatGPT Image Jan 9, 2026, 10_54_57 PM.png";
import Carti from "../components/cart";
import { SearchCircleOutline } from "react-ionicons";
import Allm from "../shoppage/all";
import { products } from "../../public/products/products";

const links = [
  { name: "All", type: "all" },
  { name: "Male Wears", type: "male" },
  { name: "Female Wears", type: "female" },
  { name: "Male Bags", type: "male-bags" },
  { name: "Female Bags", type: "female-bags" },
  { name: "Kitchen", type: "kitchen" },
  { name: "Devices", type: "devices" },
  { name: "Solar", type: "solar" },
  { name: "Vehicle", type: "vehicle" },
  { name: "Furniture", type: "furniture" },
  { name: "Jewelry", type: "jewelry" },
];

const Shop = () => {
  const [sellect, setSellect] = useState(false);
  const [currentLink, setCurrentLink] = useState("all");
  const [cart, setCart] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);
  const [openCart, setOpenCart] = useState(false);

  // Load cart
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);

    const totalCount = savedCart.reduce(
      (acc, item) => acc + (item.quantity || 1),
      0,
    );
    setCartNumber(totalCount);
  }, []);

  // Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    const totalCount = cart.reduce(
      (acc, item) => acc + (item.quantity || 1),
      0,
    );
    setCartNumber(totalCount);
  }, [cart]);

  // Add to cart
  const addToCart = (item) => {
    const existing = cart.find((i) => i.name === item.name);

    let updatedCart;

    if (existing) {
      updatedCart = cart.map((i) =>
        i.name === item.name ? { ...i, quantity: (i.quantity || 1) + 1 } : i,
      );
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }];
    }

    setCart(updatedCart);
  };

  // Filter products
  const filteredProducts =
    currentLink === "all"
      ? products
      : products.filter((item) => item.type === currentLink);

  return (
    <div className="min-h-screen bg-ocean-abyss text-text-bright font-sans">
      {/* Cart Icon */}
      <div onClick={() => setOpenCart(true)}>
        <Carti carts={cartNumber} />
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:flex flex-col w-52 h-screen fixed bg-ocean-deep">
          <div className="h-24 flex items-center justify-center">
            <Image src={Logo} alt="" width={70} />
          </div>

          <div className="flex flex-col gap-2 px-3">
            <h3 className="text-gold-premium font-bold text-center">
              Categories
            </h3>

            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => setCurrentLink(link.type)}
                className={`rounded-full py-1 text-sm ${
                  currentLink === link.type
                    ? "bg-gold-premium text-ocean-abyss"
                    : "text-text-bright"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="w-full lg:ml-52">
          {/* Header */}
          <div className="flex items-center gap-3 p-4">
            <Image src={Logo} alt="" width={80} className="lg:hidden" />
            <h1 className="text-2xl font-bold text-gold-premium">
              LIGOWINSHOPPER
            </h1>
          </div>

          {/* Mobile Categories */}
          <div className="lg:hidden flex gap-2 overflow-x-auto px-2">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => setCurrentLink(link.type)}
                className={`px-4 py-2 rounded-full shrink-0 ${
                  currentLink === link.type
                    ? "bg-gold-premium text-ocean-abyss"
                    : "text-text-bright"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="w-[90%] mx-auto my-5 flex bg-port-slate rounded-full px-4 py-2">
            <input
              placeholder="Search products"
              className="flex-1 bg-transparent outline-none"
            />
            <SearchCircleOutline color="#F5F5F5" width="25px" />
          </div>

          {/* Products */}

          <div className="listp">
            {filteredProducts.map((item, index) => (
              <div key={index} onClick={() => setSellect(true)}>
                <Allm
                  image={item.path}
                  price={item.price}
                  name={item.name}
                  description={item.description}
                  Count={() =>
                    addToCart({
                      name: item.name,
                      image: item.path,
                      price: item.price,
                    })
                  }
                />
               
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CART DRAWER */}
      {openCart && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50">
          <div className="w-[90%] sm:w-[400px] bg-ocean-deep p-5 flex flex-col">
            <div className="flex justify-between mb-4">
              <h2 className="text-gold-premium font-bold">Your Cart</h2>
              <button onClick={() => setOpenCart(false)}>✕</button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 ? (
                <p className="text-center text-text-muted">Cart is empty</p>
              ) : (
                cart.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-harbor-charcoal p-3 rounded-xl"
                  >
                    <img src={item.image} className="w-16 h-16 rounded-md" />
                    <div>
                      <p>{item.name}</p>
                      <p className="text-sm text-text-muted">
                        ₦{item.price.toLocaleString()}
                      </p>
                      <p className="text-xs">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Total */}
            <div className="mt-4">
              <p className="font-bold">
                Total: ₦
                {cart
                  .reduce(
                    (acc, item) => acc + item.price * (item.quantity || 1),
                    0,
                  )
                  .toLocaleString()}
              </p>

              <button
                onClick={() => {
                  const message = cart
                    .map(
                      (item, i) =>
                        `${i + 1}. ${item.name}\nQty: ${item.quantity}\n₦${item.price}`,
                    )
                    .join("\n\n");

                  const total = cart.reduce(
                    (acc, item) => acc + item.price * (item.quantity || 1),
                    0,
                  );

                  const text = `🛒 *Ligowin Order*\n\n${message}\n\nTotal: ₦${total}`;

                  window.open(
                    `https://wa.me/2349160582481?text=${encodeURIComponent(
                      text,
                    )}`,
                  );
                }}
                className="w-full mt-3 bg-gold-premium text-ocean-abyss py-3 rounded-full"
              >
                Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
