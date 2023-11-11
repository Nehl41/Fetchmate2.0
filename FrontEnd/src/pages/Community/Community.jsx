import React, { useRef } from "react";

import Nehu from "../../assets/nehu.png";
import BlogCard from "../../components/BlogCard";
import PetSitterCard from "../../components/PetSitterCard";

const Community = () => {
  const contentRef = useRef();

  const submitBlog = () => {
    const content = contentRef.current.value;
    console.log(content);
  };
  return (
    <div className="grid grid-cols-4 gap-2  w-screen h-screen">
      <div   
        className="col-span-1 px-6 py-6 flex flex-col items-center community-component-shadow"
      >
        <div className="rounded-full w-full flex flex-col items-center justify-around h-1/3">
          <img
            style={{ width: "25%" }}
            className=" rounded-full"
            src={Nehu}
            alt=""
          />{" "}
          <div className="text-center font-bold pt-3">Nehal Patidar</div>
          <button
            style={{ padding: "2%" }}
            className="border-3 text-cyan-500 border-cyan-500"
          >
            Book Service
          </button>
          <div
            style={{ height: "1%", borderWidth: "1px" }}
            className="w-full mt-4 bg-gray-700 border-gray-700"
          ></div>
        </div>

        <div className="w-full h-4/6">
          <div style={{ height: "10%" }} className="w-full">
            Event
          </div>
          <div style={{ height: "90%" }} className="pt-24 text-gray-500">
            You will be notified about upcoming community events here
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col">
        <div
          style={{ height: "10%" }}
          className="thumb flex items-center justify-around"
        >
          <img className="rounded-full w-16" src={Nehu} alt="" />
          <input
            ref={contentRef}
            style={{ borderRadius: "4%/50%" }}
            className="w-3/4 h-10 px-4 rounded-lg border-2"
            placeholder="Let The Thought Out!"
          />
        </div>
        <div className="mt-6 mx-4">
          <BlogCard />
        </div>
      </div>
      <div className="col-span-1 flex gap-4 flex-col pt-2">
        <div className="text-center text-xl font-bold">Pet Sitters Of The Week</div>
          <div>
            <PetSitterCard/>
          </div>
      </div>
    </div>
  );
};

export default Community;
