"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Logo from "../../public/images/ChatGPT Image Jan 9, 2026, 10_54_57 PM.png";
import Carti from "../components/cart";
import { CloseOutline, LogoIonic, SearchCircleOutline } from "react-ionicons";
import Allm from "../shoppage/all";
import { products } from "../../public/products/products";
import { Items } from "../components/items";

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
  { name: "perfume", type: "perfume" },
];

const Shop = () => {
  const [sellect, setSellect] = useState();
  const [currentLink, setCurrentLink] = useState("all");
  const [cart, setCart] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);
  const [openCart, setOpenCart] = useState(false);
  const [ID, setID] = useState();
  const [search, setSearch] = useState("");

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
  const decreaseQuantity = (itemName) => {
    const existing = cart.find((i) => i.name === itemName);
    if (!existing) return;

    const newQuantity = (existing.quantity || 1) - 1;

    // FIXES: Remove when qty reaches 0
    if (newQuantity <= 0) {
      setCart(cart.filter((i) => i.name !== itemName));
    } else {
      setCart(
        cart.map((i) =>
          i.name === itemName ? { ...i, quantity: newQuantity } : i,
        ),
      );
    }
  };

  // Filter products

  const handleClose = () => {
    setSellect(null);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (sellect) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sellect]);

  const filteredData = useMemo(() => {
    const query = search.toLowerCase();
    
    // Step 1: filter by category
    const filteredProducts =
    currentLink === "all"
    ? products
    : products.filter((item) => item.type === currentLink);
    
    // Step 2: filter by search
    return filteredProducts.filter((item) => {
      const name = item.name?.toLowerCase() || "";
      const description = item.description?.toLowerCase() || "";
      
      return name.includes(query) || description.includes(query);
    });
  }, [search, currentLink, products]);
  const selectedProduct = filteredData.find((p) => p.path === sellect);
  
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
            value={search}
              placeholder="Search products"
              className="flex-1 bg-transparent outline-none"
              onChange={(e)=>setSearch(e.target.value)}
            />
            <SearchCircleOutline color="#F5F5F5" width="25px" />
          </div>

          {/* Products */}

          <div className="listp">
            {filteredData.map((item, index) => (
              <div key={index}>
                <Allm
                  image={item.path}
                  price={item.price}
                  name={item.name}
                  description={item.description}
                  id={item.id}
                  Count={() =>
                    addToCart({
                      name: item.name,
                      image: item.path,
                      price: item.price,
                    })
                  }
                  Minus={() => decreaseQuantity(item.name)}
                  modal={() => setSellect(item.path)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {sellect && (
        <>
          {/* Backdrop - Smooth animation and clickable */}
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal Container - Better responsive design */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Positioned better, larger on mobile */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 bg-white hover:bg-gray-100 rounded-full p-2 sm:p-3 transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                aria-label="Close modal"
              >
                <CloseOutline
                  width="28px"
                  height="28px"
                  className="sm:w-8 sm:h-8"
                />
              </button>

              {/* Main Grid - Two column on desktop, one on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* LEFT SIDE - Product Image */}
                <div className="relative bg-gray-50 flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[600px] p-4 sm:p-8 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">
                  <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px]">
                    <img
                      src={sellect}
                      alt={selectedProduct?.description || "Product image"}
                      fill
                      className="object-contain p-2 sm:p-4"
                    />
                  </div>
                </div>

                {/* RIGHT SIDE - Product Details */}
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl overflow-y-auto max-h-[50vh] md:max-h-[600px]">
                  {/* Product Information */}
                  <div className="space-y-6">
                    {/* Product Name */}
                    <div>
                      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        {selectedProduct?.name}
                      </h1>
                    </div>

                    {/* Price - Large and prominent */}
                    <div className="flex items-baseline gap-2 border-b pb-4">
                      <span className="text-3xl sm:text-4xl font-bold text-black">
                        #{selectedProduct?.price}
                      </span>
                      <span className="text-sm text-gray-500">NGN</span>
                    </div>

                    {/* Description */}
                    <div>
                      <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                        Description
                      </h2>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {selectedProduct?.description}
                      </p>
                    </div>

                    {/* Trust Badges / Features */}
                    <div className="space-y-3">
                      <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Why Choose This
                      </h2>
                      <div className="space-y-2">
                        <div className="flex items-start gap-3 text-sm text-gray-700">
                          <span className="text-lg text-green-600 font-bold mt-0.5">
                            ✓
                          </span>
                          <span>Premium Quality Materials</span>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-gray-700">
                          <span className="text-lg text-green-600 font-bold mt-0.5">
                            ✓
                          </span>
                          <span>Fast & Free Shipping</span>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-gray-700">
                          <span className="text-lg text-green-600 font-bold mt-0.5">
                            ✓
                          </span>
                          <span>30-Day Money Back Guarantee</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons - Sticky at bottom */}
                  <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-gray-200">
                    <button
                      onClick={() => {
                        addToCart({
                          name: selectedProduct?.name,
                          image: selectedProduct?.path,
                          price: selectedProduct?.price,
                        });
                        handleClose();
                      }}
                      className="w-full bg-black text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 hover:bg-gray-900 active:scale-95 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 shadow-md hover:shadow-lg"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={handleClose}
                      className="w-full bg-gray-100 text-gray-900 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 hover:bg-gray-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                    >
                      Continue Shopping
                    </button>
                  </div>

                  {/* Stock Status Badge */}
                  <div className="mt-4 text-center text-xs sm:text-sm font-medium text-green-700 bg-green-50 py-2 px-3 rounded-lg">
                    ✓ In Stock - Ships within 2-3 business days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

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
