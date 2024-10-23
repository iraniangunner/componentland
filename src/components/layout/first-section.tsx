import AnimatedText from "../animated-text";
import { MainImage } from "../main-image";
export function FirstSection() {
  return (
    <div className="flex justify-center">
      <div className="relative -mt-[5.75rem] overflow-hidden pt-12 md:pt-[5.75rem] md:max-w-[1300px]">
        <div className="absolute inset-y-0 hidden w-full min-w-[1360px]  lg:block"></div>
        <div className="mx-auto max-w-container px-4 pt-4 sm:px-6 lg:flex lg:px-8">
          <div className="relative z-20 mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20">
            <AnimatedText />
          </div>
          <div className="relative z-10 mt-12 hidden select-none lg:flex">
            <MainImage />
          </div>
        </div>
      </div>
    </div>
  );
}
