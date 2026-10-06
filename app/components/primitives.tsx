"use client";
import React, { useEffect, useId, useRef, useState } from "react";

/* Lucide-style inline icons (stroke=currentColor, no emoji). */

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 20, ...props }: IconProps, path: React.ReactNode) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {path}
    </svg>
  );
}

export const IconCart = (p: IconProps) =>
  base(p, <>
    <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </>);
export const IconSearch = (p: IconProps) =>
  base(p, <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>);
export const IconX = (p: IconProps) =>
  base(p, <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>);
export const IconPlus = (p: IconProps) =>
  base(p, <><path d="M5 12h14" /><path d="M12 5v14" /></>);
export const IconMinus = (p: IconProps) => base(p, <><path d="M5 12h14" /></>);
export const IconChevronDown = (p: IconProps) =>
  base(p, <><path d="m6 9 6 6 6-6" /></>);
export const IconCheck = (p: IconProps) =>
  base(p, <><path d="M20 6 9 17l-5-5" /></>);
export const IconTruck = (p: IconProps) =>
  base(p, <>
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18H9" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
    <circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" />
  </>);
export const IconShield = (p: IconProps) =>
  base(p, <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></>);
export const IconBag = (p: IconProps) =>
  base(p, <><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></>);
export const IconTag = (p: IconProps) =>
  base(p, <><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" /><circle cx="7.5" cy="7.5" r=".5" fill="currentColor" /></>);
export const IconStar = (p: IconProps) =>
  base(p, <><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" /></>);
export const IconChat = (p: IconProps) =>
  base(p, <><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></>);
export const IconMail = (p: IconProps) =>
  base(p, <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>);
export const IconPhone = (p: IconProps) =>
  base(p, <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></>);
export const IconFactory = (p: IconProps) =>
  base(p, <><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /><path d="M17 18h1" /><path d="M12 18h1" /><path d="M7 18h1" /></>);
export const IconPin = (p: IconProps) =>
  base(p, <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>);
export const IconArrowRight = (p: IconProps) =>
  base(p, <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>);
export const IconZap = (p: IconProps) =>
  base(p, <><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></>);
export const IconGlobe = (p: IconProps) =>
  base(p, <><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></>);
export const IconHeart = (p: IconProps) =>
  base(p, <><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></>);
export const IconEye = (p: IconProps) =>
  base(p, <><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></>);
export const IconTrash = (p: IconProps) =>
  base(p, <><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></>);
export const IconMenu = (p: IconProps) =>
  base(p, <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>);
export const IconBox = (p: IconProps) =>
  base(p, <><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></>);
export const IconSparkle = (p: IconProps) =>
  base(p, <><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></>);

/* Section eyebrow — single style, left-aligned by default. */
export function Eyebrow({ children, tone = "secondary" }: { children: React.ReactNode; tone?: "secondary" | "primary" | "success" }) {
  const tones = {
    secondary: "bg-bg-light-lavender text-secondary",
    primary: "bg-bg-soft-cream text-primary",
    success: "bg-bg-light-green text-accent-emerald",
  } as const;
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${tones[tone]}`}>
      {children}
    </span>
  );
}

/* Accessible Listbox — replaces the native dropdown element. Full keyboard parity. */
export type ListboxOption = { value: string; label: string };

export function Listbox({
  label,
  options,
  value,
  onChange,
  id,
}: {
  label: string;
  options: ListboxOption[];
  value: string;
  onChange: (v: string) => void;
  id?: string;
}) {
  const btnId = useId();
  const listId = id ?? `${btnId}-listbox`;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(() => Math.max(0, options.findIndex((o) => o.value === value)));
  const btnRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selected = options.find((o) => o.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(`[data-listbox="${listId}"]`)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); }
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, [open, listId]);

  useEffect(() => {
    if (open) listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.focus();
  }, [active, open]);

  function choose(i: number) {
    onChange(options[i].value);
    setOpen(false);
    btnRef.current?.focus();
  }

  function onBtnKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(Math.max(0, options.findIndex((o) => o.value === value))); setOpen(true); }
  }

  function onOptKey(e: React.KeyboardEvent, i: number) {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((i + 1) % options.length); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((i - 1 + options.length) % options.length); }
    else if (e.key === "Home") { e.preventDefault(); setActive(0); }
    else if (e.key === "End") { e.preventDefault(); setActive(options.length - 1); }
    else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(i); }
    else if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); }
    else if (e.key.length === 1) {
      const hit = options.findIndex((o) => o.label.toLowerCase().startsWith(e.key.toLowerCase()));
      if (hit >= 0) setActive(hit);
    }
  }

  return (
    <div className="relative" data-listbox={listId}>
      <span id={`${listId}-label`} className="text-[10px] text-text-muted uppercase font-bold">{label}</span>
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${listId}-label ${btnId}-value`}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onBtnKey}
        className="ml-2 inline-flex items-center gap-1.5 bg-transparent text-xs font-bold text-on-surface cursor-pointer rounded-md px-1 py-0.5"
      >
        <span id={`${btnId}-value`}>{selected.label}</span>
        <IconChevronDown size={14} />
      </button>
      {open && (
        <ul
          ref={listRef}
          role="listbox"
          id={listId}
          aria-labelledby={`${listId}-label`}
          aria-activedescendant={`${listId}-opt-${active}`}
          tabIndex={-1}
          className="absolute right-0 mt-2 w-48 rounded-xl bg-surface-container-lowest shadow-elevated border border-outline-variant/20 p-1 z-50"
        >
          {options.map((o, i) => (
            <li
              key={o.value}
              id={`${listId}-opt-${i}`}
              role="option"
              aria-selected={o.value === value}
              data-index={i}
              tabIndex={-1}
              onClick={() => choose(i)}
              onKeyDown={(e) => onOptKey(e, i)}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer ${o.value === value ? "bg-secondary-fixed text-secondary" : "text-on-surface hover:bg-surface-container"}`}
            >
              {o.label}
              {o.value === value && <IconCheck size={14} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
