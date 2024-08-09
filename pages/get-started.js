import Head from "next/head";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import Navbar from "../components/ui/Navbar";
import Image from "next/image";
import spurgear from "../public/images/Spur_Gear.svg";
import NavLink from "../components/ui/NavLink";

export default function GetStarted() {
  const servicesItems = [
    "Mobile development",
    "UI/UX Design",
    "web development",
    "SEO",
  ];

  return (
    <>
      <Navbar />
      <div className="pt-10 pb-12 pl-72 pr-72">
        <div className="custom-screen text-gray-600 w-full">
          <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Choose Gear type
          </h1>

          <div className="flex mt-12 justify-between w-full gap-20">
            <div className="flex flex-col gap-3 text-center border-solid	border-2 border-grey-500 rounded-2xl py-6 px-5 flex-1">
              <Image src={spurgear} alt="gear" width={200} />
              <h4>Spur Gear</h4>
            </div>
            <div className="flex flex-col gap-3  text-center border-solid	border-2 border-grey-500 rounded-2xl py-6 px-5 flex-1">
              <Image src={spurgear} alt="gear" width={200} />
              <h4>Helical Gear</h4>
            </div>
            <div className="flex flex-col gap-3  text-center border-solid	border-2 border-grey-500 rounded-2xl py-6 px-5 flex-1">
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
              className="text-white bg-blue-600 hover:bg-blue-500 active:bg-gray-900 "
            >
              Next
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
