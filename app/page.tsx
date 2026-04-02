import Hero from "./components/hero";
import LandingShowCase from "./components/landingShowCase";
import Footers from "./components/footers";
import { JSX } from "react";
import Testimonial from "./components/testimonial";
import Reasons from "./components/reasons";
import Faq from "./components/faq";
import * as motion from "motion/react-client";
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
      "Ligowin Shopper made importing from China so easy. No stress, no hidden charges. I’ve used them multiple times and they’ve never disappointed me.",
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
      "Fast delivery and trusted quality. I’ve recommended Ligowin Shopper to my friends because they truly deliver what they promise.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    from: "Retailer, Enugu",
  },
];
export default function Home(): JSX.Element {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="cursor-auto select-none items-center overflow-hidden justify-center bg-ocean-abyss font-sans">
      <Hero />
    
      <section className="bg-harbor-charcoal">
        <motion.div
          className="max-w-7xl px-6 py-16 mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-bright mb-4">
            Trusted by <span className="text-gold-premium">Shoppers Across Nigeria</span>
          </h2>
          <p className="text-text-muted mb-12 max-w-2xl mx-auto">
            We’ve helped hundreds of customers import quality products from China with speed, trust and reliability.
          </p>
        
          {/* Stats */}
          <dl className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
        
            {/* 1 */}
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-harbor-charcoal border border-gold-border hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition duration-300">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-gold-premium font-mono">
                5K+
              </dt>
              <dd className="text-text-muted text-sm">
                Successful Deliveries
              </dd>
            </div>
        
            {/* 2 */}
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-harbor-charcoal border border-ocean-primary/30 hover:shadow-[0_0_20px_rgba(29,78,216,0.2)] transition duration-300">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-ocean-light font-mono">
                1K+
              </dt>
              <dd className="text-text-muted text-sm">
                Active Customers
              </dd>
            </div>
        
            {/* 3 */}
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-harbor-charcoal border border-trust-green/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition duration-300">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-trust-green font-mono">
                99%
              </dt>
              <dd className="text-text-muted text-sm">
                Customer Satisfaction
              </dd>
            </div>
        
          </dl>
        </motion.div>
      </section>
      <section className="w-screen my-10 p-5 flex flex-col bg-port-slate">
        <h1 className="text-center text-3xl font-extrabold text-text-bright mb-3">
          How it <span className="text-gold-premium">Works</span>
        </h1>
        <div className="md:flex justify-center items-center w-screen flex-1 flex-row-reverse">
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Reduced x distance for mobile
            whileInView={{ opacity: 1, x: 0 }}
            // 'some' ensures it triggers easier on small screens
            viewport={{ once: false, amount: "some" }}
            // Reduced delay so it feels responsive
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            layout
          >
            <ol className="relative border-s border-border-light md:ml-10 md:w-[50%]">
              <li className="mb-10 ms-6">
                <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold-premium ring-8 ring-ocean-abyss">
                  <svg
                    className="h-3 w-3 text-ocean-abyss"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 11.917 9.724 16.5 19 7.5"
                    />
                  </svg>
                </span>
                <span className="inline-flex items-center rounded bg-gold-premium px-2.5 py-0.5 text-xs font-medium text-ocean-abyss">
                  <svg
                    className="me-1 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  {today}
                </span>
                <h3 className="mb-0.5 mt-2 text-lg font-semibold text-gold-premium">
                  Place your order
                </h3>
                <p className="text-base font-normal text-text-muted">
                  Choose product from our website or contact us on WhatsApp
                </p>
              </li>

              <li className="mb-10 ms-6">
                <span className="absolute -inset-s-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-harbor-charcoal ring-8 ring-ocean-abyss">
                  <svg
                    className="h-3 w-3 text-text-muted"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 11.917 9.724 16.5 19 7.5"
                    />
                  </svg>
                </span>
                <h3 className="mb-1.5 text-lg font-semibold leading-none text-text-bright">
                  we procure from china{" "}
                </h3>
                <p className="text-base font-normal text-text-muted">
                  We source and verify your products directly from trusted
                  suppliers.
                </p>
              </li>

              <li className="mb-10 ms-6">
                <span className="absolute -inset-s-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-harbor-charcoal ring-8 ring-ocean-abyss">
                  <svg
                    className="h-3 w-3 text-text-muted"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 11.917 9.724 16.5 19 7.5"
                    />
                  </svg>
                </span>
                <h3 className="mb-1.5 text-lg font-semibold leading-none text-text-bright">
                  Door step delivery in Nigeria
                </h3>
                <p className="text-base font-normal text-text-muted">
                  We ship safely and deliver to your location anywhere in
                  Nigeria.
                </p>
              </li>
            </ol>
          </motion.div>
          <div className="md:w-[50%]">
            <div>
              <video
                width="640"
                height="360"
                preload="auto"
                autoPlay
                muted
                loop
                playsInline
                className="w-full object-contain z-0 h-full"
              >
                <source src="/videos/Hero.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <LandingShowCase />
      <section className="w-screen flex flex-col items-center pt-10">
        
        <motion.div  initial={{ opacity: 0, y:50 }} // Reduced x distance for mobile
        whileInView={{ opacity: 1, y: 0 }}
        // 'some' ensures it triggers easier on small screens
        viewport={{ once: false, amount: "some" }}
        // Reduced delay so it feels responsive
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        layout>
          
        <Reasons />
        </motion.div>
      </section>

      <section className="w-screen no-scrollbar h-screen flex justify-center items-center flex-col gap-10 bg-coal-dark">
        <h2 className="text-center text-3xl text-text-bright font-extrabold">
          TESTINONIALS
        </h2>
        <div className="flex flex-row overflow-x-auto scroll-smooth no-scrollbar items-center gap-20 w-screen">
          {testimonials.map((items, index) => (
            <motion.div
              className="border border-gold-border rounded-3xl min-w-80 md:min-w-100 h-fit"
              key={index}
             
            >
              <Testimonial
                word={items.words}
                image={items.image}
                name={items.name}
                from={items.from}
              />
            </motion.div>
          ))}
        </div>
      </section>
      <section className="w-screen h-auto">
        <div className="py-8 px-4 mx-auto max-w-7xl sm:py-16 lg:px-6 flex items-center flex-col w-full h-full gap-4 md:gap-8">
          
          <Faq />
        </div>
      </section>
      <section className="w-screen flex items-center flex-col">
        <br />
        <Footers />
      </section>
    </div>
  );
}
