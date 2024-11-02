import Background from "@/components/Background";
import FindSection from "@/components/FindSection";
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
          <FindSection />
        </div>
      </Wrapper>
    </main>
  );
};

export default page;
