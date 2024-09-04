"use client";
import React, { useState } from "react";
import Dropdown from "./ui/Dropdown";
import {
  convertLength,
  convertTemperature,
  convertWeight,
} from "@/config/conversionLogic";

const Landing = () => {
  const [tab, setTab] = useState("length");
  const [quantity, setQuantity] = useState(0);
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [result, setResult] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quantity || !fromUnit || !toUnit) {
      alert("Please fill in all fields");
      return;
    }
    let convertedValue: number;
    if (tab === "length")
      convertedValue = convertLength(quantity, fromUnit, toUnit);
    else if (tab === "weight")
      convertedValue = convertWeight(quantity, fromUnit, toUnit);
    else convertedValue = convertTemperature(quantity, fromUnit, toUnit);
    setResult(convertedValue);
    setQuantity(0);
    setFromUnit("");
  };
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col w-[35rem] bg-white p-5 gap-5 rounded-md shadow-black">
        <h1 className="text-center font-bold text-2xl">Unit Converter</h1>
        <div className="flex justify-around items-center my-2">
          <button
            className={`${tab === "length" ? "border-2" : "text-gray-500"} border-b-blue-500 text-lg`}
            onClick={() => setTab("length")}
          >
            Length
          </button>
          <button
            className={`${tab === "weight" ? "border-2" : "text-gray-500"} border-b-blue-500 text-lg`}
            onClick={() => setTab("weight")}
          >
            Weight
          </button>
          <button
            className={`${tab === "temperature" ? "border-2" : "text-gray-500"} border-b-blue-500 text-lg`}
            onClick={() => setTab("temperature")}
          >
            Temperature
          </button>
        </div>

        {result != 0 ? (
          <h1>{result + " " + toUnit[0].toUpperCase() + toUnit.slice(1)}</h1>
        ) : (
          <>
            <form
              action=""
              className="flex flex-col gap-3 "
              onSubmit={handleSubmit}
            >
              <label className="text-xl font-normal" htmlFor="">
                Enter the {tab[0].toUpperCase() + tab.slice(1)} to convert
              </label>
              <input
                className="border border-gray-300 p-2 rounded-md mx-1"
                type="text"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
              <label className="text-xl font-normal" htmlFor="">
                Unit to convert from
              </label>
              <Dropdown
                tab={tab}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setFromUnit(e.target.value)
                }
              />
              <label className="text-xl font-normal" htmlFor="">
                Unit to convert to
              </label>
              <Dropdown
                tab={tab}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setToUnit(e.target.value)
                }
              />
              <button className="p-3 bg-blue-500 text-white font-semibold text-xl mt-1 rounded-md">
                Convert
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Landing;
