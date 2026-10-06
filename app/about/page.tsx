import React from "react";
import Testimonial from "../components/testimonial";
import Footers from "../components/footers";
import ShippingAnimation from "../components/service";
import Link from "next/link";
import { Eyebrow, IconArrowRight, IconBox, IconCheck, IconEye, IconGlobe, IconShield, IconSparkle, IconStar, IconTruck, IconZap } from "../components/primitives";

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
    <div className="text-on-surface min-h-screen items-center overflow-hidden justify-center bg-bg-warm-white font-sans no-scrollbar">
      {/* Hero Section — left aligned */}
      <section className="relative w-full overflow-hidden bg-bg-warm-white pb-16 pt-20 px-4 lg:px-6" aria-labelledby="about-heading">
        <div aria-hidden="true" className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none"></div>
        <div aria-hidden="true" className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <p className="flex items-center gap-2 text-xs tracking-widest uppercase mb-6 text-secondary font-bold">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary-container" aria-hidden="true"></span>
            <span>Global Sourcing and Discovery Story</span>
            <span className="text-outline-variant" aria-hidden="true">•</span>
            <span className="text-text-muted">Est. 2021</span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Eyebrow>Eliminating sourcing borders daily</Eyebrow>
              <h1 id="about-heading" className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] max-w-[22ch]">
                Shopping Should Be{" "}
                <span className="text-primary relative">
                  Exciting
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary" fill="none" viewBox="0 0 250 12" aria-hidden="true">
                    <path d="M3 9C60 3 170 3 247 9" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
                  </svg>
                </span>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Ligowin Shopper removes borders from product sourcing — verified suppliers, consolidated freight, and tracked doorstep delivery.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/shop" className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-on-primary font-bold text-lg shadow-btn-primary hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0 active:brightness-90 transition-all">
                  Start Exploring
                  <IconArrowRight size={20} />
                </Link>
                <a href="#our-process" className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent border border-outline-variant text-secondary font-bold hover:bg-surface-container active:bg-surface-container-high transition-colors">
                  <IconCheck size={18} />
                  Our Guarantee
                </a>
              </div>
              <div className="pt-4 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2" aria-hidden="true">
                    <div className="w-8 h-8 rounded-full bg-accent-amber/40 flex items-center justify-center font-bold text-xs text-on-surface ring-2 ring-surface-container-lowest">US</div>
                    <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center font-bold text-xs text-on-surface ring-2 ring-surface-container-lowest">CN</div>
                    <div className="w-8 h-8 rounded-full bg-accent-emerald/40 flex items-center justify-center font-bold text-xs text-on-surface ring-2 ring-surface-container-lowest">EU</div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-text-muted font-bold">40+ Origin Ports</span>
                </div>
                <div className="flex items-center gap-1.5 text-secondary">
                  <IconCheck size={14} />
                  <span className="text-xs font-bold text-on-surface">100% Inspected Parcels</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative max-w-lg mx-auto">
                <div aria-hidden="true" className="absolute -top-4 -right-4 w-full h-full rounded-2xl bg-secondary/10 -rotate-2"></div>
                <div className="relative rounded-2xl overflow-hidden bg-surface-container-lowest shadow-card border border-outline-variant/20">
                  <div className="h-80 bg-gradient-to-br from-bg-light-lavender to-bg-soft-cream flex items-center justify-center">
                    <ShippingAnimation />
                  </div>
                  <div className="p-4 bg-inverse-surface absolute bottom-0 inset-x-0 text-inverse-on-surface">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-on-primary">Zero Hassle Unboxing</p>
                        <p className="text-xs text-surface-dim">Verified direct from certified manufacturers</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-accent-emerald text-on-primary text-[10px] font-bold">READY TO SHIP</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 bg-surface-container-lowest p-3 rounded-xl shadow-card border border-outline-variant/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-bg-light-lavender flex items-center justify-center text-secondary">
                    <IconTruck size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-muted uppercase tracking-wider font-bold">Air Cargo Lane</p>
                    <p className="text-xs font-bold text-on-surface">Guangzhou to Global Doorstep</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-16 bg-bg-soft-cream px-4 lg:px-6" aria-labelledby="purpose-heading">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Purpose Driven Commerce</span>
            <h2 id="purpose-heading" className="text-4xl md:text-5xl font-extrabold mt-2 tracking-tight leading-none">
              Engineered to Democratize International Trade
            </h2>
            <p className="text-on-surface-variant mt-3 text-base">
              We remove the layered complexity of cross-border commerce so retailers and shoppers get direct global access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="p-8 rounded-2xl bg-secondary text-on-secondary shadow-elevated flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="w-14 h-14 rounded-xl bg-on-secondary/15 text-on-secondary flex items-center justify-center mb-6" aria-hidden="true">
                  <IconZap size={24} />
                </div>
                <span className="text-xs tracking-widest uppercase font-bold opacity-80">Our Mission</span>
                <h3 className="text-xl font-bold mt-1">Making Global Sourcing Effortless.</h3>
                <p className="mt-3 leading-relaxed text-sm opacity-90">
                  Connecting shoppers and merchants directly to premium manufacturers. We verify suppliers on-ground, consolidate bulk orders, and show multi-currency clarity at checkout.
                </p>
              </div>
              <p className="pt-6 flex items-center gap-2 text-sm font-bold">
                <span>Direct factory access for everyone</span>
                <IconCheck size={16} />
              </p>
            </article>

            <article className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 shadow-card flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="w-14 h-14 rounded-xl bg-bg-light-lavender text-secondary flex items-center justify-center mb-6" aria-hidden="true">
                  <IconGlobe size={24} />
                </div>
                <span className="text-xs tracking-widest uppercase text-secondary font-bold">Our Vision</span>
                <h3 className="text-xl font-bold text-on-surface mt-1">A World Where Any Product Is Within Reach.</h3>
                <p className="text-on-surface-variant mt-3 leading-relaxed text-sm">
                  International discovery delivered to your door with zero logistics headache — from a single gadget to full fashion inventory.
                </p>
              </div>
              <p className="pt-6 flex items-center gap-2 text-secondary text-sm font-bold">
                <span>Frictionless borderless commerce</span>
                <IconArrowRight size={16} />
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Timeline — one highlighted lead */}
      <section className="w-full py-16 bg-bg-warm-white px-4 lg:px-6" aria-labelledby="journey-heading">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest text-secondary font-bold">The Evolution</span>
            <h2 id="journey-heading" className="text-4xl md:text-5xl font-extrabold mt-2 tracking-tight leading-none">
              From Frustration to Global Freedom
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { year: "2021", title: "The Genesis", desc: "Born from delayed parcels, opaque surcharges, and middlemen fees.", tag: "1st Sourcing Route Tested" },
              { year: "2022", title: "Direct Sourcing Hubs", desc: "Inspection checkpoints in Guangzhou and Yiwu before export.", tag: "200+ Verified Suppliers" },
              { year: "2023", title: "Seamless Mobile Experience", desc: "Live tracking, multi-currency checkout, automated customs.", tag: "Instant Customs API" },
              { year: "2024+", title: "Global Shopper Family", desc: "150,000+ customers across 40+ countries discovering daily.", tag: "150K+ Happy Shoppers", highlighted: true },
            ].map((item, i) => (
              <article key={i} className={`p-6 rounded-2xl border border-outline-variant/20 flex flex-col justify-between hover:-translate-y-1 transition-transform ${item.highlighted ? "bg-secondary text-on-secondary shadow-elevated" : "bg-surface-container-lowest shadow-card"}`}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.highlighted ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface"}`}>{item.year}</span>
                  </div>
                  <h3 className={`text-lg font-bold ${item.highlighted ? "text-on-secondary" : "text-on-surface"}`}>{item.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${item.highlighted ? "opacity-90" : "text-on-surface-variant"}`}>{item.desc}</p>
                </div>
                <p className={`mt-4 p-2 rounded-lg text-xs font-bold ${item.highlighted ? "bg-on-secondary/10 text-accent-amber" : "bg-surface-container-low text-primary"}`}>{item.tag}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values — wide lead tile */}
      <section className="w-full py-16 bg-bg-light-lavender/40 px-4 lg:px-6" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Our Philosophy</span>
          <h2 id="values-heading" className="text-4xl md:text-5xl font-extrabold mt-2 mb-8 tracking-tight leading-none">
            What Keeps Ligowin Moving Fast
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <IconShield size={20} />, title: "Trust & Transparency", desc: "Honest pricing, zero hidden surcharges, GPS tracking checkpoints.", tag: "Zero Hidden Fees" },
              { icon: <IconStar size={20} />, title: "Curated Quality", desc: "Every supplier physically visited and verified by on-ground auditors.", tag: "Inspected Prior to Flight" },
              { icon: <IconEye size={20} />, title: "Effortless Simplicity", desc: "International sourcing as intuitive as ordering local takeaway.", tag: "1-Click Multi-Source Cart" },
              { icon: <IconSparkle size={20} />, title: "Customer Happiness", desc: "24/7 human support via WhatsApp. No cold automated bots.", tag: "Real Humans 24/7" },
            ].map((item, i) => (
              <article key={i} className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 shadow-card flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-bg-light-lavender text-secondary flex items-center justify-center mb-4" aria-hidden="true">{item.icon}</div>
                  <h3 className="text-lg font-bold text-on-surface">{item.title}</h3>
                  <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-secondary">{item.tag}</p>
              </article>
            ))}
            <article className="p-6 rounded-2xl bg-secondary text-on-secondary shadow-elevated md:col-span-2 lg:col-span-2 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-on-secondary/15 text-on-secondary flex items-center justify-center mb-4" aria-hidden="true">
                  <IconZap size={20} />
                </div>
                <h3 className="text-lg font-bold">Relentless Innovation</h3>
                <p className="mt-2 text-sm opacity-90 leading-relaxed">Smarter routing, micro-freight packaging, and supply matching — 40% faster on average.</p>
              </div>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-accent-amber">40% Faster Routing</p>
            </article>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="w-full py-16 bg-bg-warm-white px-4 lg:px-6" id="our-process" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Rigorous Excellence</span>
            <h2 id="services-heading" className="text-4xl md:text-5xl font-extrabold mt-2 tracking-tight leading-none">
              How We Ensure You Get the Best
            </h2>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "01", icon: <IconEye size={20} />, title: "Supplier Verification", desc: "Factory audits, registry validation, and sample history review.", tag: "Stage 1: Identity and Quality" },
              { num: "02", icon: <IconBox size={20} />, title: "Physical Sample Inspection", desc: "Photo logs, material testing, and on-site defect rejection.", tag: "Stage 2: Hands-on Audit" },
              { num: "03", icon: <IconTruck size={20} />, title: "Secure Consolidation", desc: "Orders repackaged into reinforced boxes to cut freight fees.", tag: "Stage 3: Impact Packing" },
              { num: "04", icon: <IconCheck size={20} />, title: "Fast Air Cargo and Delivery", desc: "Priority lanes with GPS handoff to your address.", tag: "Stage 4: Doorstep Arrival" },
            ].map((item, i) => (
              <li key={i} className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 shadow-card flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-3xl font-extrabold text-secondary" aria-hidden="true">{item.num}</span>
                  <div className="text-secondary" aria-hidden="true">{item.icon}</div>
                  <h3 className="text-sm font-bold text-on-surface">{item.title}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
                <p className="mt-4 pt-3 text-[10px] font-bold uppercase tracking-wider text-secondary">{item.tag}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 bg-bg-light-lavender/40 px-4 lg:px-6" aria-labelledby="about-testimonials">
        <div className="max-w-7xl mx-auto">
          <h2 id="about-testimonials" className="text-4xl font-extrabold tracking-tight leading-none mb-8">
            Customer Stories
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
      <section className="w-full py-16 bg-bg-warm-white px-4 lg:px-6" aria-labelledby="cta-heading">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl bg-secondary text-on-secondary p-8 lg:p-12 overflow-hidden shadow-elevated">
            <div aria-hidden="true" className="absolute -right-16 -top-16 w-96 h-96 rounded-full bg-primary-container/20 blur-2xl pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl">
              <Eyebrow>Your global discovery starts here</Eyebrow>
              <h2 id="cta-heading" className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
                Experience the Ligowin Difference Today
              </h2>
              <p className="text-surface-container-high mt-3 leading-relaxed">
                Unbeatable factory-direct products with clear pricing and door-to-door assurance.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <Link href="/shop" className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-on-primary font-bold shadow-btn-primary hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0 transition-all">
                  Start Shopping
                  <IconArrowRight size={18} />
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
