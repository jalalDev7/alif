import Background from "@/components/Background";
import HeroFooter from "@/components/HeroFooter";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Background />
      <Wrapper>
        <div className="flex flex-col w-full ">
          <Navbar active="home" />
          <HeroSection />
          <HeroFooter />
        </div>
      </Wrapper>
    </main>
  );
}
