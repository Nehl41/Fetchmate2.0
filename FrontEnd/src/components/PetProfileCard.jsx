import React from "react";
import { FaDotCircle } from "react-icons/fa";

const PetProfileCard = ({ name, image, breed, gender,description }) => {
  return (
    <div style={{width:"30%"}} className="flex flex-col ">
      <div className="h-52 bg-yellow-50
      translate-y-6 origin-center">
        <img
          src={image}
          alt="Pet's Photo"
          className="h-full w-full object-cover rounded-t-3xl"
        />
      </div>
      <div style={{padding:"10%"}} className="bg-yellow-200 rounded-t-3xl z-10 flex flex-col gap-2">
      <div className="w-full flex flex-col gap-3">
        <div className="text-2xl font-black">{name}</div>
        <div className="flex text-sm text-gray-400 items-center gap-2">
          <div>{gender}</div>
          <FaDotCircle size={10} />
          <div> {breed}</div>
        </div>
      </div>
      <div>{description}</div>
      </div>
    </div>
  );
};

export default PetProfileCard;
