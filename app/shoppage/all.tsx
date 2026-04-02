"use client";
import React, { useState } from "react";
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
}: {
  Image: string;
  name: string;
  price: string;
  description: string;
  Count: boolean;
  Minus: boolean;
}) {
  const [vissible, setVissible] = useState(0);
  const [remove, setRemove] = useState(false);
  return (
    <>
      <div
        className="overeflow-hidden listproduct p-1.5 grid-rows-(3fr_1fr_1fr_1fr)"
        onLoad={() => {}}
      >
        <div className="overflow-hidden relative ">
          <div className="bg-port-slate overflow-hidden flex items-center justify-center  border-1 rounded-2xl border-gold-premium">
            <Image
              src={image}
              alt={""}
              width={130}
              height={130}
              placeholder="blur"
              blurDataURL=""
              className="w-full max-h-[400px] object-cover rounded-2xl"
            />
          </div>
          <div className="z-10 absolute bottom-1 right-1 flex flex-row-reverse bg-surface-white rounded-full">
            <button
              onClick={() => {
                setVissible(vissible + 1);
                Count();
              }}
              className="rounded-full  w-10 h-10 flex items-center justify-center bg-gold-light"
            >
              <AddOutline
                color={"#050505"}
                title={"add to cart"}
                height="30px"
                width="30px"
              />
            </button>
            {vissible === 0 ? null : (
              <button
                onClick={() => {
                  setVissible(vissible - 1);
                  Minus();
                }}
                className="rounded-full  w-10 h-10 flex items-center justify-center"
              >
                <RemoveSharp
                  color={"#050505"}
                  title={"add to cart"}
                  height="30px"
                  width="30px"
                />
              </button>
            )}
          </div>
        </div>
        <div className="gap-1 flex flex-col">
          <p className="font-extrabold font-mono text-2xl text-trust-green">
            {" "}
            #{price}
          </p>
          <p className="font-semibold text-lg text-text-soft">{name}</p>
          <p className="font-serif text-sm text-text-muted text-justify">
            {description}
          </p>
          <a
            href="#"
            className="text-text-bright font-bold text-center self-end self-end hover:bg-trust-green bg-trust-green w-30 p-1 rounded-full transition"
          >
            buy now
          </a>
        </div>
      </div>
    </>
  );
}
