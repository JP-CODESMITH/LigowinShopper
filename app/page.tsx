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
          className="max-w-7xl px-4 py-8 mx-auto text-center lg:py-4 lg:px-2"
          
        >
          <dl className="grid max-w-3xl gap-8 mx-auto sm:grid-cols-3">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-text-bright">
                73M+
              </dt>
              <dd className="font-light text-text-muted">developers</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-text-bright">
                1B+
              </dt>
              <dd className="font-light text-text-muted">contributors</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-text-bright">
                4M+
              </dt>
              <dd className="font-light text-text-muted">organizations</dd>
            </div>
          </dl>
        </motion.div>
      </section>
      <section className="w-screen my-10 p-5 flex flex-col bg-port-slate">
        <h1 className="text-center text-3xl font-extrabold text-text-bright">
          How it Works
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
                <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-harbor-charcoal ring-8 ring-ocean-abyss">
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
                <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-harbor-charcoal ring-8 ring-ocean-abyss">
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
        <p className="text-2xl md:text-4xl text-text-bright text-center font-extrabold mb-10">
          WHY CHOOSE LIGOWIN SHOPPER?
        </p>
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
          <h2 className="mb-8 text-2xl tracking-tight font-extrabold text-text-bright">
            Frequently asked questions
          </h2>
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
