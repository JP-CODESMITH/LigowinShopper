"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import Carti from "../components/cart";
import Allm from "../shoppage/all";
import { Eyebrow, IconBox, IconSparkle, IconStar, IconFactory, IconBag, IconTag, IconTruck, IconZap, IconGlobe, IconSearch, IconX, IconChat, IconTrash, IconCheck, Listbox } from "../components/primitives";

interface ProductImage {
  id: string;
  url: string;
  publicId: string | null;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  stockQty: number;
  active: boolean;
  categoryId: string | null;
  category: Category | null;
  images: ProductImage[];
  createdAt: string;
  updatedAt: string | null;
}

const links = [
  { name: "All", type: "all", Icon: IconBox },
  { name: "Beauty", type: "beauty", Icon: IconSparkle },
  { name: "Fragrances", type: "fragrances", Icon: IconStar },
  { name: "Furniture", type: "furniture", Icon: IconFactory },
  { name: "Groceries", type: "groceries", Icon: IconBag },
  { name: "Laptops", type: "laptops", Icon: IconZap },
  { name: "Shirts", type: "mens-shirts", Icon: IconTag },
  { name: "Shoes", type: "mens-shoes", Icon: IconTruck },
  { name: "Watches", type: "mens-watches", Icon: IconGlobe },
];

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "low-high", label: "Price: Low to High" },
  { value: "high-low", label: "Price: High to Low" },
];

