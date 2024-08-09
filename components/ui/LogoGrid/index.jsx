import Image from "next/image";
import freshbooks from "../../../public/logos/freshbooks.svg";
import sendgrid from "../../../public/logos/sendgrid.svg";
import layers from "../../../public/logos/layers.svg";
import adobe from "../../../public/logos/adobe.svg";
import hnbgu from "../../../public/logos/hnbgu.png";

const logos = [
  {
    src: freshbooks,
    alt: "freshbooks",
  },
  {
    src: sendgrid,
    alt: "sendgrid",
  },
  {
    src: layers,
    alt: "layers",
  },
  {
    src: adobe,
    alt: "adobe",
  },
];

const LogoGrid = () => (
  <div>
    <div className="custom-screen mt-10">
      <h2 className="font-semibold text-sm text-gray-600 text-center">
        DESIGNED BY MECHANICAL ENGINEERING STUDENTS FOR THE WORLD
      </h2>
    </div>
  </div>
);

export default LogoGrid;
