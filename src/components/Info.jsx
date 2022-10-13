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
          className="block overflow-y-scroll md:ml-10 md:mt-16 md:px-16 h-[400px] mt-6 p-4"
          style={{ direction: "rtl", scrollbarColor: "#819C46 #889A7B" }}
        >
          <div style={{ direction: "ltr" }} className="">
            <h2 className=" text-2xl md:text-3xl text-[#E3E3E3] uppercase">
              It&apos;s a{" "}
              <span className="text-[#8A1B18] font-bold">toxic</span> life
            </h2>
            <p className="text-[#CECECE] pt-4 text-sm md:text-lg">
              Chemical contamination in food is everyday reality. According to a
              recent survey,&nbsp;
              <span className="font-semibold text-[#6FA44A]">
                the quantity of pesticide residue found in the body of a human
                being is directly proportional to the amount of fruits and
                veggies consumed by the same.
              </span>
              <br />
              <br /> This means that for every bite of nourishment that you
              take, you also end up consuming the same amount of chemicals
              thereby immediately negating the nutritional value of food. It has
              been found that 40% of pesticides are organochlorine and 30% are
              organophosphates which is extremely harmful for a child's healthy
              development. Girls have shown a pesticide metabolite rate of 87:5%
              whereas boys have shown pesticide metabolite rate of 74%. Washing
              the bought fruits and vegetables from the Sabzi Mandi can only
              remove 17-39% of the pesticide contamination, while the rest goes
              straight into your body. There is no denying the fact that the
              food culture in our country in on the path of a steady decline.
              With a shift of priorities on high yield in place of high
              nutritional value to meet the demands of the commercial market
              there is little guarantee that pesticide contamination will come
              to an end anytime soon.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