const Shop = () => {
  const [sellect, setSellect] = useState<string | null>(null);
  const [currentLink, setCurrentLink] = useState("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("popular");

  interface CartItem {
    name: string;
    image: string;
    price: number;
    quantity: number;
  }
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartNumber, setCartNumber] = useState(0);
  const [openCart, setOpenCart] = useState(false);
  const [search, setSearch] = useState("");
  const modalCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(Array.isArray(savedCart) ? savedCart : []);
      const totalCount = (Array.isArray(savedCart) ? savedCart : []).reduce((acc: number, item: CartItem) => acc + (item.quantity || 1), 0);
      setCartNumber(totalCount);
    } catch { setCart([]); }
  }, []);

  useEffect(() => {
    try { localStorage.setItem("cart", JSON.stringify(cart)); } catch {}
    const totalCount = cart.reduce((acc: number, item: CartItem) => acc + (item.quantity || 1), 0);
    setCartNumber(totalCount);
  }, [cart]);

  useEffect(() => {
    if (!sellect && !openCart) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setSellect(null); setOpenCart(false); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [sellect, openCart]);

  useEffect(() => {
    if (sellect) {
      document.body.style.overflow = "hidden";
      modalCloseRef.current?.focus();
    } else if (!openCart) {
      document.body.style.overflow = "unset";
    }
    return () => { if (!openCart) document.body.style.overflow = "unset"; };
  }, [sellect, openCart]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const base = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const response = await fetch(`${base}/products`);
      const data = await response.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (item: { name: string; image: string; price: number }) => {
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

  const decreaseQuantity = (itemName: string) => {
    const existing = cart.find((i) => i.name === itemName);
    if (!existing) return;
    const newQuantity = (existing.quantity || 1) - 1;
    if (newQuantity <= 0) {
      setCart(cart.filter((i) => i.name !== itemName));
    } else {
      setCart(cart.map((i) => i.name === itemName ? { ...i, quantity: newQuantity } : i));
    }
  };

  const removeFromCart = (itemName: string) => {
    setCart(cart.filter((i) => i.name !== itemName));
  };

  const handleClose = () => setSellect(null);

  const filteredData = useMemo(() => {
    const query = search.toLowerCase();
    const byCategory = currentLink === "all"
      ? products
      : products.filter((item) => item.category?.slug === currentLink);
    const byQuery = byCategory.filter((item) => {
      const name = item.name?.toLowerCase() || "";
      const description = item.description?.toLowerCase() || "";
      return name.includes(query) || description.includes(query);
    });
    const sorted = [...byQuery];
    if (sort === "low-high") sorted.sort((a, b) => a.price - b.price);
    if (sort === "high-low") sorted.sort((a, b) => b.price - a.price);
    return sorted;
  }, [search, currentLink, products, sort]);

  const selectedProduct = filteredData.find((p) => p.images[0]?.url === sellect);

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-warm-white text-on-surface font-sans flex items-center justify-center" role="status" aria-live="polite">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-surface-container border-t-primary-container mx-auto mb-4" aria-hidden="true"></div>
          <p className="text-text-muted">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-warm-white text-on-surface font-sans">
      <div onClick={() => setOpenCart(true)}>
        <Carti carts={cartNumber} />
      </div>

      {/* Hero Search Banner — left-aligned */}
      <section className="w-full relative overflow-hidden bg-gradient-to-b from-bg-light-lavender via-bg-soft-cream to-surface px-4 lg:px-6 pt-20 pb-12" aria-labelledby="shop-heading">
        <div className="max-w-4xl mx-auto flex flex-col items-start text-left relative z-10">
          <Eyebrow>Verified International Catalogs</Eyebrow>
          <h1 id="shop-heading" className="mt-2 text-5xl sm:text-6xl font-extrabold tracking-tight leading-none max-w-3xl">
            Find Something You&apos;ll <span className="text-primary">Love</span>
          </h1>
          <p className="text-text-muted max-w-2xl mt-3 mb-6 text-base">
            Thousands of verified global products, sourced directly with tracked international delivery.
          </p>

          <div className="w-full max-w-2xl relative">
            <div className="flex items-center bg-surface-container-lowest rounded-full p-2 shadow-elevated transition-all focus-within:shadow-card-hover border border-outline-variant/20">
              <div className="pl-4 pr-2 flex items-center text-secondary" aria-hidden="true">
                <IconSearch size={24} />
              </div>
              <label htmlFor="shop-search" className="sr-only">Search products</label>
              <input
                id="shop-search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm text-on-surface placeholder:text-text-muted focus:outline-none py-2"
                placeholder="Search electronics, streetwear, sneakers, watches..."
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="text-text-muted hover:text-on-surface hover:bg-surface-container rounded-full p-2 transition-colors"
                >
                  <IconX size={16} />
                </button>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-text-muted">
              <span className="font-bold text-on-surface">Popular:</span>
              {["Perfume", "Watch", "Shoes", "Jewelry"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearch(tag)}
                  aria-pressed={search === tag}
                  className="px-3 py-1 rounded-full bg-surface-container hover:bg-secondary-fixed active:bg-surface-container-high transition-colors text-on-surface font-semibold"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills Bar */}
      <section className="w-full bg-surface-container-lowest/80 backdrop-blur-md sticky top-0 z-30 shadow-sm border-b border-outline-variant/20" aria-label="Categories">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 whitespace-nowrap min-w-max" role="group" aria-label="Filter by category">
            {links.map((link) => {
              const active = currentLink === link.type;
              const LinkIcon = link.Icon;
              return (
                <button
                  key={link.name}
                  onClick={() => setCurrentLink(link.type)}
                  aria-pressed={active}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 min-h-10 ${
                    active
                      ? "bg-secondary text-on-secondary shadow-sm"
                      : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high active:bg-surface-container-highest"
                  }`}
                >
                  <LinkIcon size={16} />
                  <span>{link.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto w-full px-4 lg:px-6 py-8">
        <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/20 flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-on-surface">Catalog Results</span>
            <span className="text-xs text-text-muted bg-surface-container px-2 py-0.5 rounded-full" aria-live="polite">{filteredData.length} items</span>
          </div>
          <div className="flex items-center bg-surface-container-low px-3 py-1.5 rounded-full">
            <Listbox label="Sort" options={sortOptions} value={sort} onChange={setSort} id="shop-sort" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredData.map((item) => (
            <div key={item.id}>
              <Allm
                image={item.images[0]?.url || ""}
                price={item.price}
                name={item.name}
                description={item.description || ""}
                id={item.id}
                Count={() => addToCart({ name: item.name, image: item.images[0]?.url || "", price: item.price })}
                Minus={() => decreaseQuantity(item.name)}
                modal={() => setSellect(item.images[0]?.url || null)}
              />
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-20">
            <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-text-muted">
              <IconSearch size={24} />
            </div>
            <p className="text-lg font-bold text-on-surface">No products found</p>
            <p className="text-sm text-text-muted">Try a different search or category</p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      {sellect && (
        <div role="dialog" aria-modal="true" aria-label={selectedProduct?.name ?? "Product details"}>
          <div className="fixed inset-0 z-40 bg-inverse-surface/40 backdrop-blur-sm" onClick={handleClose} aria-hidden="true" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="relative w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-elevated border border-outline-variant/20" onClick={(e) => e.stopPropagation()}>
              <button ref={modalCloseRef} onClick={handleClose} aria-label="Close product details" className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high active:bg-surface-container-highest transition-colors">
                <IconX size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative bg-bg-warm-white flex items-center justify-center min-h-[300px] md:min-h-[500px] p-8 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">
                  {sellect ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={sellect} alt={selectedProduct?.name ?? "Product"} className="max-h-80 object-contain" />
                  ) : null}
                </div>
                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-on-surface leading-tight">{selectedProduct?.name}</h2>
                    <div className="flex items-baseline gap-2 border-b border-outline-variant/20 pb-4">
                      <span className="text-2xl font-extrabold text-primary">₦{selectedProduct?.price.toLocaleString()}</span>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-2">Description</h3>
                      <p className="text-text-muted text-sm leading-relaxed">{selectedProduct?.description}</p>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                        <IconCheck size={16} className="text-accent-emerald" />
                        <span>Premium Quality Materials</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                        <IconCheck size={16} className="text-accent-emerald" />
                        <span>Fast & Secure Shipping</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                        <IconCheck size={16} className="text-accent-emerald" />
                        <span>Buyer Protection Guaranteed</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3 mt-6 pt-4 border-t border-outline-variant/20">
                    <button
                      onClick={() => {
                        if (selectedProduct) {
                          addToCart({ name: selectedProduct.name, image: selectedProduct.images[0]?.url || "", price: selectedProduct.price });
                          handleClose();
                        }
                      }}
                      className="w-full bg-primary text-on-primary py-3 rounded-full font-bold hover:brightness-95 active:brightness-90 shadow-btn-primary transition-all"
                    >
                      Add to Cart
                    </button>
                    <button onClick={handleClose} className="w-full bg-transparent border border-outline-variant text-on-surface py-3 rounded-full font-bold hover:bg-surface-container active:bg-surface-container-high transition-colors">
                      Continue Shopping
                    </button>
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs font-medium text-accent-emerald bg-bg-light-green py-2 px-3 rounded-lg">
                    <IconCheck size={14} />
                    In Stock — Ships within 2-3 business days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {openCart && (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Shopping cart">
          <div className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm" onClick={() => setOpenCart(false)} aria-hidden="true" />
          <div className="relative w-[90%] sm:w-[400px] bg-surface-container-lowest h-full shadow-elevated flex flex-col border-l border-outline-variant/20">
            <div className="flex justify-between items-center p-5 border-b border-outline-variant/20">
              <h2 className="text-lg font-bold text-on-surface">Your Cart</h2>
              <button onClick={() => setOpenCart(false)} aria-label="Close cart" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high active:bg-surface-container-highest transition-colors">
                <IconX size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-text-muted">
                    <IconBox size={24} />
                  </div>
                  <p className="text-text-muted">Cart is empty</p>
                </div>
              ) : (
                cart.map((item, i) => (
                  <div key={i} className="flex gap-3 bg-surface-container p-3 rounded-xl border border-outline-variant/20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} className="w-16 h-16 rounded-lg object-cover bg-bg-warm-white" alt={item.name} />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-on-surface">{item.name}</p>
                      <p className="text-xs text-text-muted">₦{item.price.toLocaleString()}</p>
                      <p className="text-[10px] text-secondary font-bold">Qty: {item.quantity}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="text-text-muted hover:text-error hover:bg-error/10 rounded-full p-1.5 transition-colors shrink-0 self-start"
                      title="Remove item"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <IconTrash size={16} />
                    </button>
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
                  const text = `Ligowin Order\n\n${message}\n\nTotal: ₦${total}`;
                  window.open(`https://wa.me/2349160582481?text=${encodeURIComponent(text)}`);
                }}
                disabled={cart.length === 0}
                className="w-full bg-accent-emerald text-on-primary py-3 rounded-full font-bold hover:brightness-95 active:brightness-90 shadow-btn-primary transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
              >
                <IconChat size={18} />
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
