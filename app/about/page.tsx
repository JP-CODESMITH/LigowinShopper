import React from "react";
import Testimonial from "../components/testimonial";
import Footer from "../components/footers";
import ShippingAnimation from "../components/service";
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

const page = () => {
  return (
    <div className="cursor-auto select-none text-text-bright min-h-screen items-center overflow-hidden justify-center bg-ocean-abyss font-sans no-scrollbar ">
      <section className="flex justify-center items-center p-9 w-screen h-screen flex-col gap-5 bg-linear-to-b from-ocean-abyss to-ocean-deep">
        <motion.h1
          className="text-3xl font-serif font-extrabold text-gold-premium"
          initial={{ opacity: -5, y: -5 }}
          whileInView={{ y: 1, opacity: 1 }}
          viewport={{ once: false, amount: "some" }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
          layout
        >
          About LigowinShopper
        </motion.h1>
        <motion.p
          className="text-lg text-justify text-text-soft"
          initial={{ opacity: -5, y: 5 }}
          whileInView={{ y: 1, opacity: 1 }}
          viewport={{ once: false, amount: "some" }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          layout
        >
          LigowinShopper helps Nigerians buy products from China and have them
          delivered safely to their doorstep.
        </motion.p>
      </section>
      <section className="bg-ocean-deep p-9 w-screen flex  justify-center items-center  ">
        <motion.div
          className="flex flex-col gap-5 justify-center items-center mb-10"
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: "some" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          layout
        >
          <h2 className="text-2xl font-extrabold font-mono text-gold-premium">
            Our Story
          </h2>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-text-soft leading-relaxed space-y-5">
            <p className="text-base sm:text-lg md:text-xl">
              It started with frustration — the kind that many Nigerians know
              too well. You find the perfect product online or through a
              supplier in China. The price is good, the opportunity is there,
              and you’re ready to grow your business… but then reality sets in:
            </p>

            <ul className="list-disc pl-5 sm:pl-8 space-y-2 text-base sm:text-lg">
              <li>Who do you trust?</li>
              <li>Will the goods arrive?</li>
              <li>
                What about customs, delays, hidden charges — or worse, losing
                your money entirely?
              </li>
            </ul>

            <p className="text-base sm:text-lg md:text-xl">
              For many people, that’s where the journey ends — not because the
              opportunity isn’t real, but because the process is too risky, too
              confusing, and too stressful.
            </p>

            <p className="font-semibold text-base sm:text-lg">
              We’ve been there.
            </p>

            <p className="text-base sm:text-lg md:text-xl">
              Ligowin was born out of that exact struggle — the late nights
              worrying about shipments, the uncertainty of dealing with overseas
              suppliers, and the disappointment when things didn’t go as
              planned.
            </p>

            <p className="text-base sm:text-lg md:text-xl">
              We realized that too many dreams were being cut short simply
              because importing felt like a gamble.
            </p>

            <p className="text-gold-premium font-extrabold text-lg sm:text-xl md:text-2xl text-center">
              So we decided to change that.
            </p>

            <p className="text-base sm:text-lg md:text-xl">
              We built Ligowin to be the bridge — a reliable, transparent, and
              dependable link between China and Nigeria.
            </p>

            <p className="text-base sm:text-lg md:text-xl">
              With us, you’re not just shipping goods. You’re gaining a partner
              who understands what’s at stake — your business, your money, your
              growth.
            </p>

            <p className="text-base sm:text-lg md:text-xl">
              Today, every package we deliver represents something bigger:
            </p>

            <ul className="list-disc pl-5 sm:pl-8 space-y-2 text-base sm:text-lg">
              <li>A business expanding</li>
              <li>A goal getting closer</li>
              <li>A risk turned into a reward</li>
            </ul>

            <p className="text-center font-extrabold text-lg sm:text-xl md:text-2xl pt-6 text-text-bright">
              And this is just the beginning.
            </p>
          </div>
          <button className="bg-ocean-abyss shadow-lg shadow-gold-glow font-bold font-mono rounded-full p-3 px-5 self-center w-fit text-gold-premium">
            Ship now
          </button>
        </motion.div>
        {/*<div className="md:flex justify-center items-center hidden">
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
            className="lucide lucide-ship-icon lucide-ship h-50 w-50 md:h-70 md:w-70"
          >
            <path d="M12 10.189V14" />
            <path d="M12 2v3" />
            <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
            <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76" />
            <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
          </svg>
        </div>*/}
      </section>
      <section className="w-screen md:h-screen flex flex-col gap-5">
        <h2 className="text-2xl font-extrabold font-mono text-center mt-10 text-gold-premium">
          Our Mission & Vision
        </h2>
        <div className="p-10 max-md:grid max-md:grid-rows-2 flex-1 md:grid-cols-2 md:grid">
          <div className="flex flex-col gap-5 md:m-2 md:p-10 items-center">
            <h3 className="font-bold font-mono text-2xl text-gold-premium">
              Our Mission
            </h3>
            <p className="text-lg font-semibold text-text-soft text-justify">
              At Ligowin, our mission is simple — to make global trade feel
              local, easy, and trustworthy. We understand how stressful it can
              be to source goods from abroad, deal with uncertainty, or worry
              about delivery. That’s why we’ve made it our responsibility to
              handle everything for you — from China straight to your doorstep
              in Nigeria, safely and without complications. <br /> We don’t just
              move goods; we move trust, reliability, and peace of mind with
              every shipment.
            </p>
          </div>
          <div className="flex flex-col gap-5 md:m-2 md:p-10 items-center">
            <h3 className="font-bold font-mono text-2xl text-gold-premium">
              Our Vision
            </h3>
            <p className="font-semibold font-sans text-lg text-text-soft text-justify">
              We envision a Nigeria where anyone — whether a small business
              owner or a growing brand — can access quality products from
              anywhere in the world without barriers. <br className="h-auto" />{" "}
              Ligowin aims to become the most trusted bridge between China and
              Nigeria, known not just for delivering goods, but for delivering
              confidence, growth, and new opportunities to every customer we
              serve.
            </p>
          </div>
        </div>
      </section>
      <section className="w-screen h-screen flex items-center flex-col gap-8">
        <div className="md:grid md:grid-cols-2 w-full h-full max-md:grid max-md:grid-rows-2">
          <div className="flex justify-center items-center">
            <ShippingAnimation />
          </div>
          <div className="flex flex-col justify-center items-center">
            <ol className="list-disc pl-5 flex flex-col gap-5 justify-center items-start w-full h-full">
              <h2 className="text-3xl mb-8 self-center font-extrabold font-mono text-gold-premium">
                Our services
              </h2>
              <li>
                <p className="text-lg font-semibold font-serif text-text-soft">
                  Trusted suppliers
                </p>
              </li>
              <li>
                <p className="text-lg font-semibold font-serif text-text-soft">
                  Fast shipping from China
                </p>
              </li>
              <li>
                <p className="text-lg font-semibold font-serif text-text-soft">
                  Competitive shipping rates
                </p>
              </li>
              <li>
                <p className="text-lg font-semibold font-serif text-text-soft">
                  Quality inspection
                </p>
              </li>
              <li>
                <p className="text-lg font-semibold font-serif text-text-soft">
                  Secure payments
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className=" w-screen h-screen flex flex-col gap-10 md:gap-20 justify-center items-center bg-harbor-charcoal ">
        <h2 className="text-3xl font-extrabold font-mono text-gold-premium">
          Testimonial
        </h2>
        <div className="flex flex-row overflow-x-auto scroll-smooth no-scrollbar items-center gap-10 w-full ">
          {testimonials.map((items, index) => (
            <div
              className="border border-gold-border rounded-3xl min-w-80 md:min-w-100 md:w-full h-fit"
              key={index}
            >
              <Testimonial
                word={items.words}
                image={items.image}
                name={items.name}
                from={items.from}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="w-screen h-fit flex justify-center items-center mt-3 pt-10">
        <Footer />
      </section>
    </div>
  );
};

export default page;
