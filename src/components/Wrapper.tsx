import React, { ReactNode } from "react";

const Wrapper = (props: { children: ReactNode }) => {
  return (
    <div className="flex flex-col mx-auto mt-16 mb-8 w-[90%] md:w-[80%] h-[80%] backdrop-blur-md bg-white/30 rounded-lg shadow-md">
      {props.children}
    </div>
  );
};

export default Wrapper;
