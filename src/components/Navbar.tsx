import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = (props: { active?: string }) => {
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
      <div className="flex flex-row gap-4 ">
        <Link
          href="/"
          className={`${
            props.active === "home"
              ? "text-green-700 border-b border-green-700"
              : null
          } text-nowrap font-medium hover:border-b hover:border-white transition-all duration-300 ease-in-out`}
        >
          Home
        </Link>
        <Link
          href="/find"
          className={`${
            props.active === "find"
              ? "text-green-700 border-b border-green-700"
              : null
          } text-nowrap font-medium hover:border-b hover:border-white transition-all duration-500 ease-in-out`}
        >
          Find
        </Link>
        <Link
          href="/give"
          className={`${
            props.active === "give"
              ? "text-green-700 border-b border-green-700"
              : null
          } text-nowrap font-medium hover:border-b hover:border-white transition-all duration-500 ease-in-out`}
        >
          Give
        </Link>
        <Link
          href="/"
          className={`${
            props.active === ""
              ? "text-green-700 border-b border-green-700"
              : null
          } text-nowrap font-medium hover:border-b hover:border-white transition-all duration-500 ease-in-out`}
        >
          Help
        </Link>
        <Link
          href="/"
          className={`${
            props.active === ""
              ? "text-green-700 border-b border-green-700"
              : null
          } text-nowrap font-medium hover:border-b hover:border-white transition-all duration-500 ease-in-out`}
        >
          Join us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
