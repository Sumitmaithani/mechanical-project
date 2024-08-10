import { useState } from "react";
import Navbar from "../components/ui/Navbar";
import Image from "next/image";
import spurgear from "../public/images/Spur_Gear.svg";
import NavLink from "../components/ui/NavLink";

export default function GetStarted() {
  const [selectedGear, setSelectedGear] = useState(null);

  const handleGearSelect = (gear) => {
    setSelectedGear(gear);
  };

  const handleNextClick = () => {
    window.location.href = `/gear-info?gear=${selectedGear}`;
  };

  return (
    <>
      <Navbar />
      <div className="pt-10 pb-12 pl-72 pr-72">
        <div className="custom-screen text-gray-600 w-full">
          <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Choose Gear type
          </h1>

          <div className="flex mt-12 justify-between w-full gap-20">
            <div
              className={`flex flex-col gap-3 text-center border-solid border-2 rounded-2xl py-6 px-5 flex-1 ${
                selectedGear === "Spur Gear"
                  ? "border-blue-600"
                  : "border-grey-500"
              } hover:border-grey-600 ${
                selectedGear !== "Spur Gear" ? "hover:opacity-50" : ""
              } hover:cursor-pointer`}
              onClick={() => handleGearSelect("Spur Gear")}
            >
              <Image src={spurgear} alt="gear" width={200} />
              <h4>Spur Gear</h4>
            </div>
            <div
              className={`flex flex-col gap-3 text-center border-solid border-2 rounded-2xl py-6 px-5 flex-1 ${
                selectedGear === "Helical Gear"
                  ? "border-blue-600"
                  : "border-grey-500"
              } hover:border-grey-600 ${
                selectedGear !== "Helical Gear" ? "hover:opacity-50" : ""
              } hover:cursor-pointer`}
              onClick={() => handleGearSelect("Helical Gear")}
            >
              <Image src={spurgear} alt="gear" width={200} />
              <h4>Helical Gear</h4>
            </div>
            <div
              className={`flex flex-col gap-3 text-center border-solid border-2 rounded-2xl py-6 px-5 flex-1 ${
                selectedGear === "Double Helical Gear"
                  ? "border-blue-600"
                  : "border-grey-500"
              } hover:border-grey-600 ${
                selectedGear !== "Double Helical Gear" ? "hover:opacity-50" : ""
              } hover:cursor-pointer`}
              onClick={() => handleGearSelect("Double Helical Gear")}
            >
              <Image src={spurgear} alt="gear" width={200} />
              <h4>Double Helical Gear</h4>
            </div>
          </div>

          <div className="flex items-end justify-end gap-x-3 font-medium text-sm mt-16">
            <NavLink
              href="/"
              className="text-gray-700 border hover:bg-gray-50"
              scroll={false}
            >
              Cancel
            </NavLink>

            <NavLink
              href="/get-started"
              className={`text-white ${
                selectedGear
                  ? "bg-blue-600 hover:bg-blue-500 active:bg-gray-900"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={
                selectedGear ? handleNextClick : (e) => e.preventDefault()
              }
            >
              Next
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
