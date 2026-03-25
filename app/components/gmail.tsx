"use client";

import { useState } from "react";
import { JSX } from "react/jsx-dev-runtime";

export default function Gmail(): JSX.Element {
  const [value, setValue] = useState("");
  return (
    <div className="w-80 md:w-90 lg:w-100 p-5 rounded-full self-center bg-port-slate grid grid-cols-[auto_5fr_auto] justify-center items-center flex-row">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-mail-icon lucide-mail mr-1"
      >
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
        <rect x="2" y="4" width="20" height="16" rx="2" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Send us a message"
        aria-multiline
        className="p-2 bg-transparent outline-none text-text-bright"
      />
      <a
        href={`mailto:globalimport1234@gmail.com?subject=Message&body=${encodeURIComponent(value)}`}
        className="text-text-bright underline"
        onClick={()=>{setValue("")}}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-send-icon lucide-send"
        >
          <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
          <path d="m21.854 2.147-10.94 10.939" />
        </svg>
      </a>
    </div>
  );
}
