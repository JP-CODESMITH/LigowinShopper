import React from "react";

export const Items = () => {
  return (
    <div className="overflow-hidden w-[181px] m-1">
      <div className="w-50 h-50 overflow-hidden relative items-center justify-center">
        <div className="w-50 h-50 bg-bg-warm-white overflow-hidden flex items-center justify-center border rounded-2xl border-outline-variant/20">
          <span className="text-4xl">📦</span>
        </div>
        <div className="rounded-full bg-primary-container w-10 h-10 flex items-center justify-center z-10 absolute bottom-1 right-1 shadow-btn-primary">
          <span className="text-on-primary text-lg font-bold">+</span>
        </div>
      </div>
      <p className="text-sm font-bold text-primary-container mt-2">₦50,000</p>
      <p className="text-xs text-on-surface-variant line-clamp-1">Product name goes here...</p>
      <a href="#" className="text-secondary text-xs font-bold hover:underline">buy now</a>
    </div>
  );
};
