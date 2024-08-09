import NavLink from "../NavLink";

const Hero = () => (
  <section>
    <div className="custom-screen py-28 text-gray-600">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
          Effortlessly Generate Accurate Gears for Every Engineering Project
        </h1>
        <p className="max-w-xl mx-auto">
          Design spur, helical, and double helical gears with the Gear
          Generator, made for engineers, by engineers.
        </p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          <NavLink
            href="/get-started"
            className="text-white bg-blue-600 hover:bg-blue-500 active:bg-gray-900 "
          >
            Start building
          </NavLink>
          <NavLink
            href="/idea"
            className="text-gray-700 border hover:bg-gray-50"
            scroll={false}
          >
            Learn more
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
