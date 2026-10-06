"use client";
import React from "react";
import { IconCart } from "./primitives";

type CartProps = {
  carts: number;
};

const Carti = ({ carts }: CartProps) => {
  return (
    <button
      aria-label={`Open cart, ${carts} ${carts === 1 ? "item" : "items"}`}
      className="fixed right-6 bottom-6 z-20 rounded-full bg-primary text-on-primary px-4 py-2.5 flex items-center gap-2 shadow-btn-primary hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0 active:brightness-90 transition-all font-bold text-sm"
    >
      <IconCart size={18} />
      <span aria-live="polite">{carts} {carts === 1 ? "Item" : "Items"}</span>
    </button>
  );
};

export default Carti;
