import { useState } from "react";
import Contact from "./Contact";
export default function Intro() {
  const [contact, setContact] = useState(false);
  if (contact) return <Contact back={() => setContact(false)} />;
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#0C1803] shadow-2xl relative w-[70vw]">
        <img src="/IntroImg.png" className="md:w-1/2 aspect-square shrink-0" />
        <button
          className="bg-white py-1 text-base md:text-2xl px-2.5 rounded-[4px] font-bold text-[#0C1803] absolute -top-12 right-0"
          onClick={() => setContact(true)}
        >
          Contact
        </button>
        <div className="block md:m-20 p-4 ">
          <h2 className=" text-2xl md:text-3xl text-[#E3E3E3]">
            <span className="font-bold">Join </span>the movement
          </h2>
          <p className="text-[#CECECE] pt-4 text-sm md:text-lg">
            Urban Farming:{" "}
            <span className="font-bold">Join the Auto farm Movement.</span>
            <br /> If you are in two-minds about the idea of Auto Farming, Here
            are some reasons that will get you to order your first kit online-
            <br />
            <br />
            ANIMATION
          </p>
        </div>
      </div>
    </>
  );
}
