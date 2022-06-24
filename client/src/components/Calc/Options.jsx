import React, { useState, useEffect } from "react";

const Options = ({ rarity }) => {
  console.log(rarity);
  // shoe level
  const [level, setLevel] = useState(0);

  // adding efficiency
  const [efficiency, setEfficiency] = useState(0);
  const [efPoints, setEfPoints] = useState(0);
  const [efTotal, setEfTotal] = useState(0);
  // adding Luck

  const [luck, setLuck] = useState(0);
  const [luckPoints, setLuckPoints] = useState(0);
  const [luckTotal, setLuckTotal] = useState(0);

  const [comfort, setComfort] = useState(0);
  const [comfortPoints, setComfortPoints] = useState(0);
  const [comfortTotal, setComfortTotal] = useState(0);

  const [resilience, setResilience] = useState(0);
  const [resiliencePoints, setResiliencePoints] = useState(0);
  const [resilienceTotal, setResilienceTotal] = useState(0);

  const addEffStats = () => {
    setEfTotal(Number(efficiency) + Number(efPoints));
    setLuckTotal(Number(luck) + Number(luckPoints));
    setComfortTotal(Number(comfort) + Number(comfortPoints));
    setResilienceTotal(Number(resilience) + Number(resiliencePoints));
  };

  useEffect(() => {
    addEffStats();
  }, [
    efficiency,
    efPoints,
    comfort,
    comfortPoints,
    luck,
    luckPoints,
    resilience,
    resiliencePoints,
  ]);

  return (
    <div className="p-10  w-full ">
      <form class="w-full h-full max-w-sm">
        <div className="mb-5 font-medium text-xl">
          <label className=" ">Level</label>
          <input
            type="number"
            placeholder="1-30"
            onChange={(e) => setLevel(e.target.value)}
            className="ml-2 w-10 outline-none "
            mid="1"
            max="30"
            value={level}
          />
          <label className="">
            Points left <span>6</span>{" "}
          </label>
        </div>
        <div className="flex border-b-2 justify-between">
          <h1>Attributes</h1>
          <h1>Base</h1>
          <h1>Points</h1>
          <h1>Total</h1>
        </div>
        <div class="grid grid-cols-1 mb-2 gap-2 ">
          <div class="row-span-1 col-span-2 ">
            <label class="text-gray-500 font-bold mr-16 ">Efficiency</label>
            <input
              class="bg-white appearance-none border-2 mr-6 border-gray-100 rounded w-20 py-1 px-1 text-black-200 leading-tight focus:outline-none focus:bg-white "
              type="number"
              placeholder="1-10"
            />
            <input
              class="bg-white appearance-none border-2 mr-6 border-gray-100 rounded w-20 py-1 px-1 text-black-200 leading-tight focus:outline-none focus:bg-white "
              type="number"
              placeholder="1-10"
            />

            <label> 10</label>
          </div>
          <div class="row-span-1 col-span-2">
            <label class="text-gray-500 font-bold mr-16">Luck</label>
            <input
              class="bg-white appearance-none border-2 mr-6 border-gray-100 rounded w-20 py-1 px-1 text-black-200 leading-tight focus:outline-none focus:bg-white "
              type="number"
              placeholder="1-10"
            />
            <input
              class="bg-white appearance-none border-2 mr-6 border-gray-100 rounded w-20 py-1 px-1 text-black-200 leading-tight focus:outline-none focus:bg-white "
              type="number"
              placeholder="1-10"
            />

            <label> 10</label>
          </div>
          <div class="row-span-1 col-span-2">
            <label class="text-gray-500 font-bold mr-16">Comfort</label>
            <input
              class="bg-white appearance-none border-2 mr-6 border-gray-100 rounded w-20 py-1 px-1 text-black-200 leading-tight focus:outline-none focus:bg-white "
              type="number"
              placeholder="1-10"
            />
            <input
              class="bg-white appearance-none border-2 mr-6 border-gray-100 rounded w-20 py-1 px-1 text-black-200 leading-tight focus:outline-none focus:bg-white "
              type="number"
              placeholder="1-10"
            />

            <label> 10</label>
          </div>
          <div class="row-span-1 col-span-2">
            <label class="text-gray-500 font-bold mr-16">Resilience</label>
            <input
              class="bg-white appearance-none border-2 mr-6 border-gray-100 rounded w-20 py-1 px-1 text-black-200 leading-tight focus:outline-none focus:bg-white "
              type="number"
              placeholder="1-10"
            />
            <input
              class="bg-white appearance-none border-2 mr-6 border-gray-100 rounded w-20 py-1 px-1 text-black-200 leading-tight focus:outline-none focus:bg-white "
              type="number"
              placeholder="1-10"
            />

            <label> 10</label>
          </div>
          
        </div>
      </form>
    </div>
  );
};

export default Options;
