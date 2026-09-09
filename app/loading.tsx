import React from "react";

const loading = () => {
  return (
    <div className="bg-bg-warm-white flex flex-col items-center justify-center h-screen w-screen gap-4">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-surface-container border-t-primary-container animate-spin"></div>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-lg font-extrabold text-on-surface tracking-tight">LIGOWIN</span>
        <span className="text-lg font-bold text-primary-container">SHOPPER</span>
      </div>
      <p className="text-xs text-text-muted tracking-widest uppercase">Loading your experience...</p>
    </div>
  );
};

export default loading;
