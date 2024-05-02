"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function Typewriter() {
  const words = [
    {
      text: "We",
    },
    {
      text: "Deals",
    },
    
    {
      text: "In",
    },
    {
      text: "Clothes",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
        text: "Shoes",
        className: "text-blue-500 dark:text-blue-500",
      },

      {
        text: "EyeWear",
        className: "text-blue-500 dark:text-blue-500",
      },
      
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      GENZ Emporium: Where Trends Meet Tradition
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Explore Now
        </button>
      </div>
    </div>
  );
}
