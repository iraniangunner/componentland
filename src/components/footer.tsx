import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer>
      <div className="bg-muted dark:bg-gray-950 py-12 px-8 md:py-16 lg:py-20 flex justify-center items-center">
        <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:max-w-[1400px]">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <MountainIcon className="h-6 w-6 text-[#0073e6]" />
              <span className="text-lg font-bold">کامپوننت لند</span>
            </Link>
            <p className="text-muted-foreground dark:text-white text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
          <div className="flex justify-start md:justify-center items-start">
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold">دسترسی سریع</h4>
              <nav className="flex flex-col items-start gap-3 font-regular text-muted-foreground dark:text-white">
                <Link href="/" className="text-sm hover:underline">
                  خانه
                </Link>
                <Link href="/elements" className="text-sm hover:underline">
                  کامپوننت ها
                </Link>
                <Link href="/about-us" className="text-sm hover:underline">
                  درباره ما
                </Link>

                <Link href="/contact-us" className="text-sm hover:underline">
                  تماس با ما
                </Link>
              </nav>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">خبر نامه</h4>
            <p className="text-sm text-muted-foreground dark:text-white">
              برای اطلاع از وضعیت آخرین کامپوننت ها ایمیل خود را وارد نمایید
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="ایمیل خود را وارد کنید..."
                className="flex-1 dark:border-white dark:placeholder:text-white"
              />
              <Button type="submit">خبرم کن</Button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-muted dark:bg-gray-950">
        <div className="px-8 py-4 border-t dark:border-muted-foreground flex justify-center items-center md:max-w-[1400px] mx-auto">
          <p className=" text-sm sm:text-[16px]">
            © تمامی حقوق برای{" "}
            <span className="font-bold text-[#0073e6]">کامپوننت لند</span> محفوظ
            است
          </p>
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
