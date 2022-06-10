import React from "react";
import gstIcon from "../../images/gstIcon.jpg";
const Cards = () => {
  return (
    <>
      <div className="flex space-x-28 justify-center mt-10">
        <div className="w-60 h-40  rounded-md shadow-lg shadow-indego-500/40 border">
          {/* To center a container, use the mx-auto utility: */}
          <div>
            <div className="h-full w-full pt-2 flex justify-center">
              <img className="rounded-full h-12 w-12 " src={gstIcon} alt="" />
            </div>
            <div className="m-8">
              {/* crypto price */}
              <span className="flex justify-center items-center font-bold text-2xl">
                Solana
              </span>
              {/* crypto name */}
              <span className="flex justify-center items-center text-xl">
                $4.22 <span className="text-red-500">asdf</span>
              </span>
            </div>
          </div>
        </div>
        <div className="w-60 h-40  rounded-md shadow-lg shadow-indego-500/40 border">
          {/* To center a container, use the mx-auto utility: */}
          <div>
            <div className="h-full w-full pt-2 flex justify-center">
              <img className="rounded-full h-12 w-12 " src={gstIcon} alt="" />
            </div>
            <div className="m-8">
              {/* crypto price */}
              <span className="flex justify-center items-center font-bold text-2xl">
                BINANCE
              </span>
              {/* crypto name */}
              <span className="flex justify-center items-center text-xl">
                $4.22 <span className="text-red-500">asdf</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-28 justify-center mt-10">
        <div className="w-60 h-40  rounded-md shadow-lg shadow-indego-500/40 border">
          {/* To center a container, use the mx-auto utility: */}
          <div>
            <div className="h-full w-full pt-2 flex justify-center">
              <img className="rounded-full h-12 w-12 " src={gstIcon} alt="" />
            </div>
            <div className="m-8">
              {/* crypto price */}
              <span className="flex justify-center items-center font-bold text-2xl">
                GST (SOL)
              </span>
              {/* crypto name */}
              <span className="flex justify-center items-center text-xl">
                $4.22 <span className="text-red-500">asdf</span>
              </span>
            </div>
          </div>
        </div>
        <div className="w-60 h-40  rounded-md shadow-lg shadow-indego-500/40 border">
          {/* To center a container, use the mx-auto utility: */}
          <div>
            <div className="h-full w-full pt-2 flex justify-center">
              <img className="rounded-full h-12 w-12 " src={gstIcon} alt="" />
            </div>
            <div className="m-8">
              {/* crypto price */}
              <span className="flex justify-center items-center font-bold text-2xl">
                GMT
              </span>
              {/* crypto name */}
              <span className="flex justify-center items-center text-xl">
                $1.22{" "}
                <span className="text-green-600 font-bold ml-4">UP 66.2%</span>
              </span>
            </div>
          </div>
        </div>
        <div className="w-60 h-40  rounded-md shadow-lg shadow-indego-500/40 border">
          {/* To center a container, use the mx-auto utility: */}
          <div>
            <div className="h-full w-full pt-2 flex justify-center">
              <img className="rounded-full h-12 w-12 " src={gstIcon} alt="" />
            </div>
            <div className="m-8">
              {/* crypto price */}
              <span className="flex justify-center items-center font-bold text-2xl">
                GST (BNB)
              </span>
              {/* crypto name */}
              <span className="flex justify-center items-center text-xl">
                $1.22{" "}
                <span className="text-green-600 font-bold ml-4">UP 66.2%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
