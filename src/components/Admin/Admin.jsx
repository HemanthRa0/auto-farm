import Home from "./Home"
import Info from "./Info"
import Join from "./Join"
import Rising from "./Rising"
import Query from "./Query"
import ContactUs from "./ContactUs"
import { useState } from "react";
export default function Admin() {
  const [component, setComponent] = useState("Home");
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <div className="flex flex-row pt-4 gap-2 overflow-x-hidden">
        <div
          className={`w-1/5 h-screen flex flex-col bg-gray-100 gap-2 ${
            sidebar ? "visible" : "hidden"
          }`}
        >
          <h2 className="border-r-2 pl-4">Auto Farm</h2>
          <div className="border-b-2 border-black" />
          <div className="pl-4 gap-y-2 flex flex-col">
            <div
              onClick={() =>
                setComponent((old) => (old !== "Home" ? "Home" : ""))
              }
              className="flex flex-row items-center gap-2 cursor-pointer"
            >
              <span>Home</span>
            </div>
            <div
              onClick={() =>
                setComponent((old) => (old !== "Join" ? "Join" : ""))
              }
              className="flex flex-row items-center gap-2 cursor-pointer"
            >
              <span>Join</span>
            </div>
            <div
              onClick={() =>
                setComponent((old) => (old !== "Info" ? "Info" : ""))
              }
              className="flex flex-row items-center gap-2 cursor-pointer"
            >
              <span>Info</span>
            </div>
            <div
              onClick={() =>
                setComponent((old) => (old !== "Rising" ? "Rising" : ""))
              }
              className="flex flex-row items-center gap-2 cursor-pointer"
            >
              <span>Rising</span>
            </div>
            <div
              onClick={() =>
                setComponent((old) => (old !== "Query" ? "Query" : ""))
              }
              className="flex flex-row items-center gap-2 cursor-pointer"
            >
              <span>Query</span>
            </div>
            <div
              onClick={() =>
                setComponent((old) => (old !== "ContactUs" ? "ContactUs" : ""))
              }
              className="flex flex-row items-center gap-2 cursor-pointer"
            >
              <span>ContactUs</span>
            </div>
          </div>
        </div>
        <div className={`flex flex-col ${!setSidebar ? "w-full" : "w-4/5"}`}>
          <h2 onClick={() => setSidebar((old) => !old)} >LOL</h2>
          {component === "Home" && <Home />}
          {component === "Join" && <Join />}
          {component === "Info" && <Info />}
          {component === "Rising" && <Rising />}
          {component === "Query" && <Query />}
          {component === "ContactUs" && <ContactUs />}
        </div>
      </div>
    </>
  );
}
