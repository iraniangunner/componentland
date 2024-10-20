"use client";
import AnimatedText from "../animated-text";
import { useTheme } from "next-themes";

export function FirstSection() {
  // const theme = useTheme();

  return (
    <div className="py-12 px-8  flex justify-center">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center md:max-w-[1122px] gap-3 lg:gap-8">
        <div>
          <AnimatedText />
        </div>
        <div>
          {/* <MainImage /> */}
        </div>
      </div>
    </div>
  );
}
