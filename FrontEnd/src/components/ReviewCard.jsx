import React from "react";

import ReviewImg from "../assets/reviewImg.png";

const ReviewCard = () => {
  return (
    <div className="review-card flex w-2/5 flex-shrink-0 ">
      <img
        style={{ borderRadius: "50%/20%" }}
        src={ReviewImg}
        alt="pet sitter's photo"
        className="rounded-ss-3xl"
      />
      <div className="flex flex-col p-10 h-96 justify-around ">
        <div className="text-xl font-bold">Pet Sitter name</div>
        <div className="text-sm font-bold text-gray-500">
          Service : Over Night Stay
        </div>
        <div className="font-semibold">
          Pet Sitter was extremely friendly and loving to my bruno. he was
          extremely careful and updated about my dog by himself. i will
          definitely recommed pet sitter if you are from my place and looking
          for a pet sitter
        </div>
        <div></div>
        <img src="" alt="" />
        <div className="font-medium">
          Parents Name <div>X X X X X</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
