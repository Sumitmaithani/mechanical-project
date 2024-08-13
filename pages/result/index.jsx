import React from "react";
import Navbar from "../../components/ui/Navbar";
import { useRouter } from "next/router";
import gear from "../../public/Spur_gears_animation.gif";

import { tableData } from "./data";
import Image from "next/image";

const Index = () => {
  const router = useRouter();
  const data = router.query;

  return (
    <div>
      <Navbar />
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
    </div>
  );
};

export default Index;
