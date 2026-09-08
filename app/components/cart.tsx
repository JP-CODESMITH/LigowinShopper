"use client";
import React from "react";

type CartProps = {
  carts: number;
};

const Carti = ({ carts }: CartProps) => {
  return (
    <button className="fixed right-6 bottom-6 z-20 rounded-full bg-primary-container text-on-primary px-4 py-2.5 flex items-center gap-2 shadow-btn-primary hover:scale-105 transition-all font-bold text-sm">
      🛒 {carts} {carts === 1 ? "Item" : "Items"}
    </button>
  );
};

export default Carti;
