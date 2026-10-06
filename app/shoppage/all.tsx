"use client";
import React, { useState } from "react";
import { IconEye, IconMinus, IconPlus } from "../components/primitives";

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
  price: number;
  description: string;
  Count: () => void;
  Minus: () => void;
  modal: () => void;
  id: string;
}) {
  const [vissible, setVissible] = useState(0);
  const [loading, setLoading] = useState(true);
  const [prevImage, setPrevImage] = useState(image);

  // Reset skeleton when the image source changes (render-time adjustment,
  // the React-endorsed pattern — avoids setState inside an effect).
  if (prevImage !== image) {
    setPrevImage(image);
    setLoading(true);
  }

  return (
    <article id={`product-${id}`} className="group bg-surface-container-lowest rounded-xl shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between overflow-hidden relative border border-outline-variant/20">
      <div className="relative w-full aspect-square bg-bg-warm-white flex items-center justify-center p-4 overflow-hidden">
        {loading && (
          <div className="absolute inset-0 animate-pulse bg-surface-container rounded-xl z-10" aria-hidden="true" />
        )}
        <img
          src={image}
          alt={name}
          onClick={modal}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); modal(); } }}
          tabIndex={0}
          role="button"
          aria-label={`Quick view ${name}`}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
          className={`w-full h-full object-contain rounded-xl cursor-pointer group-hover:scale-105 group-focus-within:scale-105 transition-all duration-300 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />
        <button
          onClick={modal}
          aria-label={`Quick view ${name}`}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 transition-opacity px-4 py-1.5 rounded-full bg-secondary text-on-secondary text-xs font-bold shadow-md flex items-center gap-1 hover:brightness-95 active:brightness-90"
        >
          <IconEye size={14} />
          Quick View
        </button>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold text-on-surface line-clamp-2 mb-2">{name}</h3>
          {description ? <p className="sr-only">{description}</p> : null}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-extrabold text-primary">₦{Number(price).toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            {vissible > 0 && (
              <button
                onClick={() => {
                  setVissible(vissible - 1);
                  Minus();
                }}
                aria-label={`Remove one ${name} from cart`}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high active:bg-surface-container-highest transition-colors text-sm text-on-surface"
              >
                <IconMinus size={16} />
              </button>
            )}
            <button
              onClick={() => {
                setVissible(vissible + 1);
                Count();
              }}
              aria-label={`Add ${name} to cart`}
              className="min-w-10 min-h-10 w-10 h-10 rounded-full bg-primary text-on-primary hover:brightness-95 active:brightness-90 shadow-btn-primary flex items-center justify-center transition-all text-lg"
            >
              <IconPlus size={18} />
            </button>
          </div>
        </div>
        {vissible > 0 && (
          <p className="mt-2 text-[11px] font-bold text-secondary" aria-live="polite">Qty in cart: {vissible}</p>
        )}
      </div>
    </article>
  );
}
