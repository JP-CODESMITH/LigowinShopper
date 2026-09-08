"use client";
import React, { useState, useEffect } from "react";

export default function Allm({
  image,
  name,
  price,
  description,
  Count,
  Minus,
  modal,
  id,
}: {
  image: string;
  name: string;
  price: string;
  description: string;
  Count: boolean;
  Minus: boolean;
  modal: any;
  id: string;
}) {
  const [vissible, setVissible] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [image]);

  return (
    <div className="group bg-surface-container-lowest rounded-xl shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between overflow-hidden relative">
      <div className="relative w-full aspect-square bg-bg-warm-white flex items-center justify-center p-4 overflow-hidden">
        {loading && (
          <div className="absolute inset-0 animate-pulse bg-surface-container rounded-xl z-10" />
        )}
        <img
          src={image}
          alt={name}
          onClick={modal}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
          className={`w-full h-full object-contain rounded-xl cursor-pointer group-hover:scale-105 transition-all duration-300 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />
        <button
          onClick={modal}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity px-4 py-1.5 rounded-full bg-secondary text-on-secondary text-xs font-bold shadow-md flex items-center gap-1"
        >
          👁 Quick View
        </button>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold text-on-surface line-clamp-2 mb-2">{name}</h3>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-extrabold text-primary-container">₦{Number(price).toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            {vissible > 0 && (
              <button
                onClick={() => {
                  setVissible(vissible - 1);
                  Minus();
                }}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors text-sm"
              >
                −
              </button>
            )}
            <button
              onClick={() => {
                setVissible(vissible + 1);
                Count();
              }}
              className="w-10 h-10 rounded-full bg-primary-container text-on-primary hover:bg-primary shadow-btn-primary flex items-center justify-center transition-all text-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
