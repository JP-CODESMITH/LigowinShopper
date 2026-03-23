import React from "react";

const Contacts = () => {
  return (
    <div className="cursor-auto select-none text-white min-h-screen items-center overflow-hidden justify-center bg-[#050505] font-sans no-scrollbar">
      {" "}
      <section className="flex justify-center items-center p-9 w-screen h-screen flex-col gap-5 bg-linear-to-b from-[#050505] to-[#0B1A16]">
        <h1 className="text-3xl font-serif font-extrabold">
          Contact LigowinShopper
        </h1>
        <p className="text-lg text-justify text-gray-300 md:w-[80%]">
          Have questions about importing goods from China? Our team is ready to
          assist you. Contact us for personalized support and guidance on your
          import journey. We’re here to help you navigate the process and ensure
          your products are delivered safely to their doorstep.
        </p>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Contact Us on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Contacts;
