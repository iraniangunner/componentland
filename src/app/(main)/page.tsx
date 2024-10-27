import { FirstSection } from "@/components/layout/first-section";
import { SecondSection } from "@/components/layout/second-section";
import { ResponsiveView } from "@/components/responsive-view";
export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <FirstSection />
      {/* <SecondSection/> */}
      <ResponsiveView/>
    </main>
  );
}
