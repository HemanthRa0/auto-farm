import { useEffect, useState } from "react";
export default function Enquire({ back }) {
  const [formData, setformData] = useState({});
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <>
      <div className="flex flex-col bg-[#0C1803] shadow-2xl relative max-w-[70vw] aspect-square min-w-[30vw] p-4 md:p-12">
        {/* <button className="bg-white text-black py-2.5 px-4" onClick={back}>Back</button> */}
        <h3 className="underline text-white font-bold">Get in touch with us</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formData);
            back();
            return false;
          }}
          action="#"
          className="flex-col flex"
        >
          <input
            name="email"
            className="bg-transparent border-[#B5B5B5] text-[#B5B5B5] border-2 rounded-sm px-2 my-1"
            value={formData.email}
            placeholder="Email"
            onChange={(e) =>
              setformData((old) => ({ ...old, email: e.target.value }))
            }
          />
          <input
            name="phone"
            className="bg-transparent border-[#B5B5B5] text-[#B5B5B5] border-2 rounded-sm px-2 my-1"
            value={formData.phone}
            placeholder="Phone"
            onChange={(e) =>
              setformData((old) => ({ ...old, phone: e.target.value }))
            }
          />
          <textarea
            name="query"
            rows={4}
            className="bg-transparent border-[#B5B5B5] text-[#B5B5B5] border-2 rounded-sm px-2 my-1"
            value={formData.query}
            placeholder="Your Query"
            onChange={(e) =>
              setformData((old) => ({ ...old, query: e.target.value }))
            }
          />
          <button
            type="submit"
            className="bg-white font-bold px-3 py-1 rounded-sm w-min my-20"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
