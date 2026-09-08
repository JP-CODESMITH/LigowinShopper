import React from "react";
import Testimonial from "../components/testimonial";
import Footers from "../components/footers";
import ShippingAnimation from "../components/service";
import Link from "next/link";

const testimonials = [
  {
    name: "Chinedu Okafor",
    words: "I ordered power banks and phone accessories from China through Ligowin Shopper, and everything arrived in perfect condition. The process was smooth and transparent. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    from: "Phone Accessories Dealer, Lagos",
  },
  {
    name: "Aisha Bello",
    words: "What I love most is the reliability. They helped me source quality bags at a very good price, and delivery was faster than I expected. This platform is a game changer.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    from: "Fashion Entrepreneur, Abuja",
  },
  {
    name: "Emeka Nwosu",
    words: "Ligowin Shopper made importing from China so easy. No stress, no hidden charges. I've used them multiple times and they've never disappointed me.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    from: "Online Vendor, Onitsha",
  },
  {
    name: "Fatima Usman",
    words: "Customer support is top-notch. They guided me through my first order and kept me updated until delivery. I felt very secure using their service.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    from: "Small Business Owner, Kano",
  },
];

const Page = () => {
  return (
    <div className="cursor-auto select-none text-on-surface min-h-screen items-center overflow-hidden justify-center bg-bg-warm-white font-sans no-scrollbar">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-bg-warm-white pb-16 pt-20 px-4 lg:px-6">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full bg-primary-container/10 blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase mb-6 text-secondary">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary-container"></span>
            <span>Global Sourcing & Discovery Story</span>
            <span className="text-outline-variant">•</span>
            <span className="text-text-muted">Est. 2021</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg-light-lavender text-secondary text-sm font-bold">
                🚀 Eliminating Sourcing Borders Daily
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight leading-tight">
                Shopping Should Be <br className="hidden sm:inline" />
                <span className="text-primary-container relative">
                  Exciting ✨
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary" fill="none" viewBox="0 0 250 12">
                    <path d="M3 9C60 3 170 3 247 9" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
                  </svg>
                </span>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-2xl">
                Ligowin Shopper was created to eliminate borders, simplify global product sourcing, and make discovering incredible products joyful, trustworthy, and seamless for everyone.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/shop" className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary-container text-on-primary font-bold text-lg shadow-btn-primary hover:scale-105 transition-all">
                  Start Exploring →
                </Link>
                <a href="#our-process" className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-bg-light-lavender text-secondary font-bold hover:bg-secondary-fixed transition-colors">
                  ✓ Our Guarantee
                </a>
              </div>
              <div className="pt-4 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-accent-amber/40 flex items-center justify-center font-bold text-xs text-on-surface ring-2 ring-surface-container-lowest">US</div>
                    <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center font-bold text-xs text-on-surface ring-2 ring-surface-container-lowest">CN</div>
                    <div className="w-8 h-8 rounded-full bg-accent-emerald/40 flex items-center justify-center font-bold text-xs text-on-surface ring-2 ring-surface-container-lowest">EU</div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-text-muted font-bold">40+ Origin Ports</span>
                </div>
                <div className="flex items-center gap-1.5 text-secondary">
                  <span className="text-sm">✓</span>
                  <span className="text-xs font-bold text-on-surface">100% Inspected Parcels</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative max-w-lg mx-auto">
                <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl bg-secondary/10 -rotate-2"></div>
                <div className="relative rounded-2xl overflow-hidden bg-surface-container-lowest shadow-card">
                  <div className="h-80 bg-gradient-to-br from-bg-light-lavender to-bg-soft-cream flex items-center justify-center">
                    <ShippingAnimation />
                  </div>
                  <div className="p-4 bg-gradient-to-t from-inverse-surface via-inverse-surface/60 to-transparent absolute bottom-0 inset-x-0 text-inverse-on-surface">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-on-primary">Zero Hassle Unboxing</p>
                        <p className="text-xs text-surface-dim">Verified direct from certified manufacturers</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-accent-emerald text-on-primary text-[10px] font-bold">READY TO SHIP</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 bg-surface-container-lowest p-3 rounded-xl shadow-card flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-bg-light-lavender flex items-center justify-center text-secondary text-lg">✈️</div>
                  <div>
                    <p className="text-[10px] text-text-muted uppercase tracking-wider font-bold">Air Cargo Lane</p>
                    <p className="text-xs font-bold text-on-surface">Guangzhou → Global Doorstep</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-16 bg-bg-soft-cream px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Purpose Driven Commerce</span>
            <h2 className="text-2xl md:text-3xl font-bold text-on-surface mt-1">
              Engineered to Democratize International Trade
            </h2>
            <p className="text-on-surface-variant mt-2">
              We strip away the convoluted layers of cross-border commerce so independent creators, local retailers, and passionate shoppers get direct global power.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-card flex flex-col justify-between relative overflow-hidden group hover:shadow-card-hover transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-bl-full pointer-events-none"></div>
              <div>
                <div className="w-14 h-14 rounded-xl bg-bg-soft-cream text-primary-container flex items-center justify-center mb-6 text-2xl">🎯</div>
                <span className="text-xs tracking-widest uppercase text-primary font-bold">Our Mission</span>
                <h3 className="text-xl font-bold text-on-surface mt-1">Making Global Sourcing Effortless.</h3>
                <p className="text-on-surface-variant mt-3 leading-relaxed text-sm">
                  Connecting everyday shoppers and growing merchants directly to premium manufacturers and curated trends worldwide. We verify suppliers on-ground, consolidate bulk orders, and provide multi-currency clarity at check-out.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-2 text-primary text-sm font-bold">
                <span>Direct factory access for everyone</span>
                <span>✓</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-card flex flex-col justify-between relative overflow-hidden group hover:shadow-card-hover transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bg-light-lavender rounded-bl-full pointer-events-none"></div>
              <div>
                <div className="w-14 h-14 rounded-xl bg-bg-light-lavender text-secondary flex items-center justify-center mb-6 text-2xl">🌍</div>
                <span className="text-xs tracking-widest uppercase text-secondary font-bold">Our Vision</span>
                <h3 className="text-xl font-bold text-on-surface mt-1">A World Where Any Product Is Within Reach.</h3>
                <p className="text-on-surface-variant mt-3 leading-relaxed text-sm">
                  Bringing the excitement of international discovery straight to your door with zero logistics headache. Whether you are ordering a single boutique gadget or scaling your fashion brand, the globe is your personal marketplace.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-2 text-secondary text-sm font-bold">
                <span>Frictionless borderless commerce</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full py-16 bg-bg-warm-white px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-secondary font-bold">The Evolution</span>
            <h2 className="text-2xl md:text-3xl font-bold text-on-surface mt-1">
              The Journey from Frustration to Global Freedom
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { year: "2021", title: "The Genesis", desc: "Born out of frustration with delayed overseas packages, opaque shipping surcharges, and high middlemen fees.", color: "bg-bg-soft-cream text-primary-container", tag: "1st Sourcing Route Tested" },
              { year: "2022", title: "Direct Sourcing Hubs", desc: "Established physical quality inspection checkpoints in Guangzhou and Yiwu to inspect goods before export.", color: "bg-bg-light-lavender text-secondary", tag: "200+ Verified Suppliers" },
              { year: "2023", title: "Seamless Mobile Experience", desc: "Launched instant live tracking, multi-currency checkout, and automated customs clearance.", color: "bg-bg-soft-cream text-primary-container", tag: "Instant Customs API" },
              { year: "2024+", title: "Global Shopper Family", desc: "Over 150,000+ satisfied customers across 40+ countries discovering high-value goods daily.", color: "bg-secondary text-on-secondary", tag: "150K+ Happy Shoppers", highlighted: true },
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-2xl ${item.highlighted ? "bg-secondary text-on-secondary shadow-elevated" : "bg-surface-container-lowest shadow-card"} flex flex-col justify-between hover:-translate-y-1 transition-transform`}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.highlighted ? "bg-primary-container text-on-primary" : "bg-surface-container text-on-surface"}`}>{item.year}</span>
                  </div>
                  <h3 className={`text-lg font-bold ${item.highlighted ? "text-on-secondary" : "text-on-surface"}`}>{item.title}</h3>
                  <p className={`mt-2 text-sm ${item.highlighted ? "text-surface-dim" : "text-on-surface-variant"}`}>{item.desc}</p>
                </div>
                <div className={`mt-4 p-2 rounded-lg text-xs font-bold ${item.highlighted ? "bg-on-secondary/10 text-accent-amber" : "bg-surface-container-low text-primary"}`}>{item.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16 bg-bg-light-lavender/40 px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Our Philosophy</span>
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface mt-1 mb-8">
            What Keeps Ligowin Moving Fast
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🛡️", title: "Trust & Transparency", desc: "Honest pricing, zero hidden border surcharges, real-time GPS tracking checkpoints.", tag: "Zero Hidden Fees", color: "bg-bg-light-green text-accent-emerald" },
              { icon: "🏅", title: "Curated Quality", desc: "Every single supplier is physically visited and verified by our boots-on-the-ground auditors.", tag: "Inspected Prior to Flight", color: "bg-bg-soft-cream text-primary-container" },
              { icon: "👆", title: "Effortless Simplicity", desc: "International sourcing made as fast and intuitive as ordering your favorite local takeaway.", tag: "1-Click Multi-Source Cart", color: "bg-bg-light-blue text-tertiary" },
              { icon: "😊", title: "Customer Happiness", desc: "24/7 empathetic human support via WhatsApp and live desk. No cold automated bots.", tag: "Real Humans 24/7", color: "bg-pink-50 text-accent-pink" },
              { icon: "🧠", title: "Relentless Innovation", desc: "Smarter logistics routing, dynamic micro-freight packaging algorithms, and AI supply matching.", tag: "40% Faster Routing", color: "bg-secondary text-on-secondary", wide: true },
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-2xl ${item.wide ? "bg-secondary text-on-secondary shadow-elevated lg:col-span-2" : "bg-surface-container-lowest shadow-card"} flex flex-col justify-between`}>
                <div>
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4 text-xl`}>{item.icon}</div>
                  <h3 className={`text-lg font-bold ${item.wide ? "text-on-secondary" : "text-on-surface"}`}>{item.title}</h3>
                  <p className={`mt-2 text-sm ${item.wide ? "text-surface-container-high" : "text-on-surface-variant"}`}>{item.desc}</p>
                </div>
                <div className={`mt-4 text-[10px] font-bold uppercase tracking-wider ${item.wide ? "text-accent-amber" : "text-secondary"}`}>{item.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="w-full py-16 bg-bg-warm-white px-4 lg:px-6" id="our-process">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Rigorous Excellence</span>
            <h2 className="text-2xl md:text-3xl font-bold text-on-surface mt-1">
              How We Ensure You Get the Best
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "01", icon: "🔍", title: "Supplier Verification", desc: "Legitimacy checks, factory audits, business registry validation, and sample history review.", tag: "Stage 1: Identity & Quality", color: "text-secondary" },
              { num: "02", icon: "🔬", title: "Physical Sample Inspection", desc: "High-resolution photo logs, material testing, functional diagnostics, and defect rejection on-site.", tag: "Stage 2: Hands-on Audit", color: "text-primary-container" },
              { num: "03", icon: "📦", title: "Secure Consolidation", desc: "Multiple orders repackaged into weatherproof, reinforced boxes to minimize volumetric freight fees.", tag: "Stage 3: Impact Packing", color: "text-tertiary" },
              { num: "04", icon: "🚚", title: "Fast Air Cargo & Delivery", desc: "Priority flight lanes with end-to-end GPS handoff straight to your residential or store address.", tag: "Stage 4: Doorstep Arrival", color: "text-accent-emerald" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-surface-container-lowest shadow-card flex flex-col justify-between">
                <div className="space-y-3">
                  <span className={`text-3xl font-extrabold ${item.color}`}>{item.num}</span>
                  <div className="text-xl">{item.icon}</div>
                  <h3 className="text-sm font-bold text-on-surface">{item.title}</h3>
                  <p className="text-xs text-on-surface-variant">{item.desc}</p>
                </div>
                <div className={`mt-4 pt-3 text-[10px] font-bold uppercase tracking-wider ${item.color}`}>{item.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 bg-bg-light-lavender/40 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-on-surface text-center mb-8">
            Testimonial
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((items, index) => (
              <div key={index} className="border border-outline-variant/20 rounded-2xl bg-surface-container-lowest shadow-card">
                <Testimonial word={items.words} image={items.image} name={items.name} from={items.from} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-bg-warm-white px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-secondary via-secondary to-secondary text-on-secondary p-8 lg:p-12 overflow-hidden shadow-elevated">
            <div className="absolute -right-16 -top-16 w-96 h-96 rounded-full bg-primary-container/20 blur-2xl pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-on-secondary/15 text-on-secondary text-sm font-bold mb-4">
                🛍️ Your Global Discovery Starts Here
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-on-secondary tracking-tight">
                Experience the Ligowin Difference Today
              </h2>
              <p className="text-surface-container-high mt-3">
                Ready to find unbeatable products sourced directly from international manufacturing centers? Zero guesswork, clear pricing, and door-to-door assurance.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <Link href="/shop" className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary-container text-on-primary font-bold shadow-btn-primary hover:bg-primary hover:scale-105 transition-all">
                  Start Shopping →
                </Link>
                <Link href="/shop" className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-surface-container-lowest text-on-surface font-bold hover:bg-bg-warm-white transition-colors">
                  Explore Catalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footers />
    </div>
  );
};

export default Page;
