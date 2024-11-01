import { cn } from "@/lib/utils";
import React from "react";
import Marquee from "./ui/marquee";

const HeroFooter = () => {
  const reviews = [
    {
      name: "Luna",
      username: "@luna_loves_cats",
      body: "This platform helped me find a new home for a stray cat I rescued. I'm so grateful!",
      img: "https://avatar.vercel.sh/luna",
      type: "review",
    },
    {
      name: "Tom",
      username: "@tom_dogdad",
      body: "Im having trouble getting my dog to stop barking at strangers. Any advice?",
      img: "https://avatar.vercel.sh/tom",
      type: "question",
    },
    {
      name: "Alice",
      username: "@alice_kitty",
      body: "I love how easy it is to connect with other pet owners here. Great platform!",
      img: "https://avatar.vercel.sh/alice",
      type: "review",
    },
    {
      name: "Sam",
      username: "@sam_parrotlover",
      body: "I wish there were more tips on how to keep parrots entertained. Any suggestions?",
      img: "https://avatar.vercel.sh/sam",
      type: "question",
    },
    {
      name: "Max",
      username: "@max_bunnybuddy",
      body: "ALIF seems stressed, and Im not sure why. Can anyone help?",
      img: "https://avatar.vercel.sh/max",
      type: "problem",
    },
    {
      name: "Olivia",
      username: "@olivia_dogmom",
      body: "So happy I found this platform! My dog found a playmate here, and theyre inseparable.",
      img: "https://avatar.vercel.sh/olivia",
      type: "review",
    },
  ];

  const ReviewCard = ({
    img,
    name,
    username,
    body,
    type,
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
    type: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] text-white",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="absolute flex top-2 right-2 rounded-lg px-2 text-xs font-semibold border border-white">
          {type}
        </div>
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    );
  };
  return (
    <div className="flex flex-row w-full px-8 mt-4 mb-8">
      <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:30s]">
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/35 dark:from-background/35 "></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/35 dark:from-background/35 "></div>
      </div>
    </div>
  );
};

export default HeroFooter;
