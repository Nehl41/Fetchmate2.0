import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import ReviewCard from "../../components/ReviewCard";

const Home5 = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around text-3xl font-bold text-cyan-500">
        <div>What Others Are Saying...</div>
        <div
          style={{ width: "10%" }}
          className="flex justify-evenly text-black"
        >
          <span style={{ padding: "3%" }} className="rounded-full bg-cyan-500">
            <AiOutlineLeft className="text-3xl" />
          </span>
          <span style={{ padding: "3%" }} className="rounded-full bg-cyan-500">
            <AiOutlineRight className="text-3xl" />
          </span>
        </div>
      </div>
      <div className="review-container flex justify-evenly">
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default Home5;
