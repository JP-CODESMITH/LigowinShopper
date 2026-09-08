import React from "react";
import Footers from "../components/footers";

const Contacts = () => {
  return (
    <div className="cursor-auto select-none text-on-surface min-h-screen items-center overflow-hidden justify-center bg-bg-warm-white font-sans no-scrollbar">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-bg-light-lavender via-bg-soft-cream to-surface px-4 lg:px-6 py-20 lg:py-28">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-lowest shadow-sm mb-6">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent-emerald animate-ping"></span>
            <span className="text-sm text-secondary uppercase tracking-wider font-bold">24/7 Global Concierge</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight max-w-4xl leading-tight">
            Let&apos;s Talk 👋 <span className="bg-gradient-to-r from-primary-container via-secondary to-accent-pink bg-clip-text text-transparent">We&apos;re Here to Help!</span>
          </h1>
          <p className="mt-4 text-on-surface-variant max-w-2xl leading-relaxed">
            Have a question about an order, custom sourcing request, or bulk delivery from China? Our friendly team responds within minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-surface-container-lowest/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
              <span className="text-accent-emerald">⚡</span>
              <span className="text-sm font-bold">&lt; 3 Min WhatsApp Avg</span>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-lowest/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
              <span className="text-secondary">✓</span>
              <span className="text-sm font-bold">Verified Direct Sourcing</span>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-lowest/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
              <span className="text-primary-container">🌍</span>
              <span className="text-sm font-bold">Guangzhou • Yiwu • Global</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="w-full px-4 lg:px-6 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* WhatsApp */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-bg-light-green flex items-center justify-center text-accent-emerald group-hover:scale-110 transition-transform text-2xl">💬</div>
                <span className="px-2 py-0.5 rounded-full bg-bg-light-green text-accent-emerald text-[10px] font-bold uppercase tracking-wider">Fastest</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-on-surface">WhatsApp Chat</h3>
              <p className="text-sm text-on-surface-variant mt-1">+234 916 058 2481</p>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-accent-emerald font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald"></span>
                Instant Replies • Mon–Sat 8am–8pm
              </div>
            </div>
            <a href="https://wa.me/+2349160582481" target="_blank" rel="noopener noreferrer" className="mt-4 w-full py-2.5 rounded-full bg-bg-light-green text-accent-emerald hover:bg-accent-emerald hover:text-on-primary font-bold transition-all text-center text-sm">
              Chat on WhatsApp →
            </a>
          </div>

          {/* Email */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-bg-light-lavender flex items-center justify-center text-secondary group-hover:scale-110 transition-transform text-2xl">✉️</div>
                <span className="px-2 py-0.5 rounded-full bg-bg-light-lavender text-secondary text-[10px] font-bold uppercase tracking-wider">Official</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-on-surface">Email Support</h3>
              <p className="text-sm text-on-surface-variant mt-1 truncate">globalimport1234@gmail.com</p>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-secondary font-semibold">
                🕐 Average response: 30 minutes
              </div>
            </div>
            <a href="mailto:globalimport1234@gmail.com" className="mt-4 w-full py-2.5 rounded-full bg-bg-light-lavender text-secondary hover:bg-secondary hover:text-on-secondary font-bold transition-all text-center text-sm">
              Send Email →
            </a>
          </div>

          {/* Phone */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-bg-light-blue flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform text-2xl">📞</div>
                <span className="px-2 py-0.5 rounded-full bg-bg-light-blue text-tertiary text-[10px] font-bold uppercase tracking-wider">Direct</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-on-surface">Phone Hotline</h3>
              <p className="text-sm text-on-surface-variant mt-1 font-bold">+234 708 263 9358</p>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-tertiary font-semibold">
                🌐 Global multi-line voice support
              </div>
            </div>
            <a href="tel:+2347082639358" className="mt-4 w-full py-2.5 rounded-full bg-bg-light-blue text-tertiary hover:bg-tertiary hover:text-on-tertiary font-bold transition-all text-center text-sm">
              Call Now →
            </a>
          </div>

          {/* Sourcing */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-bg-soft-cream flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform text-2xl">🏭</div>
                <span className="px-2 py-0.5 rounded-full bg-bg-soft-cream text-primary-container text-[10px] font-bold uppercase tracking-wider">Wholesale</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-on-surface">Sourcing Desk</h3>
              <p className="text-sm text-on-surface-variant mt-1 truncate">Custom factory sourcing</p>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-primary-container font-semibold">
                🏭 Custom quotes & factory audits
              </div>
            </div>
            <a href="#inquiry-form" className="mt-4 w-full py-2.5 rounded-full bg-bg-soft-cream text-primary-container hover:bg-primary-container hover:text-on-primary font-bold transition-all text-center text-sm">
              Request Quote →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form + Hubs */}
      <section className="w-full px-4 lg:px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-6 sm:p-8 shadow-card" id="inquiry-form">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-bg-soft-cream flex items-center justify-center text-primary-container text-sm">📨</span>
              <span className="text-xs uppercase tracking-wider text-primary font-bold">Direct Dispatch Form</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold text-on-surface">Send Us a Direct Message</h2>
            <p className="text-sm text-on-surface-variant mt-1">Fill out this ticket and our specialist team will review your inquiry immediately.</p>

            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-1">Full Name *</label>
                  <input className="w-full px-4 py-2.5 rounded-xl bg-bg-warm-white text-on-surface placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-secondary text-sm shadow-sm transition-all" placeholder="e.g. Alex Morgan" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-1">Email Address *</label>
                  <input className="w-full px-4 py-2.5 rounded-xl bg-bg-warm-white text-on-surface placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-secondary text-sm shadow-sm transition-all" placeholder="alex@domain.com" type="email" required />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-1">Phone / WhatsApp</label>
                  <input className="w-full px-4 py-2.5 rounded-xl bg-bg-warm-white text-on-surface placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-secondary text-sm shadow-sm transition-all" placeholder="+234 xxx xxx xxxx" type="tel" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-1">Inquiry Type *</label>
                  <select className="w-full px-4 py-2.5 rounded-xl bg-bg-warm-white text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary text-sm shadow-sm cursor-pointer transition-all" required>
                    <option disabled selected value="">Select category...</option>
                    <option value="sourcing">China Sourcing & Wholesale</option>
                    <option value="tracking">Tracking & Shipping Inquiry</option>
                    <option value="orders">General Order Support</option>
                    <option value="returns">Returns & Refunds</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface mb-1">Detailed Message *</label>
                <textarea className="w-full px-4 py-2.5 rounded-xl bg-bg-warm-white text-on-surface placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-secondary text-sm shadow-sm resize-y transition-all" placeholder="Tell us about the product, link, quantities, or tracking assistance needed..." required rows={4}></textarea>
              </div>
              <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary-container text-on-primary font-bold shadow-btn-primary hover:bg-primary hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer" type="submit">
                Send Message 🚀
              </button>
            </form>
          </div>

          {/* Right: Hubs & Status */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* System Status */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-emerald"></span>
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider">Live System Status</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-bg-light-green text-accent-emerald font-bold">Active</span>
              </div>
              <p className="mt-2 text-sm text-on-surface-variant">
                All international sourcing routes and customs checkpoints are fully operational.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-surface-container-low">
                  <p className="text-[10px] text-text-muted">Standard Air Cargo</p>
                  <p className="text-sm font-bold text-on-surface mt-0.5">5–8 Business Days</p>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low">
                  <p className="text-[10px] text-text-muted">Sea & Bulk Freight</p>
                  <p className="text-sm font-bold text-on-surface mt-0.5">25–32 Days</p>
                </div>
              </div>
            </div>

            {/* Global Hubs */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-secondary text-xl">📍</span>
                <h3 className="text-lg font-bold text-on-surface">Global Sourcing Hubs</h3>
              </div>
              <div className="space-y-3">
                {[
                  { flag: "🇨🇳", name: "Guangzhou Main Hub", tag: "QC & Factory", desc: "Baiyun District Sourcing & Inspection Terminal" },
                  { flag: "📦", name: "Yiwu Logistics Center", tag: "Commodity Depot", desc: "International Trade City Consolidated Freight" },
                  { flag: "🌍", name: "West Africa Distribution", tag: "Last-Mile", desc: "Ikeja, Lagos Express Clearing Hub" },
                ].map((hub, i) => (
                  <div key={i} className="p-3 rounded-xl bg-bg-warm-white hover:bg-surface-container transition-colors flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-bg-soft-cream flex items-center justify-center shrink-0 text-lg">{hub.flag}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-on-surface">{hub.name}</h4>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface-container font-bold text-secondary">{hub.tag}</span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">{hub.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-xl bg-secondary/5 flex items-center gap-3">
                <span className="text-secondary text-xl">🛡️</span>
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
