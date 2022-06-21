import React, { useState } from "react";

const Options = ({ rarity }) => {
  //   console.log(rarity);
  const [efficiency, setEfficiency] = useState(0);
  const [luck, setLuck] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [resilience, setResilience] = useState(0);

  return (
    <div className="flex  p-10  w-full ">
      <form className="bg-white shadow-md p-5 rounded w-[50%] ">
        <div className="flex border-b-2 justify-between ">
          <h1>Attributes</h1>
          <h1>Base</h1>
          <h1>Total</h1>
        </div>
        <div className=" flex justify-between ">
          <label className=" text-gray-700 text-lg font-bold mb-2">
            Efficiency
          </label>
          <input
            type="number"
            placeholder="1-10"
            onChange={(e) => setEfficiency(e.target.value)}
            className="w-20 outline-none border-b"
            mid="1"
            max="360"
            value={efficiency}
            
          />
          <h1>Efficency {efficiency}</h1>
        </div>
        <div className="mb-4 flex ">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Luck
          </label>
          <input
            type="number"
            placeholder="1-10"
            onChange={(e) => setLuck(e.target.value)}
          />
          <h1>Luck {luck}</h1>
        </div>
        <div className="mb-4 flex">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Comfort
          </label>
          <input
            type="number"
            placeholder="1-10"
            onChange={(e) => setComfort(e.target.value)}
          />
          <h1>Comfort {comfort}</h1>
        </div>
        <div className="mb-4 flex">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Resilience
          </label>
          <input
            type="number"
            placeholder="1-10"
            onChange={(e) => setResilience(e.target.value)}
          />
          <h1>Resilience {resilience}</h1>
        </div>
      </form>
    </div>
  );
};

export default Options;
