import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import {
  BlocksIcon,
  HomeIcon,
  Menu,
  Phone,
  PhoneCall,
  ShoppingBag,
  ShoppingCartIcon,
  User2Icon,
  UserIcon,
  UserSearch,
} from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { Separator } from "./ui/separator";
import { ShoppingCart } from "lucide-react";
import { SearchElements } from "./search";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6 md:max-w-[1400px]">
        <Link href="/" className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6 text-[#0073e6]" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden items-center gap-6 xl:gap-10  md:flex font-bold">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            خانه
          </Link>

          <Link
            href="/elements"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            کامپوننت ها
          </Link>
          <Link
            href="/about-us"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            درباره ما
          </Link>
          <Link
            href="/contact-us"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            تماس با ما
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex items-center text-sm font-medium px-0 py-0">
            <Link href="/login" className="w-full h-full px-4 py-2">
              ورود / عضویت
            </Link>
          </Button>

          {/* <Button
            variant="outline"
            className="flex items-center text-sm font-medium px-0 py-0 dark:bg-accent dark:hover:bg-background"
          >
            <Link href="/cart" className="w-full h-full px-2 py-2">
              <ShoppingBag size={20} />
            </Link>
          </Button> */}
          <SearchElements />
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
              >
                <Menu
                  size={20}
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="md:hidden font-bold">
              <div className="flex flex-col gap-6 pt-8 h-full">
                <Separator />
                <SheetTrigger asChild>
                  <Link
                    href="/"
                    className="text-sm flex items-center gap-2 font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <HomeIcon />
                    <span>خانه </span>
                  </Link>
                </SheetTrigger>

                <SheetTrigger asChild>
                  <Link
                    href="/elements"
                    className="text-sm flex items-center gap-2 font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <BlocksIcon />
                    <span>کامپوننت ها</span>
                  </Link>
                </SheetTrigger>

                <SheetTrigger asChild>
                  <Link
                    href="/about-us"
                    className="text-sm font-medium flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <UserSearch />
                    <span>درباره ما</span>
                  </Link>
                </SheetTrigger>

                <SheetTrigger asChild>
                  <Link
                    href="/contact-us"
                    className="text-sm font-medium flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <PhoneCall />
                    <span>تماس با ما</span>
                  </Link>
                </SheetTrigger>

                <SheetTrigger asChild className="mt-auto">
                  <Button
                    color="blue"
                    className="items-center text-sm font-medium px-0 py-0"
                  >
                    <Link href="/login" className="w-full h-full px-4 py-2">
                      ورود / عضویت
                    </Link>
                  </Button>
                </SheetTrigger>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
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
