import React, { useState } from "react";

const Options = ({ rarity }) => {
  //   console.log(rarity);
  const [efficiency, setEfficiency] = useState(0);
  const [luck, setLuck] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [resilience, setResilience] = useState(0);

  return (
    <div className="flex justify-around  w-full ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2">
            Efficiency
          </label>
          <input
            type="number"
            placeholder="1-10"
            onChange={(e) => setEfficiency(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Luck
          </label>
          <input
            type="number"
            placeholder="1-10"
            onChange={(e) => setLuck(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Comfort
          </label>
          <input
            type="number"
            placeholder="1-10"
            onChange={(e) => setComfort(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Resilience
          </label>
          <input
            type="number"
            placeholder="1-10"
            onChange={(e) => setResilience(e.target.value)}
          />
        </div>
      </form>
      <div className="flex flex-col justify-center text-2xl items-center">
        <h1>Efficency {efficiency}</h1>
        <h1>Luck {luck}</h1>
        <h1>Comfort {comfort}</h1>
        <h1>Resilience {resilience}</h1>
      </div>
    </div>
  );
};

export default Options;
