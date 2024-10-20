import AnimatedText from "../animated-text";
import { MainImage } from "../main-image";
export function FirstSection() {
  return (
    <div className="py-12 px-4 lg:px-8 flex justify-center">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center md:max-w-[1122px] gap-3 lg:gap-8">
        <div className="order-last lg:order-first">
          <AnimatedText />
        </div>
        <div className="order-first lg:order-last">
          <MainImage />
        </div>
      </div>
    </div>
  );
}
