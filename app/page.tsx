import Hero from "./components/hero";
import LandingShowCase from "./components/landingShowCase";
import Footers from "./components/footers";
import { JSX } from "react";
import Testimonial from "./components/testimonial";
import Reasons from "./components/reasons";
import Faq from "./components/faq";

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
    <div className="cursor-auto select-none items-center overflow-hidden justify-center bg-bg-warm-white font-sans">
      <Hero />

      {/* Stats Section */}
      <section className="bg-bg-soft-cream py-12 px-4 lg:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-2">
            Trusted by <span className="text-primary-container">Shoppers Across Nigeria</span>
          </h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto text-sm">
            We've helped hundreds of customers import quality products from China with speed, trust and reliability.
          </p>

          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-container-lowest shadow-card">
              <dt className="mb-2 text-3xl font-extrabold text-primary-container">5K+</dt>
              <dd className="text-text-muted text-sm">Successful Deliveries</dd>
            </div>
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-container-lowest shadow-card">
              <dt className="mb-2 text-3xl font-extrabold text-secondary">1K+</dt>
              <dd className="text-text-muted text-sm">Active Customers</dd>
            </div>
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-container-lowest shadow-card">
              <dt className="mb-2 text-3xl font-extrabold text-accent-emerald">99%</dt>
              <dd className="text-text-muted text-sm">Customer Satisfaction</dd>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 lg:px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-center text-2xl md:text-3xl font-bold text-on-surface mb-8">
            How it <span className="text-primary-container">Works</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-container-lowest shadow-card">
              <div className="w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center mb-4 text-2xl">1</div>
              <h3 className="text-lg font-bold text-on-surface mb-2">Place your order</h3>
              <p className="text-text-muted text-sm">Choose products from our website or contact us on WhatsApp</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-container-lowest shadow-card">
              <div className="w-14 h-14 rounded-full bg-secondary text-on-secondary flex items-center justify-center mb-4 text-2xl">2</div>
              <h3 className="text-lg font-bold text-on-surface mb-2">We procure from China</h3>
              <p className="text-text-muted text-sm">We source and verify your products directly from trusted suppliers</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-container-lowest shadow-card">
              <div className="w-14 h-14 rounded-full bg-accent-emerald text-on-primary flex items-center justify-center mb-4 text-2xl">3</div>
              <h3 className="text-lg font-bold text-on-surface mb-2">Doorstep delivery in Nigeria</h3>
              <p className="text-text-muted text-sm">We ship safely and deliver to your location anywhere in Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      <LandingShowCase />

      <section className="py-4">
        <Reasons />
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 lg:px-6 bg-bg-light-lavender/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest shadow-sm mb-3">
              <span className="text-xs text-accent-pink">❤</span>
              <span className="text-xs text-secondary uppercase tracking-wider font-bold">Testimonials</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-on-surface">
              What Our <span className="text-primary-container">Customers</span> Say
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

      {/* FAQ */}
      <Faq />

      {/* Footer */}
      <Footers />
    </div>
  );
}
