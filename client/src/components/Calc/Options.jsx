import React, { useState, useEffect } from "react";

const Options = ({ rarity }) => {
    console.log(rarity);
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
    <div className="flex  p-10  w-full ">
      <form className="bg-white shadow-md p-5 rounded w-[50%] ">
        <div className="flex border-b-2 justify-between ">
          <h1>Attributes</h1>
          <h1>Base</h1>
          <h1>Points</h1>
          <h1>Total</h1>
        </div>
        <div className=" flex justify-between ">
          <label className=" text-gray-700 text-lg font-bold mb-2">
            Efficiency
          </label>
          <input
            type="float"
            placeholder="1-10"
            onChange={(e) => setEfficiency(e.target.value)}
            className="w-10 outline-none border-b"
            mid="1"
            max="360"
            value={efficiency}
          />
          <input
            type="int"
            placeholder="6"
            onChange={(e) => setEfPoints(e.target.value)}
            className="w-10 outline-none border-b"
            mid="1"
            max="360"
            value={efPoints}
          />
          <h1>{efTotal}</h1>
        </div>
        <div className=" flex justify-between ">
          <label className=" text-gray-700 text-lg font-bold mb-2">Luck</label>
          <input
            type="float"
            placeholder="1-10"
            onChange={(e) => setLuck(e.target.value)}
            className="w-10 outline-none border-b"
            mid="1"
            max="360"
            value={luck}
          />
          <input
            type="int"
            placeholder="6"
            onChange={(e) => setLuckPoints(e.target.value)}
            className="w-10 outline-none border-b"
            mid="1"
            max="360"
            value={luckPoints}
          />
          <h1>{luckTotal}</h1>
        </div>
        <div className=" flex justify-between ">
          <label className=" text-gray-700 text-lg font-bold mb-2">
            Comfort
          </label>
          <input
            type="float"
            placeholder="1-10"
            onChange={(e) => setComfort(e.target.value)}
            className="w-10 outline-none border-b"
            mid="1"
            max="360"
            value={comfort}
          />
          <input
            type="int"
            placeholder="6"
            onChange={(e) => setComfortPoints(e.target.value)}
            className="w-10 outline-none border-b"
            mid="1"
            max="360"
            value={comfortPoints}
          />
          <h1>{comfortTotal}</h1>
        </div>
        <div className=" flex justify-between ">
          <label className=" text-gray-700 text-lg font-bold mb-2">
            Resilience
          </label>
          <input
            type="float"
            placeholder="1-10"
            onChange={(e) => setResilience(e.target.value)}
            className="w-10 outline-none border-b"
            mid="1"
            max="360"
            value={resilience}
          />
          <input
            type="int"
            placeholder="6"
            onChange={(e) => setResiliencePoints(e.target.value)}
            className="w-10 outline-none border-b"
            mid="1"
            max="360"
            value={resiliencePoints}
          />
          <h1>{resilienceTotal}</h1>
        </div>
      </form>
    </div>
  );
};

export default Options;
