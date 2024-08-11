"use client";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Navbar from "../../components/ui/Navbar";
import animation from "../../public/animation.json";
import { useState } from "react";

import Lottie from "lottie-react";

export default function Index() {
  const [showLoading, setShowLoading] = useState(false);

  const handleCalculation = (e) => {
    e.preventDefault();
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  };

  return (
    <>
      <Navbar />

      {showLoading ? (
        <Lottie
          animationData={animation}
          loop
          className="pt-8 pb-12 pl-96 pr-96"
        />
      ) : (
        <>
          <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl pl-72 pr-72 pt-4">
            Gear properties
          </h1>
          <div className="pt-8 pb-12 pl-96 pr-96">
            <form
              onSubmit={handleCalculation}
              className="space-y-5 font-medium"
            >
              <div>
                <label>Number of teeth* (N):</label>
                <Input
                  aria-label="Number of teeth"
                  type="text"
                  required
                  className="mt-2 focus:border-blue-600"
                />
              </div>
              <div>
                <label>Pitch diameter* (D):</label>
                <Input
                  aria-label="Pitch diameter"
                  type="text"
                  required
                  className="mt-2 focus:border-blue-600"
                />
              </div>
              <div>
                <label>Diametral pitch* (P):</label>
                <Input
                  aria-label="Diametral pitch"
                  type="text"
                  required
                  className="mt-2 focus:border-blue-600"
                />
              </div>
              <div>
                <label>Pressure Angle* (PA):</label>
                <Input
                  aria-label="Pressure Angle"
                  type="text"
                  required
                  className="mt-2 focus:border-blue-600"
                />
              </div>

              <div className="pt-1">
                <Button className="w-full text-white ring-offset-2 ring-blue-600 focus:ring bg-blue-600 hover:bg-blue-500 active:bg-gray-900">
                  Calculate
                </Button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
