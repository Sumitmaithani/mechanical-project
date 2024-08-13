import React, { useEffect, useState } from "react";
import Navbar from "../../components/ui/Navbar";
import { useRouter } from "next/router";
import gear from "../../public/Spur_gears_animation.gif";
import animation from "../../public/animation.json";

import tableData from "../../data";
import Image from "next/image";
import Lottie from "lottie-react";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  const router = useRouter();
  const data = router.query;

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  }, []);

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
        <>
          {tableData[data.sut] ? (
            <div className="px-64 pt-10">
              <h4 className="heading-h2 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-10">
                Sut : {tableData[data.sut]}
              </h4>
            </div>
          ) : (
            ""
          )}
          <div className="flex justify-center py-32">
            <Image src={gear} alt="gear" width={500} />
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
