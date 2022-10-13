import { useState } from "react";
import Enquire from "./Enquire";
export default function Intro() {
  const [enq, setEnq] = useState(false);
  if (enq) return <Enquire back={() => setEnq(false)} />;
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#0C1803] shadow-2xl relative w-[70vw]">
        <img src="/IntroImg.png" className="md:w-1/2 aspect-square" />
        <div className="block md:hidden text-justify m-6 my-16">
          <h2 className="uppercase text-2xl text-[#4DB002] font-bold">
            Home
            <span className="text-lg uppercase text-white font-bold pl-1">
              To Table
            </span>
          </h2>
          <h3 className="text-white font-bold text-lg uppercase">
            Pure
            <span className="text-2xl uppercase text-[#4DB002] font-bold pl-1">
              freshness
            </span>
          </h3>
          <p className="mt-6 md:mt-12 mb-2 text-white text-xs md:text-sm">
            Want to know more? <span className="hidden md:block">Get in touch with us</span>
          </p>
          <button
            className="bg-white py-1 text-lg md:text-2xl px-2.5 rounded-[4px] font-bold text-[#0C1803]"
            onClick={() => setEnq(true)}
          >
            Enquire
          </button>
        </div>
        <div className="hidden md:block text-justify m-20">
          <h2 className="uppercase text-7xl text-white font-bold">Home</h2>
          <h3 className="text-[2.8rem] uppercase text-[#BEBEBE] font-bold">
            To Table
          </h3>
          <h3 className="text-[1.55rem] uppercase text-[#ADE535] font-bold">
            pure freshness
          </h3>
          <p className="mt-12 mb-2 text-white text-sm">
            Want to know more? Get in touch with us
          </p>
          <button
            className="bg-white py-1 text-2xl px-2.5 rounded-[4px] font-bold text-[#0C1803]"
            onClick={() => setEnq(true)}
          >
            Enquire
          </button>
        </div>
      </div>
    </>
  );
}
