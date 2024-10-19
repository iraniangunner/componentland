/**
 * v0 by Vercel.
 * @see https://v0.dev/t/obus3LxsAfo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
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
  User2Icon,
  UserIcon,
  UserSearch,
} from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { Separator } from "./ui/separator";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden items-center gap-6 xl:gap-10 text-sm font-medium md:flex font-bold">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            // prefetch={false}
          >
            خانه
          </Link>

          <Link
            href="/elements"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            // prefetch={false}
          >
            کامپوننت ها
          </Link>
          <Link
            href="/about-us"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            // prefetch={false}
          >
            درباره ما
          </Link>
          <Link
            href="/contact-us"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            // prefetch={false}
          >
            تماس با ما
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {/* search sample*/}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="sr-only">Search</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px] p-4">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 w-full"
                />
              </div>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <Button className="flex items-center text-sm font-medium px-0 py-0">
            <Link href="/login" className="w-full h-full px-4 py-2">
              ورود / عضویت
            </Link>
          </Button>
          {/* <Toggle aria-label="Toggle dark mode" className="rounded-full">
            <MoonIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </Toggle> */}
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
              <div className="grid gap-6 pt-8">
                <Separator />
                <SheetTrigger asChild>
                  <Link
                    href="/"
                    className="text-sm flex items-center gap-2 font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    // prefetch={false}
                  >
                    <HomeIcon />
                    <span>خانه </span>
                  </Link>
                </SheetTrigger>

                <SheetTrigger asChild>
                  <Link
                    href="/elements"
                    className="text-sm flex items-center gap-2 font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    // prefetch={false}
                  >
                    <BlocksIcon />
                    <span>کامپوننت ها</span>
                  </Link>
                </SheetTrigger>

                <SheetTrigger asChild>
                  <Link
                    href="/about-us"
                    className="text-sm font-medium flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    // prefetch={false}
                  >
                    <UserSearch />
                    <span>درباره ما</span>
                  </Link>
                </SheetTrigger>

                <SheetTrigger asChild>
                  <Link
                    href="/contact-us"
                    className="text-sm font-medium flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    // prefetch={false}
                  >
                    <PhoneCall />
                    <span>تماس با ما</span>
                  </Link>
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
