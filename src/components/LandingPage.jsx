import React from "react";
import Typed from "react-typed";

const LandingPage = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[96px] h-[80vh] lg:h-[85vh] mx-auto text-center flex flex-col">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-1xl font-bold py-4">
            Fast, flexiable financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-1xl font-bold md:p-4 p-1"
            strings={["BTB", "BTC", "SASS."]}
            typeSpeed={150}
            backSpeed={160}
            loop
          />
        </div>
        <p className="md:text-2xl sm:text-1xl text-l font-bold text-gray-500">
          Monitor your data analytics to increase revenue fo BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] sm:w-[150px] md:w-[180px] w-[120px] mt-14 md:mt-10 rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
