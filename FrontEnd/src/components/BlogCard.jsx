import React, { useState } from "react";
import Nehu from "../assets/nehu.png";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

const BlogCard = () => {
  const [likeState, setLikeState] = useState(false);
  return (
    <div className="community-component-shadow flex flex-col gap-6 py-8 px-6">
      <div style={{ height: "10%" }} className="thumb flex gap-8 items-center">
        <img className="rounded-full w-14" src={Nehu} alt="" />
        <div>
          <div className="font-bold text-base">Nehal Patidar</div>
          <div className="text-sm text-gray-500">pet sitter</div>
        </div>
      </div>
      <div className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, soluta!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
        distinctio voluptatum totam ipsum quasi nesciunt! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Non, suscipit.
      </div>
      <div style={{paddingLeft:"6%"}} className="flex ">
        <div
          style={{ padding: "1%",width:"15%" }}
          onClick={(e) => setLikeState(!likeState)}
          className="border-2 border-gray-400 flex justify-around items-center"
        >
          {likeState ? (
            <AiFillLike size={30} className="text-red-400 like-animation" />
          ) : (
            <AiOutlineLike size={30} className="like-animation" />
          )}
          <div>Like</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
