"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Logo from "../../public/images/ChatGPT Image Jan 9, 2026, 10_54_57 PM.png";
import Carti from "../components/cart";
import { CloseOutline, SearchCircleOutline } from "react-ionicons";
import Allm from "../shoppage/all";
import { products } from "../../public/products/products";

const links = [
  { name: "All", type: "all", icon: "📦" },
  { name: "Male Wears", type: "male", icon: "👔" },
  { name: "Female Wears", type: "female", icon: "👗" },
  { name: "Male Bags", type: "male-bags", icon: "💼" },
  { name: "Female Bags", type: "female-bags", icon: "👜" },
  { name: "Kitchen", type: "kitchen", icon: "🍳" },
  { name: "Devices", type: "devices", icon: "📱" },
  { name: "Solar", type: "solar", icon: "☀️" },
  { name: "Vehicle", type: "vehicle", icon: "🚗" },
  { name: "Furniture", type: "furniture", icon: "🪑" },
  { name: "Jewelry", type: "jewelry", icon: "💍" },
  { name: "Perfume", type: "perfume", icon: "🧴" },
];

const Shop = () => {
  const [sellect, setSellect] = useState();
  const [currentLink, setCurrentLink] = useState("all");
  const [cart, setCart] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);
  const [openCart, setOpenCart] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
    const totalCount = savedCart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    setCartNumber(totalCount);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const totalCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    setCartNumber(totalCount);
  }, [cart]);

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

  const decreaseQuantity = (itemName) => {
    const existing = cart.find((i) => i.name === itemName);
    if (!existing) return;
    const newQuantity = (existing.quantity || 1) - 1;
    if (newQuantity <= 0) {
      setCart(cart.filter((i) => i.name !== itemName));
    } else {
      setCart(cart.map((i) => i.name === itemName ? { ...i, quantity: newQuantity } : i));
    }
  };

  const handleClose = () => setSellect(null);

  useEffect(() => {
    if (sellect) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [sellect]);

  const filteredData = useMemo(() => {
    const query = search.toLowerCase();
    const filteredProducts = currentLink === "all"
      ? products
      : products.filter((item) => item.type === currentLink);
    return filteredProducts.filter((item) => {
      const name = item.name?.toLowerCase() || "";
      const description = item.description?.toLowerCase() || "";
      return name.includes(query) || description.includes(query);
    });
  }, [search, currentLink]);

  const selectedProduct = filteredData.find((p) => p.path === sellect);

  return (
    <div className="min-h-screen bg-bg-warm-white text-on-surface font-sans">
      <div onClick={() => setOpenCart(true)}>
        <Carti carts={cartNumber} />
      </div>

      {/* Hero Search Banner */}
      <section className="w-full relative overflow-hidden bg-gradient-to-b from-bg-light-lavender via-bg-soft-cream to-surface px-4 lg:px-6 pt-20 pb-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-lowest shadow-sm mb-4">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent-amber animate-pulse"></span>
            <span className="text-xs uppercase tracking-wider text-secondary font-bold">Verified International Catalogs • Over 40k Items</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight max-w-3xl">
            Find Something You&apos;ll <span className="text-primary-container">Love</span> ✨
          </h1>
          <p className="text-text-muted max-w-2xl mt-3 mb-6 text-sm">
            Explore thousands of verified global products sourced directly with express international transit.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-2xl relative">
            <div className="flex items-center bg-surface-container-lowest rounded-full p-2 shadow-elevated transition-all focus-within:shadow-card-hover">
              <div className="pl-4 pr-2 flex items-center text-secondary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm text-on-surface placeholder:text-text-muted focus:outline-none py-2"
                placeholder="Search electronics, streetwear, sneakers, watches..."
              />
              <button
                onClick={() => setSearch("")}
                className="text-text-muted hover:text-on-surface p-2 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Trending Keywords */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-text-muted">
              <span className="font-bold text-on-surface">🔥 Popular:</span>
              {["Sneakers", "Smart Watches", "Earbuds", "Bags", "Jackets"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearch(tag)}
                  className="px-3 py-1 rounded-full bg-surface-container hover:bg-secondary-fixed hover:text-secondary transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills Bar */}
      <section className="w-full bg-surface-container-lowest/80 backdrop-blur-md sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 whitespace-nowrap min-w-max">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => setCurrentLink(link.type)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  currentLink === link.type
                    ? "bg-secondary text-on-secondary shadow-sm"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto w-full px-4 lg:px-6 py-8">
        <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-on-surface">Catalog Results</span>
            <span className="text-xs text-text-muted bg-surface-container px-2 py-0.5 rounded-full">{filteredData.length} items</span>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full">
            <span className="text-[10px] text-text-muted uppercase">Sort:</span>
            <select className="bg-transparent text-xs font-bold text-on-surface focus:outline-none cursor-pointer">
              <option>Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredData.map((item, index) => (
            <div key={index}>
              <Allm
                image={item.path}
                price={item.price}
                name={item.name}
                description={item.description}
                id={item.id}
                Count={() => addToCart({ name: item.name, image: item.path, price: item.price })}
                Minus={() => decreaseQuantity(item.name)}
                modal={() => setSellect(item.path)}
              />
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-lg font-bold text-on-surface">No products found</p>
            <p className="text-sm text-text-muted">Try a different search or category</p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      {sellect && (
        <>
          <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" onClick={handleClose} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="relative w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-elevated animate-in fade-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
              <button onClick={handleClose} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors">
                <svg className="w-5 h-5 text-on-surface" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative bg-bg-warm-white flex items-center justify-center min-h-[300px] md:min-h-[500px] p-8 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">
                  <img src={sellect} alt={selectedProduct?.description || "Product"} className="max-h-80 object-contain" />
                </div>
                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div className="space-y-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-on-surface">{selectedProduct?.name}</h1>
                    <div className="flex items-baseline gap-2 border-b border-outline-variant/20 pb-4">
                      <span className="text-2xl font-extrabold text-primary-container">₦{selectedProduct?.price}</span>
                    </div>
                    <div>
                      <h2 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-2">Description</h2>
                      <p className="text-text-muted text-sm leading-relaxed">{selectedProduct?.description}</p>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-xs font-bold text-on-surface uppercase tracking-wider">Why Choose This</h2>
                      <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                        <span className="text-accent-emerald font-bold">✓</span>
                        <span>Premium Quality Materials</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                        <span className="text-accent-emerald font-bold">✓</span>
                        <span>Fast & Secure Shipping</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                        <span className="text-accent-emerald font-bold">✓</span>
                        <span>Buyer Protection Guaranteed</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-6 pt-4 border-t border-outline-variant/20">
                    <button
                      onClick={() => {
                        addToCart({ name: selectedProduct?.name, image: selectedProduct?.path, price: selectedProduct?.price });
                        handleClose();
                      }}
                      className="w-full bg-primary-container text-on-primary py-3 rounded-full font-bold hover:bg-primary shadow-btn-primary transition-all"
                    >
                      Add to Cart
                    </button>
                    <button onClick={handleClose} className="w-full bg-surface-container text-on-surface py-3 rounded-full font-bold hover:bg-surface-container-high transition-colors">
                      Continue Shopping
                    </button>
                  </div>
                  <div className="mt-3 text-center text-xs font-medium text-accent-emerald bg-bg-light-green py-2 px-3 rounded-lg">
                    ✓ In Stock — Ships within 2-3 business days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Cart Drawer */}
      {openCart && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
          <div className="w-[90%] sm:w-[400px] bg-surface-container-lowest h-full shadow-elevated flex flex-col">
            <div className="flex justify-between items-center p-5 border-b border-outline-variant/20">
              <h2 className="text-lg font-bold text-on-surface">Your Cart</h2>
              <button onClick={() => setOpenCart(false)} className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-4xl mb-3">🛒</p>
                  <p className="text-text-muted">Cart is empty</p>
                </div>
              ) : (
                cart.map((item, i) => (
                  <div key={i} className="flex gap-3 bg-surface-container p-3 rounded-xl">
                    <img src={item.image} className="w-16 h-16 rounded-lg object-cover" alt="" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-on-surface">{item.name}</p>
                      <p className="text-xs text-text-muted">₦{item.price.toLocaleString()}</p>
                      <p className="text-[10px] text-secondary font-bold">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-5 border-t border-outline-variant/20">
              <p className="font-bold text-on-surface mb-3">
                Total: ₦{cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0).toLocaleString()}
              </p>
              <button
                onClick={() => {
                  const message = cart
                    .map((item, i) => `${i + 1}. ${item.name}\nQty: ${item.quantity}\n₦${item.price}`)
                    .join("\n\n");
                  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
                  const text = `🛒 *Ligowin Order*\n\n${message}\n\nTotal: ₦${total}`;
                  window.open(`https://wa.me/2349160582481?text=${encodeURIComponent(text)}`);
                }}
                className="w-full bg-accent-emerald text-on-primary py-3 rounded-full font-bold hover:bg-accent-emerald/90 shadow-btn-primary transition-all flex items-center justify-center gap-2"
              >
                💬 Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
