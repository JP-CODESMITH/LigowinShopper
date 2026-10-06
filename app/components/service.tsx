"use client";

import Lottie from "lottie-react";
import shippingAnimation from "../animations/shipping.json";

export default function ShippingAnimation() {
  return (
    <div className="w-full max-w-80 aspect-square" role="img" aria-label="Shipping illustration">
      <Lottie
        animationData={shippingAnimation}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}
