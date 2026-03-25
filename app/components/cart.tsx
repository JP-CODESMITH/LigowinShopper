"use client";
import react, { useState } from "react";

import { CartOutline } from "react-ionicons";
type CartProps = {
  carts: number;
};

const Carti = ({ carts }: CartProps) => {
  return (
    <button
      className="fixed right-6 bottom-6 z-20 rounded-full border-2 border-gold-premium p-1 flex flex-row justify-center items-center bg-harbor-charcoal"
    >
      <p className="font-bold text-1xl text-gold-premium">{carts} Carts</p>
      <CartOutline
        color={"#D4AF37"}
        title={"CartOutline"}
        height="30px"
        width="30px"
      />
    </button>
  );
};

export default Carti;
