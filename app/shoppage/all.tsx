"use client";
import React, { useState, useEffect } from "react";
import { Items } from "../components/items";
import Image from "next/image";
import { AddOutline, RemoveSharp } from "react-ionicons";
import Logo from "../../public/images/ChatGPT Image Jan 9, 2026, 10_54_57 PM.png";

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
  const [remove, setRemove] = useState(false);
  const [loading, setLoading] = useState(true);

  // Reset loading state when image prop changes
  useEffect(() => {
    setLoading(true);
  }, [image]);

  return (
    <>
      <div className="overflow-hidden listproduct p-1.5 grid-rows-(3fr_1fr_1fr_1fr)">
        <div className="overflow-hidden p-1.5 relative">
          <div
            className="bg-port-slate flex items-center justify-center border-1 rounded-2xl border-gold-premium cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={modal}
          >
            {/* Skeleton - only show while loading */}
            {loading && (
              <div className="absolute inset-0 animate-pulse bg-gray-300 rounded-2xl z-10" />
            )}
            <img
              src={image}
              alt=""
              onLoad={() => setLoading(false)}
              onError={() => setLoading(false)}
              className={`w-full max-h-[300px] object-cover rounded-2xl transition-opacity duration-500 ${
                loading ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>

        <div className="gap-1 flex flex-col">
          <p className="font-extrabold font-mono text-xl text-trust-green">
            #{price}
          </p>
          <p className="font-semibold text-lg text-text-soft">{name}</p>
          <div className="flex flex-row-reverse bg-surface-white rounded-full w-fit self-end gap-1">
            <button
              onClick={() => {
                setVissible(vissible + 1);
                Count();
              }}
              className="rounded-full px-4 h-10 flex items-center justify-center flex-row bg-gold-light hover:bg-gold-premium transition-colors duration-200 active:scale-95 transform"
            >
              <AddOutline
                color={"#050505"}
                title={"add to cart"}
                height="30px"
                width="30px"
              />
              Add to cart
            </button>
            {vissible === 0 ? null : (
              <button
                onClick={() => {
                  setVissible(vissible - 1);
                  Minus();
                }}
                className="rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 active:scale-95 transform"
              >
                <RemoveSharp
                  color={"#050505"}
                  title={"remove from cart"}
                  height="30px"
                  width="30px"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}