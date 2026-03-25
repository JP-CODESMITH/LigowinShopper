import React from "react";
import Testimonial from "../components/testimonial";
import Footer from "../components/footers";
import ShippingAnimation from "../components/service";
import * as motion from "motion/react-client";
const testimonials = [
  {
    name: "Micheal Gough",
    words:
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from loginscreen to complex dashboard. Perfect choice for your next SaaS application.",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    from: "CEO at Google",
  },
  {
    name: "Micheal Gough",
    words:
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from loginscreen to complex dashboard. Perfect choice for your next SaaS application.",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    from: "CEO at Google",
  },
  {
    name: "Micheal Gough",
    words:
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from loginscreen to complex dashboard. Perfect choice for your next SaaS application.",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    from: "CEO at Google",
  },
  {
    name: "Micheal Gough",
    words:
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from loginscreen to complex dashboard. Perfect choice for your next SaaS application.",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    from: "CEO at Google",
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
          <div className="text-lg text-text-muted font-bold leading-relaxed space-y-1">
            <p className="text-justify">
              It started with frustration — the kind that many Nigerians know
              too well. You find the perfect product online or through a
              supplier in China. The price is good, the opportunity is there,
              and you’re ready to grow your business… but then reality sets in:
            </p>

            <ul className="list-disc pl-10 space-y-1">
              <li>Who do you trust?</li>
              <li>Will the goods arrive?</li>
              <li>
                What about customs, delays, hidden charges — or worse, losing
                your money entirely?
              </li>
            </ul>

            <p className="text-justify">
              For many people, that’s where the journey ends — not because the
              opportunity isn’t real, but because the process is too risky, too
              confusing, and too stressful.
            </p>

            <p className="text-justify">We’ve been there.</p>

            <p className="text-justify">
              Ligowin was born out of that exact struggle — the late nights
              worrying about shipments, the uncertainty of dealing with overseas
              suppliers, and the disappointment when things didn’t go as
              planned. We realized that too many dreams were being cut short
              simply because importing felt like a gamble.
            </p>

            <p className="text-justify font-extrabold">
              So we decided to change that.
            </p>

            <p className="text-justify">
              We built Ligowin to be the bridge — a reliable, transparent, and
              dependable link between China and Nigeria. A service where you
              don’t have to second-guess every step or fear losing your
              investment.
            </p>

            <p className="text-justify">
              With us, you’re not just shipping goods. You’re gaining a partner
              who understands what’s at stake — your business, your money, your
              growth.
            </p>

            <p className="text-justify">
              Today, every package we deliver represents something bigger:
            </p>

            <ul className="list-disc pl-10 space-y-1">
              <li>A business expanding</li>
              <li>A goal getting closer</li>
              <li>A risk turned into a reward</li>
            </ul>
            <br />

            <p className="text-center font-extrabold pt-4">
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
