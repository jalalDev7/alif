import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full items-center justify-between rounded-t-lg pl-6 pr-8 py-2 text-white">
      <div className="flex w-[70%] font-bold text-2xl">
        <Image
          src="/alif-logo2.png"
          width={"80"}
          height={"80"}
          alt="logo"
          className="drop-shadow-md"
        />
      </div>
      <div className="flex flex-row gap-4 text-nowrap">
        <Link href="/">Home</Link>
        <Link href="/find">Find</Link>
        <Link href="/give">Give</Link>
        <Link href="/">Help</Link>
        <Link href="/">Join us</Link>
      </div>
    </div>
  );
};

export default Navbar;
