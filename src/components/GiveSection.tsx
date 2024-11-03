import React from "react";
import GiveForm from "./GiveForm";

const GiveSection = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center p-4 md:p-8 gap-4 md:gap-8 text-white">
      <div className="flex w-full items-center justify-center ">
        <h1 className="text-2xl md:text-5xl text-center  font-bold drop-shadow-lg leading-normal ">
          Find a Caring{" "}
          <span className="bg-green-700 rounded-lg p-2 drop-shadow-lg">
            New Home
          </span>{" "}
          for Your Pet
        </h1>
      </div>
      <GiveForm />
    </div>
  );
};

export default GiveSection;
