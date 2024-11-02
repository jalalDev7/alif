import Image from "next/image";
import React from "react";

const Background = () => {
  return (
    <div className="flex flex-col w-full min-h-screen fixed z-0 filter brightness-50">
      <Image
        src="/home-background.webp"
        fill
        alt="backround"
        className="object-cover"
      />
    </div>
  );
};

export default Background;
