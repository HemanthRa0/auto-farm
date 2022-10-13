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
        <div
          className="block overflow-y-scroll md:ml-10 md:mt-16 md:px-16 p-4 h-[400px] mt-6"
          style={{ direction: "rtl", scrollbarColor: "#819C46 #889A7B" }}
        >
          <div style={{ direction: "ltr" }} className="">
            <h2 className="text-2xl md:text-3xl text-[#E3E3E3] uppercase font-bold">Rising</h2>
            <p className="text-[#CECECE] pt-4 text-sm md:text-lg">
              From Home to Fork Minus the Contamination. Over the last 3-4
              years, there has been a mammoth attitude change towards healthy
              eating and living. With the power of information technology,
              almost everyone is becoming more and more aware of what their
              hard-earned money is buying in the name of nourishment. This
              knowledge not only includes those about healthier meal
              alternatives but also about what the local markets is selling.
              People are searching for sustainable solution to food
              contamination and to address this rising concern at a very
              opportune time is Autofarmstore.com, your one-stop solution for
              Auto farming made simple. Whether you want to set up a humble
              little farm in your backyard or terrace or office balcony, or in
              your restaurant, we at Autofarmstore.com provide you with complete
              kit necessary to enable your home farming endeavours to come to
              successful fruition.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
