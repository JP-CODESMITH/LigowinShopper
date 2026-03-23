"use client";

import Lottie from "lottie-react";
import shippingAnimation from "../animations/shipping.json";

export default function ShippingAnimation() {
  return (
    <div className="w-80 h-80">
      <Lottie
        animationData={shippingAnimation}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}