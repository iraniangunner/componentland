/**
 * v0 by Vercel.
 * @see https://v0.dev/t/035aszaNt9A
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-muted py-12 px-8 md:py-16 lg:py-20 flex justify-center">
      <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-bold">کامپوننت لند</span>
          </Link>
          <p className="text-muted-foreground text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>

        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="grid gap-2">
            <h4 className="text-lg font-semibold">دسترسی سریع</h4>
            <nav className="flex flex-col items-start gap-2 font-regular">
              <Link
                href="/"
                className="text-sm hover:underline"
                // prefetch={false}
              >
                خانه
              </Link>
              <Link
                href="/elements"
                className="text-sm hover:underline"
                // prefetch={false}
              >
                کامپوننت ها
              </Link>
              <Link
                href="/about-us"
                className="text-sm hover:underline"
                // prefetch={false}
              >
                درباره ما
              </Link>

              <Link
                href="/contact-us"
                className="text-sm hover:underline"
                // prefetch={false}
              >
                تماس با ما
              </Link>
            </nav>
          </div>
        </div>

        {/* <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Resources</h4>
          <nav className="grid gap-1">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Documentation
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Support
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              FAQs
            </Link>
          </nav>
        </div> */}
        <div className="grid gap-4">
          <h4 className="text-lg font-semibold">خبر نامه</h4>
          <p className="text-sm text-muted-foreground">
            برای اطلاع از وضعیت آخرین کامپوننت ها ایمیل خود را وارد نمایید
          </p>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="ایمیل خود را وارد کنید..."
              className="flex-1 dark:border-white"
            />
            <Button type="submit">خبرم کن</Button>
          </form>
        </div>
      </div>
    </footer>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
