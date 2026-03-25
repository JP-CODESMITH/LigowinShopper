import React from "react";

const Contacts = () => {
  return (
    <div className="cursor-auto select-none text-white min-h-screen items-center overflow-hidden justify-center bg-ocean-abyss font-sans no-scrollbar">
      {" "}
      <section className="flex justify-center items-center p-9 w-screen h-screen flex-col gap-5 bg-linear-to-b from-ocean-abyss to-ocean-deep">
        <h1 className="text-3xl font-serif font-extrabold text-gold-premium">
          Contact LigowinShopper
        </h1>
        <p className="text-lg text-justify text-harbor-charcoal md:w-[80%]">
          Have questions about importing goods from China? Our team is ready to
          assist you. Contact us for personalized support and guidance on your
          import journey. We're here to help you navigate the process and ensure
          your products are delivered safely to their doorstep.
        </p>
        <div className="flex flex-col md:flex-row gap-5">
          <a
            href="https://wa.me/+2349160582481"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-trust-green hover:bg-teal-accent text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Us on WhatsApp
          </a>
          <a
            href="https://wa.me/+2349160582481"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-premium hover:bg-ocean-primary text-white text-center font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Us on Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
