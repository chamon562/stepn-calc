import React from "react";
import Calc from "../../components/Calc/Calc";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  return (
    <div>
      <div className="border-b pb-20 w-full h-full  bg-gradient-to-r from-sky-500 to-white-500">
        <Cards />
      </div>
      <div className="mt-10">
        <Calc />
      </div>
    </div>
  );
};

export default Home;
