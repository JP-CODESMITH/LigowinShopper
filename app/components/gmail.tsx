"use client";

import { useState } from "react";

export default function Gmail() {
  const [value, setValue] = useState("");
  return (
    <div className="w-80 md:w-90 lg:w-100 p-2 rounded-full bg-surface-container flex items-center flex-row gap-2">
      <span className="pl-3 text-secondary">✉️</span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Send us a message"
        className="flex-1 p-2 bg-transparent outline-none text-on-surface text-sm placeholder:text-text-muted"
      />
      <a
        href={`mailto:globalimport1234@gmail.com?subject=Message&body=${encodeURIComponent(value)}`}
        className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center hover:bg-primary transition-colors shadow-btn-primary"
        onClick={() => setValue("")}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      </a>
    </div>
  );
}
