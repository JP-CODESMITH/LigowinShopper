import Hero from "./components/hero";
import LandingShowCase from "./components/landingShowCase";
import Footers from "./components/footers";
import { JSX } from "react";
import Testimonial from "./components/testimonial";
import Reasons from "./components/reasons";
import Faq from "./components/faq";
import { Eyebrow, IconHeart } from "./components/primitives";

const testimonials = [
  {
    name: "Chinedu Okafor",
    words:
      "I ordered power banks and phone accessories from China through Ligowin Shopper, and everything arrived in perfect condition. The process was smooth and transparent. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    from: "Phone Accessories Dealer, Lagos",
  },
  {
    name: "Aisha Bello",
    words:
      "What I love most is the reliability. They helped me source quality bags at a very good price, and delivery was faster than I expected. This platform is a game changer.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    from: "Fashion Entrepreneur, Abuja",
  },
  {
    name: "Emeka Nwosu",
    words:
      "Ligowin Shopper made importing from China so easy. No stress, no hidden charges. I've used them multiple times and they've never disappointed me.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    from: "Online Vendor, Onitsha",
  },
  {
    name: "Fatima Usman",
    words:
      "Customer support is top-notch. They guided me through my first order and kept me updated until delivery. I felt very secure using their service.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    from: "Small Business Owner, Kano",
  },
  {
    name: "Samuel Adeyemi",
    words:
      "The prices are very competitive compared to local markets. I now import most of my gadgets through Ligowin Shopper and save more profit.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    from: "Electronics Seller, Ibadan",
  },
  {
    name: "Blessing Eze",
    words:
      "Fast delivery and trusted quality. I've recommended Ligowin Shopper to my friends because they truly deliver what they promise.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    from: "Retailer, Enugu",
  },
];

export default function Home(): JSX.Element {
  return (
    <div className="items-center overflow-hidden justify-center bg-bg-warm-white font-sans text-on-surface">
      <Hero />

      {/* Proof Strip — one lead metric */}
      <section className="bg-bg-soft-cream py-12 px-4 lg:px-6" aria-labelledby="proof-heading">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <Eyebrow tone="primary">Trusted across Nigeria</Eyebrow>
            <h2 id="proof-heading" className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
              5K+ deliveries, <span className="text-primary">99% satisfaction</span>
            </h2>
            <p className="text-text-muted mt-3 text-base max-w-xl">
              Hundreds of customers import quality products from China with tracked speed and reliability.
            </p>
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3 max-w-3xl">
            <div className="flex flex-col items-start p-6 rounded-2xl bg-secondary text-on-secondary shadow-elevated">
              <dt className="order-2 text-sm opacity-90">Successful Deliveries</dt>
              <dd className="order-1 mb-1 text-4xl font-extrabold">5K+</dd>
            </div>
            <div className="flex flex-col items-start p-6 rounded-2xl bg-surface-container-lowest shadow-card border border-outline-variant/20">
              <dt className="order-2 text-sm text-text-muted">Active Customers</dt>
              <dd className="order-1 mb-1 text-4xl font-extrabold text-on-surface">1K+</dd>
            </div>
            <div className="flex flex-col items-start p-6 rounded-2xl bg-surface-container-lowest shadow-card border border-outline-variant/20">
              <dt className="order-2 text-sm text-text-muted">Customer Satisfaction</dt>
              <dd className="order-1 mb-1 text-4xl font-extrabold text-on-surface">99%</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* How It Works — stepped rail, wayfinding accent only */}
      <section className="py-16 px-4 lg:px-6 bg-surface" aria-labelledby="how-heading">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-8">
            <Eyebrow>Simple process</Eyebrow>
            <h2 id="how-heading" className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
              How it <span className="text-primary">Works</span>
            </h2>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <li className="flex flex-col items-start text-left p-6 rounded-2xl bg-surface-container-lowest shadow-card border border-outline-variant/20">
              <span aria-hidden="true" className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center mb-4 text-2xl font-extrabold">1</span>
              <h3 className="text-lg font-bold text-on-surface mb-2">Place your order</h3>
              <p className="text-text-muted text-sm leading-relaxed">Choose products from our catalog or contact us on WhatsApp.</p>
            </li>
            <li className="flex flex-col items-start text-left p-6 rounded-2xl bg-surface-container-lowest shadow-card border border-outline-variant/20">
              <span aria-hidden="true" className="w-14 h-14 rounded-full bg-secondary text-on-secondary flex items-center justify-center mb-4 text-2xl font-extrabold">2</span>
              <h3 className="text-lg font-bold text-on-surface mb-2">We procure from China</h3>
              <p className="text-text-muted text-sm leading-relaxed">We source and inspect your products with trusted suppliers.</p>
            </li>
            <li className="flex flex-col items-start text-left p-6 rounded-2xl bg-surface-container-lowest shadow-card border border-outline-variant/20">
              <span aria-hidden="true" className="w-14 h-14 rounded-full bg-secondary text-on-secondary flex items-center justify-center mb-4 text-2xl font-extrabold">3</span>
              <h3 className="text-lg font-bold text-on-surface mb-2">Doorstep delivery in Nigeria</h3>
              <p className="text-text-muted text-sm leading-relaxed">Tracked shipping to your location anywhere in Nigeria.</p>
            </li>
          </ol>
        </div>
      </section>

      <LandingShowCase />

      <section className="py-4">
        <Reasons />
      </section>

      {/* Testimonials — left-aligned header */}
      <section className="py-16 px-4 lg:px-6 bg-bg-light-lavender/40" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest shadow-sm mb-3">
              <IconHeart size={14} className="text-primary" />
              <span className="text-xs text-secondary uppercase tracking-wider font-bold">Testimonials</span>
            </span>
            <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
              What Our <span className="text-primary">Customers</span> Say
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="border border-outline-variant/20 rounded-2xl bg-surface-container-lowest shadow-card hover:shadow-card-hover transition-all"
              >
                <Testimonial
                  word={item.words}
                  image={item.image}
                  name={item.name}
                  from={item.from}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq />
      <Footers />
    </div>
  );
}
