import React, { useState } from "react";
import Nehu from "../assets/nehu.png";
import { AiOutlineLike, AiFillLike,AiOutlineShareAlt } from "react-icons/ai";

const BlogCard = () => {
  const [likeState, setLikeState] = useState(false);
  const [shareState,setShareState]=useState(0)
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
      <div className="flex gap-6">
        <div
          style={{ padding: "0.5%",width:"15%" }}
          onClick={(e) => setLikeState(!likeState)}
          className="border-2 border-gray-400 flex gap-2 justify-center items-center"
        >
          {likeState ? (
            <AiFillLike size={25} className="text-red-400 like-animation" />
          ) : (
            <AiOutlineLike size={25} className="like-animation" />
          )}
          <div className="text-base">Like</div>
        </div>
        <div
        onClick={()=>setShareState(1)}
        onAnimationEnd={()=>setShareState(0)}
        sharestate={shareState}
          style={{ padding: "0.5%",width:"15%" }}
          className="border-2 border-gray-400 flex gap-2 justify-center items-center">
          <AiOutlineShareAlt onClick={(e)=>{e.target}} className={shareState?"like-animation":""} size={25}/>
          <div className="text-base">Share</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
