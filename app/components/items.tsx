import Image from "next/image";
import React from "react";
import { AddOutline } from "react-ionicons";
import Logo from "../../public/images/ChatGPT Image Jan 9, 2026, 10_54_57 PM.png";

export const Items = () => {
  return (
    <div className="overeflow-hidden w-[181px] m-1">
      <div className="w-50 h-50 overflow-hidden relative items-center justify-center">
        <div className="w-50 h-50 bg-[#0f0f0f] overflow-hidden flex items-center justify-center  border-1 rounded-2xl border-amber-400">
          <Image
            src={Logo}
            alt={""}
            width={130}
            height={130}
            className="w-full h-full"
          />
        </div>
        <div className="rounded-full bg-[#dcae32] w-10 h-10 flex items-center justify-center z-10 absolute bottom-1 right-1 ">
          <AddOutline
            color={"#00000"}
            title={"add to cart"}
            height="30px"
            width="30px"
          />
        </div>
      </div>
      <p className="font-bold font-mono text-2xl">#50,000</p>
      <p className="font-serif text-sm ">
        Beckham Hotel Collection Bed Pillows Standard/Que…
      </p>
      <a href="#" className="text-blue-500 hover:underline">
        buy now
      </a>
    </div>
  );
};
