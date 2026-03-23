import Hero from "./components/hero";
import LandingShowCase from "./components/landingShowCase";
import Footers from "./components/footers";
import { JSX } from "react";
import Testimonial from "./components/testimonial";
import Reasons from "./components/reasons";
import Faq from "./components/faq";
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
    <div className="cursor-auto select-none items-center overflow-hidden justify-center bg-[#050505] font-sans">
      <Hero />
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl px-4 py-8 mx-auto text-center lg:py-4 lg:px-2">
          <dl className="grid max-w-3xl gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                developers
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                contributors
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                organizations
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="w-screen h-screen p-5 flex flex-col bg-[#0f0f0f]">
        <h1 className="text-center text-3xl font-extrabold">How it Works</h1>
        <div className="md:flex justify-center items-center w-screen flex-1 flex-row-reverse">
          <ol className="relative border-s border-gray-200 dark:border-gray-700 md:ml-10 md:w-[50%]">
            <li className="mb-10 ms-6">
              <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900">
                <svg
                  className="h-3 w-3 text-primary-800 dark:text-primary-300"
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
              <span className="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
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
              <h3 className="mb-0.5 mt-2 text-lg font-semibold text-primary-800 dark:text-primary-300">
                Place your order
              </h3>
              <p className="text-base font-normal text-primary-700 dark:text-primary-300">
                Choose product from our website or contact us on WhatsApp
              </p>
            </li>

            <li className="mb-10 ms-6">
              <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 ring-8 ringWhite dark:bg-gray-800 dark:ring-gray-900">
                <svg
                  className="h-3 w-3 text-gray-500 dark:text-gray-400"
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
              <h3 className="mb-1.5 text-lg font-semibold leading-none text-gray-900 dark:text-white">
                we procure from china{" "}
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                We source and verify your products directly from trusted
                suppliers.
              </p>
            </li>

            <li className="mb-10 ms-6">
              <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-800 dark:ring-gray-900">
                <svg
                  className="h-3 w-3 text-gray-500 dark:text-gray-400"
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
              <h3 className="mb-1.5 text-lg font-semibold leading-none text-gray-900 dark:text-white">
                Door step delivery in Nigeria
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                We ship safely and deliver to your location anywhere in Nigeria.
              </p>
            </li>
          </ol>
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
        <p className="text-2xl md:text-4xl text-white text-center font-extrabold mb-10">
          WHY CHOOSE LIGOWIN SHOPPER?
        </p>
        <Reasons />
      </section>

      <section className="w-screen no-scrollbar h-screen flex justify-center items-center flex-col gap-10 bg-[#111111]">
        <h2 className="text-center text-3xl text-white font-extrabold">
          TESTINONIALS
        </h2>
        <div className="flex flex-row overflow-x-auto scroll-smooth no-scrollbar items-center gap-20 w-screen">
          {testimonials.map((items, index) => (
            <div
              className="border border-white rounded-3xl min-w-80 md:min-w-100 h-fit"
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
      <section className="w-screen h-auto">
        <div className="py-8 px-4 mx-auto max-w-7xl sm:py-16 lg:px-6 flex items-center flex-col w-full h-full gap-4 md:gap-8">
          <h2 className="mb-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
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
