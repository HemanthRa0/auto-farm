import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { ref, get, child } from "firebase/database";
export default function ContactUs() {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    get(child(ref(db), "ContactUs/"))
      .then((snapshot) => snapshot.val())
      .then((res) => setData(res));
  }, []);
  if (data !== undefined)
    return (
      <>
        <div className="flex flex-row bg-[#0C1803] shadow-2xl relative justify-between w-[70vw]">
          <div className="block text-justify my-2 mx-5">
            <h3 className="uppercase ml-20 text-white text-4xl font-black my-10">
              Contact
            </h3>
            <h4 className="text-[#CBCBCB] text-xl pl-2">Address</h4>
            <hr className="text-[#CBCBCB] text-xl" />
            <div>
              <p className="whitespace-pre-line pt-2 text-white font-bold pl-2 -tracking-[0.022em]">
                {data.Address.replaceAll("\\n",'\n')}
              </p>
            </div>
            <h4 className="text-[#CBCBCB] text-xl pl-2 pt-4">Contact</h4>
            <hr className="text-[#CBCBCB] text-xl" />
            <div>
              <p className="whitespace-pre-line pt-2 text-white font-bold pl-2 -tracking-[0.022em]">
                Sales: {data.Tel} <br /> {data.Email} <br />
                Information: {data.Information}
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <img src="/ContactUs.png" className="" />
          </div>
        </div>
      </>
    );
}
