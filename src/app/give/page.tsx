import Background from "@/components/Background";
import GiveSection from "@/components/GiveSection";
import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Background />
      <Wrapper>
        <div className="flex flex-col w-full ">
          <Navbar />
          <GiveSection />
        </div>
      </Wrapper>
    </main>
  );
};

export default page;
