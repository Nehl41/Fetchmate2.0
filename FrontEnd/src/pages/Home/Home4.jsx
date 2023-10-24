import React from "react";

import LandingSlider from "../../components/LandingSlider";
import ProductCard from "../../components/ProductCard";

const Home4 = () => {
  return (
    <div className="side-capsule mr-28 side-capsule-shadow pt-6 ">
      <div className="text-center pb-6 text-4xl font-bold text-cyan-400">
        Products
      </div>
      <div className="sm:w-11/12 grid grid-cols-1 grid-rows-10 px-20">
      <div className="flex row-span-1 justify-between font-medium ">
        <div>Category : Food</div>
        <div>Filters</div>
      </div>
      <LandingSlider/>
      </div>
    </div>
  );
};

export default Home4;
