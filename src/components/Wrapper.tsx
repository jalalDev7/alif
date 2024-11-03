import React, { ReactNode } from "react";

const Wrapper = (props: { children: ReactNode }) => {
  return (
    <div className="flex flex-col mx-auto mt-16 mb-8 w-[95%]  md:w-[80%] h-[80%] backdrop-blur-md bg-white/15 rounded-lg  border border-white/25  shadow-inner shadow-black/15 relative">
      <div className="z-10">{props.children}</div>

      <div className="flex absolute w-full bottom-0 h-[30%] bg-gradient-to-t from-black/25 to-transparent rounded-lg z-0 opacity-70" />
      <div className="flex absolute w-full top-0 h-[30%] bg-gradient-to-b from-black/25 to-transparent rounded-lg z-0  opacity-70" />
      <div className="flex absolute top-0 left-0 h-[100%] w-[20%] bg-gradient-to-r from-black/25 to-transparent rounded-lg z-0  opacity-70" />
      <div className="flex absolute top-0 right-0 h-[100%] w-[20%] bg-gradient-to-l from-black/25 to-transparent rounded-lg z-0  opacity-70" />
    </div>
  );
};

export default Wrapper;
