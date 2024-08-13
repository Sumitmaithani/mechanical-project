"use client";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Navbar from "../../components/ui/Navbar";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Index() {
  const [data, setData] = useState({});
  const router = useRouter();
  const { gear } = router.query;

  const handleCalculation = (e) => {
    e.preventDefault();

    const queryString = new URLSearchParams(data).toString();
    router.push(`/result?${queryString}`);
  };

  return (
    <>
      <Navbar />

      <>
        <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl pl-72 pr-72 pt-4">
          Gear properties
        </h1>
        <div className="pt-8 pb-12 pl-96 pr-96">
          <form onSubmit={handleCalculation} className="space-y-5 font-medium">
            <div>
              <label>Number of teeth* (N):</label>
              <Input
                aria-label="Number of teeth"
                type="text"
                required
                className="mt-2 focus:border-blue-600"
                onChange={(e) => setData({ ...data, teeth: e.target.value })}
              />
            </div>
            <div>
              <label>Pitch diameter* (D):</label>
              <Input
                aria-label="Pitch diameter"
                type="text"
                required
                className="mt-2 focus:border-blue-600"
                onChange={(e) =>
                  setData({ ...data, pitchDiameter: e.target.value })
                }
              />
            </div>
            <div>
              <label>Diametral pitch* (P):</label>
              <Input
                aria-label="Diametral pitch"
                type="text"
                required
                className="mt-2 focus:border-blue-600"
                onChange={(e) =>
                  setData({ ...data, diametralPitch: e.target.value })
                }
              />
            </div>
            <div>
              <label>Pressure Angle* (PA):</label>
              <Input
                aria-label="Pressure Angle"
                type="text"
                required
                className="mt-2 focus:border-blue-600"
                onChange={(e) =>
                  setData({ ...data, pressureAngle: e.target.value })
                }
              />
            </div>
            {gear === "Spur Gear" ? (
              <div>
                <label>Sut* :</label>
                <Input
                  aria-label="Sut"
                  type="text"
                  required
                  className="mt-2 focus:border-blue-600"
                  onChange={(e) => setData({ ...data, sut: e.target.value })}
                />
              </div>
            ) : (
              ""
            )}

            {gear === "Helical Gear" ? (
              <div>
                <label>Helix Angle* :</label>
                <Input
                  aria-label="helix angle"
                  type="text"
                  required
                  className="mt-2 focus:border-blue-600"
                  onChange={(e) =>
                    setData({ ...data, helixAngle: e.target.value })
                  }
                />
              </div>
            ) : (
              ""
            )}

            <div className="pt-1">
              <Button className="w-full text-white ring-offset-2 ring-blue-600 focus:ring bg-blue-600 hover:bg-blue-500 active:bg-gray-900">
                Calculate
              </Button>
            </div>
          </form>
        </div>
      </>
    </>
  );
}
