import React, { useEffect, useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import LandingImg1 from "../../assets/landingImg1.png";
import LandingImg2 from "../../assets/landingImg2.png";
import RabbitThumb from "../../assets/rabbit.png";
import BlackDogThumb from "../../assets/blackDog.png";

const Home1 = () => {
  const [thumb,setThumb]=useState({height:0,width:0})

  useEffect(() => {
    const smalThumb = document.getElementById("circularThumb");
    setThumb({height:smalThumb.clientHeight,width:smalThumb.clientWidth})
  }, []);

  return (
    <div className="home-upper grid gap-10 grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid sm:grid-cols-2 sm:px-24 px-10 ">
      <div className="flex flex-col gap-6 justify-evenly">
        <div className="sm:text-4xl text-2xl font-medium">
          We Provide Something Amazing
          <br />
          of two lines
        </div>
        <div className="text-xl pr-3.5">
          Some Captive text here for the engagement purpose lets see what can
          fit in here will ask my team mates about it
        </div>
        <div className="button-wrapper">
          <button
            type="button"
            className="bg-[#FF9F1C] hover:bg-yellow-500 font-medium rounded-lg text-xl px-4 py-2 "
          >
            Find Sitter
          </button>
        </div>
        <div className="flex items-center gap-10">
          <div>
            <div id="circularThumb" className="inline relative">
              
              <img
                className="inline side-capsule-shadow rounded-full"
                style={{
                  border: "5px solid white",
                  outline: "1px solid black",
                }}
                src={RabbitThumb}
                alt=""
              />
            </div>
            <div className="inline  relative ">
              <img
                style={{
                  border: "5px solid white",
                  outline: "1px solid black",
                }}
                className="side-capsule-shadow inline rounded-full"
                src={BlackDogThumb}
                alt=""
              />
            </div>
            <div style={{height:thumb.height,width:thumb.width}} className="text-3xl relative bg-[#CBF3F0] inline">
              <AiOutlinePlus className="inline relative font-bold rounded-full" />
            </div>
          </div>
          <div className="">
            We are a growing <br /> community  of 500+
          </div>
        </div>
      </div>
      <div className="home-upper-right flex justify-evenly sm:gap-10 gap-12">
        <div
          style={{ width: "fit-content", height: "fit-content" }}
          className="capsule-image-wrapper1 side-capsule-shadow flex items-center overflow-hidden"
        >
          <img src={LandingImg1} alt="" className="" />
        </div>
        <div
          style={{ width: "fit-content", height: "fit-content" }}
          className="capsule-image-wrapper2 side-capsule-shadow capsule flex items-center overflow-hidden"
        >
          <img
            style={{ padding: "35% 0% 0% 0%" }}
            src={LandingImg2}
            alt=""
            className=" h-fit w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home1;
