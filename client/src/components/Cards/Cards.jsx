import React from "react";
import gstIcon from "../../images/gstIcon.jpg";
const Cards = () => {
  return (
    <div className="w-60 h-60 bg-gradient-to-r from-sky-500 to-green-500 rounded-md shadow-lg shadow-indego-500/40">
      {/* To center a container, use the mx-auto utility: */}
      <div>
        <div className="h-full w-full pt-8 flex justify-center">
          <img className="rounded-full h-20 w-20 " src={gstIcon} alt="" />
        </div>
        <div className="m-8">
          {/* crypto price */}
          <span className="flex justify-center items-center font-bold text-2xl">
            GST (SOL)
          </span>
          {/* crypto name */}
          <span className="flex justify-center items-center text-xl">
            $4.22
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;