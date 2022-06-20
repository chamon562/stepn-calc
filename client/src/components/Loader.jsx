import React from "react";
import { Bars } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full">
      {/* color should be dynamic to the rarity of shoe */}
      <Bars color="rgb(74 222 128" />
    </div>
  );
};

export default Loader;
