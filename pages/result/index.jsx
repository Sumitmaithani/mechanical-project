import React, { useEffect, useState } from "react";
import Navbar from "../../components/ui/Navbar";
import { useRouter } from "next/router";
import gear from "../../public/Spur_gears_animation.gif";
import animation from "../../public/animation.json";
// import spur_gear from "../../public/spur_gear.dxf";
import spur_gear_svg from "../../public/spur_gear_svg.svg";

import tableData from "../../data";
import Image from "next/image";
import Lottie from "lottie-react";
import NavLink from "../../components/ui/NavLink";
import fileDownload from "js-file-download";
import axios from "axios";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  const router = useRouter();
  const data = router.query;

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  }, []);

  const moduleValue =
    (data.pitchDiameter && data.teeth
      ? parseFloat(data.pitchDiameter.replace("mm", "")) / data.teeth
      : 0) || 0;

  const beamStrength =
    moduleValue * (10 * moduleValue) * (data.sut / 3) * tableData[data.teeth];

  return (
    <div>
      <Navbar />
      {showLoading ? (
        <Lottie
          animationData={animation}
          loop
          className="pt-8 pb-12 pl-96 pr-96"
        />
      ) : (
        <div className="pb-12 justify-center">
          <div className="flex justify-center">
            <div>
              <h1 className="heading-h2 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-2">
                Result :
              </h1>
              <div className="p-5 justify-start border border-2 border-blue-600 rounded-2xl pr-28">
                <h4 className="heading-h2 pb-2 text-xl font-semibold tracking-tight first:mt-0 mt-2">
                  Beam strength : {beamStrength.toFixed(2)} N
                </h4>
                <h4 className="heading-h2 pb-2 text-xl font-semibold tracking-tight first:mt-0 mt-2">
                  Module : {moduleValue} mm
                </h4>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-10">
            <Image src={gear} alt="gear" width={500} />
          </div>
          <div className="flex px-64 pt-10 gap-x-12 font-medium text-sm">
            <a href={spur_gear_svg} download={"Spur_gear.dxf"}>
              <button className="text-white bg-blue-600 hover:bg-blue-500 active:bg-gray-900 py-3 px-5 rounded-xl">
                Download DXF
              </button>
            </a>

            <a href={spur_gear_svg} download={"Spur_gear.svg"}>
              <button className="text-gray-700 border hover:bg-gray-50 py-3 px-5 rounded-xl">
                Download SVG
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
