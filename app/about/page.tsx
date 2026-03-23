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
    <div className="cursor-auto select-none text-white min-h-screen items-center overflow-hidden justify-center bg-[#050505] font-sans no-scrollbar ">
      <section className="flex justify-center items-center p-9 w-screen h-screen flex-col gap-5 bg-linear-to-b from-[#050505] to-[#0B1A16]">
        <motion.h1
          className="text-3xl font-serif font-extrabold"
          initial={{ opacity: -5, y: -5 }}
          whileInView={{ y: 1, opacity: 1 }}
          viewport={{ once: false, amount: "some" }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
          layout
        >
          About LigowinShopper
        </motion.h1>
        <motion.p
          className="text-lg text-justify text-gray-300"
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
      <section className="bg-[#0B1A16] p-9 w-screen flex h-screen justify-center items-center md:grid md:grid-cols-2 ">
        <motion.div
          className="flex flex-col gap-5 justify-center items-center mb-10"
          initial={{ opacity: 0, y: -5 }} // Reduced x distance for mobile
          whileInView={{ opacity: 1, y: 0 }}
          // 'some' ensures it triggers easier on small screens
          viewport={{ once: false, amount: "some" }}
          // Reduced delay so it feels responsive
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          layout
        >
          <h2 className="text-2xl font-extrabold font-mono">Our Story</h2>
          <p className="text-lg text-gray-400 text-justify font-bold">
            LigowinShopper was founded to make importing goods from China easier
            for Nigerian businesses and individuals. Many buyers struggled with
            unreliable shipping and complicated procurement processes, so we
            created a service that handles everything from purchase to delivery.
          </p>
          <button className="bg-black shadow-lg shadow-amber-300 bg-blend-saturation font-bold font-mono rounded-full p-3 px-5 self-center w-fit">
            Ship now
          </button>
        </motion.div>
        <div className="md:flex justify-center items-center hidden">
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
        </div>
      </section>
      <section className="w-screen h-screen flex flex-col gap-5">
        <h2 className="text-2xl font-extrabold font-mono text-center mt-10">
          Our Mission & Vision
        </h2>
        <div className="p-10 max-md:grid max-md:grid-rows-2 flex-1 md:grid-cols-2 md:grid">
          <div className="flex flex-col justify-center gap-5 items-center">
            <h3 className="font-bold font-mono text-2xl">Mission</h3>
            <p className="text-lg font-semibold">
              To make international shopping and shipping simple, affordable,
              and reliable for Nigerians.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-5 items-center">
            <h3 className="font-bold font-mono text-2xl">Vision</h3>
            <p className="font-semibold font-sans text-lg">
              To become the most trusted China–Africa import and logistics
              platform.
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
              <h2 className="text-3xl mb-8 self-center font-extrabold font-mono">
                Our services
              </h2>
              <li>
                <p className="text-lg font-semibold font-serif">
                  Trusted suppliers
                </p>
              </li>
              <li>
                <p className="text-lg font-semibold font-serif">
                  Fast shipping from China
                </p>
              </li>
              <li>
                <p className="text-lg font-semibold font-serif">
                  Competitive shipping rates
                </p>
              </li>
              <li>
                <p className="text-lg font-semibold font-serif">
                  Quality inspection
                </p>
              </li>
              <li>
                <p className="text-lg font-semibold font-serif">
                  Secure payments
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className=" w-screen h-screen flex flex-col gap-10 md:gap-20 justify-center items-center bg-charcoal-surface ">
        <h2 className="text-3xl font-extrabold font-mono  ">Testimonial</h2>
        <div className="flex flex-row overflow-x-auto scroll-smooth no-scrollbar items-center gap-10 w-full ">
          {testimonials.map((items, index) => (
            <div
              className="border border-white rounded-3xl min-w-80 md:min-w-100 md:w-full h-fit"
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
