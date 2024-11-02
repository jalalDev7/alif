import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full p-4 md:p-8 gap-4 md:gap-8 text-white">
      <div className="flex w-fit items-center justify-center min-h-96 ">
        <Image
          src="/pet-hero.jpg"
          width={1000}
          height={400}
          alt="hero-image"
          className="rounded-lg object-cover drop-shadow-lg"
        />
      </div>
      <div className="flex flex-col w-full justify-center mt-4 md:mt-0">
        <h1 className="text-5xl md:text-8xl text-center md:text-left font-bold drop-shadow-lg leading-normal ">
          Bring{" "}
          <span className="bg-green-700 rounded-lg p-2 drop-shadow-lg">
            happiness
          </span>{" "}
          to your pets.
        </h1>
        <p className="text-sm md:text-lg font-medium mt-4 pr-2 text-pretty drop-shadow-lg">
          Welcome to our pet-friendly platform, where finding a new pet or
          giving one a loving home has never been easier. Our website connects
          pet lovers and owners, helping users find solutions to common
          pet-related issues and access expert advice on all aspects of pet
          care. Whether you’re searching for a furry friend or need tips on
          training and health, we’re here to support your pet journey every step
          of the way
        </p>
        <div className="flex flex-row w-full items-center justify-center md:justify-end  mt-8 gap-4">
          <Link
            href="/"
            className="flex text-md md:text-xl font-medium border border-white rounded-lg px-3 md:px-6 py-2 shadow-md"
          >
            <span className="drop-shadow-lg">More about us</span>
          </Link>
          <Link
            href="/"
            className="flex bg-white/10 backdrop-blur-sm text-md md:text-xl font-semibold border border-white rounded-lg px-3 md:px-6 py-2 shadow-md"
          >
            <span className="drop-shadow-lg">Join us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
