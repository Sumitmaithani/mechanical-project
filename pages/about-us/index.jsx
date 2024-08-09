import Image from "next/image";
import team from "../../public/images/teams.jpeg";
import NavLink from "../../components/ui/NavLink";
import user1 from "../../public/images/dummy_user.png";
import instagram from "../../public/icons/instagram.png";
import Link from "next/link";
import Navbar from "../../components/ui/Navbar";

const teamData = [
  {
    name: "Sumit Maithani",
    image: user1,
    instagram: "https://www.instagram.com/sumitmaithani/",
  },
  {
    name: "Sumit Maithani",
    image: user1,
    instagram: "https://www.instagram.com/sumitmaithani/",
  },
  {
    name: "Sumit Maithani",
    image: user1,
    instagram: "https://www.instagram.com/sumitmaithani/",
  },
  {
    name: "Sumit Maithani",
    image: user1,
    instagram: "https://www.instagram.com/sumitmaithani/",
  },
  {
    name: "Sumit Maithani",
    image: user1,
    instagram: "https://www.instagram.com/sumitmaithani/",
  },
];

const index = () => {
  return (
    <>
      <Navbar />
      <div className="box-border mx-auto w-[1100px] max-2xl:w-[1200px] max-xl:w-[920px] max-lg:w-[680px] max-md:w-[440px] max-sm:w-[340px] mt-12 mb-24 max-w-3xl">
        <h1 className="heading-h1 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Gear Team
        </h1>
        <div className="paragraph-text mt-6 text-center px-44">
          <p className="">
            Empowering Engineers with User-Friendly Tools for Accurate Gear
            Design Everywhere
          </p>
        </div>
        <Image src={team} alt="team image" className="rounded-2xl	my-10" />
        <div className="flex justify-center gap-4 mt-15">
          <div className="w-3/6">
            <h4 className="heading-h2 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-10 mb-5">
              Need Assistance? We're Here to Help!
            </h4>
            <NavLink
              href="/get-started"
              className="text-white bg-blue-600 hover:bg-blue-500 active:bg-gray-900 mt-3"
            >
              Contact Our Team
            </NavLink>
          </div>
          <div className="w-3/6">
            <p className="paragraph-text leading-7 text-justify">
              Our team of experienced engineers is here to support you. Whether
              you need help with the tool, troubleshooting, or have feedback,
              we're ready to assist. Your success with Gear Generator is our
              priority. Reach out anytime!
            </p>
          </div>
        </div>
        <h1 className="heading-h1 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mt-20">
          Our Team
        </h1>
        <div className="flex flex-1 w-full my-10 gap-3">
          {teamData.map((team, index) => {
            return (
              <div
                className="w-full justify-center items-center	 flex flex-col"
                key={index}
              >
                <Image
                  src={team.image}
                  alt="team-member"
                  className="rounded-full justify-center items-center	 flex flex-col"
                  width={100}
                />
                <h5 className="text-center my-2">{team.name}</h5>
                <div className="justify-center align-center flex">
                  <Link href={team.instagram} target="_blank">
                    <Image src={instagram} alt="instagram" width={20} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default index;
