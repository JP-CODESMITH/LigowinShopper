"use client";
import React, { useState } from "react";
import Footers from "../components/footers";
import { Eyebrow, IconChat, IconCheck, IconFactory, IconGlobe, IconMail, IconPhone, IconPin, IconShield, IconZap, Listbox } from "../components/primitives";

const inquiryOptions = [
  { value: "sourcing", label: "China Sourcing and Wholesale" },
  { value: "tracking", label: "Tracking and Shipping Inquiry" },
  { value: "orders", label: "General Order Support" },
  { value: "returns", label: "Returns and Refunds" },
];

const Contacts = () => {
  const [inquiry, setInquiry] = useState("sourcing");
  const [sent, setSent] = useState(false);

  return (
    <div className="text-on-surface min-h-screen items-center overflow-hidden justify-center bg-bg-warm-white font-sans no-scrollbar">
      {/* Hero Section — left aligned */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-bg-light-lavender via-bg-soft-cream to-surface px-4 lg:px-6 py-20 lg:py-28" aria-labelledby="contact-heading">
        <div aria-hidden="true" className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
        <div aria-hidden="true" className="absolute top-1/2 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-5xl mx-auto flex flex-col items-start">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-lowest shadow-sm mb-6">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent-emerald" aria-hidden="true"></span>
            <span className="text-sm text-secondary uppercase tracking-wider font-bold">24/7 Global Concierge</span>
          </span>
          <h1 id="contact-heading" className="text-5xl sm:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.02]">
            Let&apos;s Talk. <span className="text-primary">We&apos;re Here to Help.</span>
          </h1>
          <p className="mt-4 text-on-surface-variant max-w-2xl leading-relaxed text-lg">
            Questions about an order, a custom sourcing request, or bulk delivery from China? Our team replies in minutes.
          </p>
          <ul className="flex flex-wrap items-center gap-4 mt-8" aria-label="Response assurances">
            <li className="flex items-center gap-2 bg-surface-container-lowest/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
              <IconZap size={16} className="text-primary" />
              <span className="text-sm font-bold">Under 3 Min WhatsApp Avg</span>
            </li>
            <li className="flex items-center gap-2 bg-surface-container-lowest/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
              <IconCheck size={16} className="text-accent-emerald" />
              <span className="text-sm font-bold">Verified Direct Sourcing</span>
            </li>
            <li className="flex items-center gap-2 bg-surface-container-lowest/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
              <IconGlobe size={16} className="text-secondary" />
              <span className="text-sm font-bold">Guangzhou, Yiwu, Global</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Cards — WhatsApp leads */}
      <section className="w-full px-4 lg:px-6 -mt-8 relative z-10" aria-label="Contact channels">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <article className="bg-secondary text-on-secondary rounded-xl p-6 shadow-elevated flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-on-secondary/15 flex items-center justify-center" aria-hidden="true">
                  <IconChat size={24} />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary text-[10px] font-bold uppercase tracking-wider">Fastest</span>
              </div>
              <h2 className="mt-4 text-lg font-bold">WhatsApp Chat</h2>
              <p className="text-sm opacity-90 mt-1">+234 916 058 2481</p>
              <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold opacity-90">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" aria-hidden="true"></span>
                Instant Replies, Mon-Sat 8am-8pm
              </p>
            </div>
            <a href="https://wa.me/+2349160582481" target="_blank" rel="noopener noreferrer" className="mt-4 w-full py-2.5 rounded-full bg-accent-emerald text-on-primary hover:brightness-95 active:brightness-90 font-bold transition-all text-center text-sm">
              Chat on WhatsApp
            </a>
          </article>

          <article className="bg-surface-container-lowest rounded-xl p-6 shadow-card border border-outline-variant/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-bg-light-lavender flex items-center justify-center text-secondary" aria-hidden="true">
                  <IconMail size={24} />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-bg-light-lavender text-secondary text-[10px] font-bold uppercase tracking-wider">Official</span>
              </div>
              <h2 className="mt-4 text-lg font-bold text-on-surface">Email Support</h2>
              <p className="text-sm text-on-surface-variant mt-1 truncate">globalimport1234@gmail.com</p>
              <p className="mt-2 text-xs text-secondary font-semibold">Average response: 30 minutes</p>
            </div>
            <a href="mailto:globalimport1234@gmail.com" className="mt-4 w-full py-2.5 rounded-full bg-transparent border border-outline-variant text-secondary hover:bg-surface-container active:bg-surface-container-high font-bold transition-all text-center text-sm">
              Send Email
            </a>
          </article>

          <article className="bg-surface-container-lowest rounded-xl p-6 shadow-card border border-outline-variant/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-bg-light-blue flex items-center justify-center text-tertiary" aria-hidden="true">
                  <IconPhone size={24} />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-bg-light-blue text-tertiary text-[10px] font-bold uppercase tracking-wider">Direct</span>
              </div>
              <h2 className="mt-4 text-lg font-bold text-on-surface">Phone Hotline</h2>
              <p className="text-sm text-on-surface-variant mt-1 font-bold">+234 708 263 9358</p>
              <p className="mt-2 text-xs text-tertiary font-semibold">Global multi-line voice support</p>
            </div>
            <a href="tel:+2347082639358" className="mt-4 w-full py-2.5 rounded-full bg-transparent border border-outline-variant text-tertiary hover:bg-surface-container active:bg-surface-container-high font-bold transition-all text-center text-sm">
              Call Now
            </a>
          </article>

          <article className="bg-surface-container-lowest rounded-xl p-6 shadow-card border border-outline-variant/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-bg-soft-cream flex items-center justify-center text-primary" aria-hidden="true">
                  <IconFactory size={24} />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-bg-soft-cream text-primary text-[10px] font-bold uppercase tracking-wider">Wholesale</span>
              </div>
              <h2 className="mt-4 text-lg font-bold text-on-surface">Sourcing Desk</h2>
              <p className="text-sm text-on-surface-variant mt-1 truncate">Custom factory sourcing</p>
              <p className="mt-2 text-xs text-primary font-semibold">Custom quotes and factory audits</p>
            </div>
            <a href="#inquiry-form" className="mt-4 w-full py-2.5 rounded-full bg-primary text-on-primary hover:brightness-95 active:brightness-90 font-bold transition-all text-center text-sm shadow-btn-primary">
              Request Quote
            </a>
          </article>
        </div>
      </section>

      {/* Contact Form + Hubs */}
      <section className="w-full px-4 lg:px-6 py-16" aria-labelledby="form-heading">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-6 sm:p-8 shadow-card border border-outline-variant/20" id="inquiry-form">
            <Eyebrow tone="primary">Direct Dispatch Form</Eyebrow>
            <h2 id="form-heading" className="mt-2 text-4xl font-extrabold tracking-tight leading-none">Send Us a Direct Message</h2>
            <p className="text-sm text-on-surface-variant mt-2">Fill out this ticket and our specialists will review it immediately.</p>

            {sent ? (
              <div className="mt-6 p-4 rounded-xl bg-bg-light-green border border-accent-emerald/30 flex items-start gap-3" role="status">
                <IconCheck size={20} className="text-accent-emerald shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-on-surface text-sm">Message received.</p>
                  <p className="text-sm text-on-surface-variant">Our team will reply within 30 minutes during business hours.</p>
                </div>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-bold text-on-surface mb-1">Full Name *</label>
                    <input id="contact-name" autoComplete="name" className="w-full px-4 py-2.5 rounded-xl bg-bg-warm-white border border-outline-variant/30 text-on-surface placeholder:text-text-muted focus:outline-none text-sm transition-all" placeholder="e.g. Alex Morgan" required />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-bold text-on-surface mb-1">Email Address *</label>
                    <input id="contact-email" autoComplete="email" className="w-full px-4 py-2.5 rounded-xl bg-bg-warm-white border border-outline-variant/30 text-on-surface placeholder:text-text-muted focus:outline-none text-sm transition-all" placeholder="alex@domain.com" type="email" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-bold text-on-surface mb-1">Phone / WhatsApp</label>
                    <input id="contact-phone" autoComplete="tel" className="w-full px-4 py-2.5 rounded-xl bg-bg-warm-white border border-outline-variant/30 text-on-surface placeholder:text-text-muted focus:outline-none text-sm transition-all" placeholder="+234 xxx xxx xxxx" type="tel" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-on-surface mb-1" id="inquiry-label">Inquiry Type *</span>
                    <div className="w-full px-4 py-2.5 rounded-xl bg-bg-warm-white border border-outline-variant/30 text-on-surface text-sm">
                      <Listbox label="Category" options={inquiryOptions} value={inquiry} onChange={setInquiry} id="inquiry-listbox" />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-bold text-on-surface mb-1">Detailed Message *</label>
                  <textarea id="contact-message" className="w-full px-4 py-2.5 rounded-xl bg-bg-warm-white border border-outline-variant/30 text-on-surface placeholder:text-text-muted focus:outline-none text-sm resize-y transition-all" placeholder="Product link, quantities, or tracking help needed..." required rows={4}></textarea>
                </div>
                <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary text-on-primary font-bold shadow-btn-primary hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0 active:brightness-90 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50" type="submit">
                  Send Message
                  <IconCheck size={18} />
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-card border border-outline-variant/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-emerald"></span>
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider">Live System Status</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-bg-light-green text-accent-emerald font-bold">Active</span>
              </div>
              <p className="mt-2 text-sm text-on-surface-variant">
                All sourcing routes and customs checkpoints are fully operational.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <p className="text-[10px] text-text-muted">Standard Air Cargo</p>
                  <p className="text-sm font-bold text-on-surface mt-0.5">5-8 Business Days</p>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <p className="text-[10px] text-text-muted">Sea and Bulk Freight</p>
                  <p className="text-sm font-bold text-on-surface mt-0.5">25-32 Days</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-card border border-outline-variant/20">
              <div className="flex items-center gap-2 mb-4">
                <IconPin size={20} className="text-secondary" />
                <h3 className="text-lg font-bold text-on-surface">Global Sourcing Hubs</h3>
              </div>
              <ul className="space-y-3">
                {[
                  { name: "Guangzhou Main Hub", tag: "QC and Factory", desc: "Baiyun District Sourcing and Inspection Terminal" },
                  { name: "Yiwu Logistics Center", tag: "Commodity Depot", desc: "International Trade City Consolidated Freight" },
                  { name: "West Africa Distribution", tag: "Last-Mile", desc: "Ikeja, Lagos Express Clearing Hub" },
                ].map((hub, i) => (
                  <li key={i} className="p-3 rounded-xl bg-bg-warm-white border border-outline-variant/20 hover:bg-surface-container transition-colors flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-bg-soft-cream flex items-center justify-center shrink-0 text-primary" aria-hidden="true">
                      <IconPin size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-bold text-on-surface">{hub.name}</h4>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface-container font-bold text-secondary whitespace-nowrap">{hub.tag}</span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">{hub.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 flex items-center gap-3">
                <IconShield size={20} className="text-secondary shrink-0" />
                <p className="text-xs text-on-surface-variant">
                  Every shipment is covered by our <strong className="text-on-surface">100% Guaranteed Delivery Pledge</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footers />
    </div>
  );
};

export default Contacts;
