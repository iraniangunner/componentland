import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";

export function MainImage() {
  return (
    <>
      <div className="z-20 flex flex-col">
        <div className="relative p-4">
          <div className="absolute bottom-0 left-0 right-11 top-8"></div>
          <div className="pointer-events-auto relative z-10 w-[24.125rem] rounded-lg dark:bg-accent bg-white text-[0.8125rem] leading-5 text-slate-700 dark:text-slate-50 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 dark:ring-slate-50/10">
            <div>
              <div className="flex items-center px-3.5 py-2.5 text-slate-400 dark:text-slate-50 font-regular">
                <svg
                  className="ml-2 h-5 w-5 stroke-slate-500 dark:stroke-slate-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                جستجوی پروژه ها...
              </div>
              <div className="border-t border-slate-400/20 dark:border-slate-50/20 px-3.5 py-3 font-regular">
                <div className="mb-1.5 text-[0.6875rem] font-semibold text-slate-500 dark:text-slate-50">
                  پروژه های اخیر
                </div>
                <div className="flex items-center rounded-md p-1.5 bg-indigo-600 text-white">
                  <svg
                    className="ml-2.5 h-5 w-5 flex-none stroke-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  کامپوننت های ری اکت / اسلایدر
                </div>
                <div className="flex items-center rounded-md p-1.5">
                  <svg
                    className="ml-2.5 h-5 w-5 flex-none stroke-slate-400 dark:stroke-slate-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  کامپوننت های ری اکت / منو
                </div>
              </div>
              <div className="border-t border-slate-400/20 dark:border-slate-50/20 px-3.5 py-3 font-regular">
                <div className="flex items-center rounded-md p-1.5">
                  <svg
                    className="ml-2.5 h-5 w-5 flex-none stroke-slate-400 dark:stroke-slate-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  اضافه کردن فایل...
                </div>
                <div className="flex items-center rounded-md p-1.5">
                  <svg
                    className="ml-2.5 h-5 w-5 flex-none stroke-slate-400 dark:stroke-slate-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                  </svg>
                  اضافه کردن فولدر...
                </div>
                <div className="flex items-center rounded-md p-1.5">
                  <svg
                    className="ml-2.5 h-5 w-5 flex-none stroke-slate-400 dark:stroke-slate-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                  </svg>
                  اضافه کردن هشتگ...
                </div>
                <div className="flex items-center rounded-md p-1.5">
                  <svg
                    className="ml-2.5 h-5 w-5 flex-none stroke-slate-400 dark:stroke-slate-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                  </svg>
                  اضافه کردن برچسب...
                </div>
              </div>
            </div>
          </div>
          <div className="z-0">
            <div className="absolute -left-[95%] right-0 top-8 h-px bg-slate-900/[0.1] dark:bg-slate-50/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -bottom-16 -top-2 left-0 w-px bg-slate-900/[0.1] dark:bg-slate-50/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -left-2/3 top-px -mb-px flex h-8 items-end overflow-hidden">
              <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative ml-6 flex items-center justify-end">
          <div className="relative p-4">
            <Switch dir="ltr" className="data-[state=checked]:bg-indigo-600"/>
            <div className="z-0">
              <div className="absolute -top-full bottom-2/3 right-0 w-px bg-slate-900/[0.2] dark:bg-slate-50/[0.2] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            </div>
          </div>
          <div className="relative p-4">
            <div className="pointer-events-auto relative inline-flex rounded-md bg-white dark:bg-accent text-[0.8125rem] font-medium leading-5 text-slate-700 dark:text-slate-50 shadow-sm ring-1 ring-slate-700/10 dark:ring-slate-50/10 hover:bg-slate-50 dark:hover:bg-background hover:text-slate-900">
              <div className="flex px-3 py-2 font-regular">
                <svg className="mr-2.5 h-5 w-5 flex-none fill-slate-400 dark:fill-slate-50">
                  <path d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14l-5-2.5L5 18V4Z"></path>
                </svg>
                ذخیره
              </div>
              <div className="border-r border-slate-400/20 dark:border-slate-50/20 px-2.5 py-2">
                12k
              </div>
            </div>
            <div className="z-0">
              <div className="absolute -bottom-8 -top-12 right-0 w-px bg-slate-900/[0.1] dark:bg-slate-50/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div
                className="absolute -bottom-8 -top-12 left-0 w-px bg-slate-900/[0.1] dark:bg-slate-50/[0.1]
[mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
              ></div>
            </div>
          </div>
          <div className="relative p-4">
            <div className="pointer-events-auto rounded-md font-regular bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">
              ارسال
            </div>
          </div>
          <div className="z-0">
            <div className="absolute -left-12 -right-4 top-0 h-px bg-slate-900/[0.1] dark:bg-slate-50/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -right-4 bottom-0 left-0 h-px bg-slate-900/[0.1] dark:bg-slate-50/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-8">
        <div className="relative p-4">
          <div className="w-[19.875rem] rounded-lg bg-white dark:bg-accent text-[0.8125rem] leading-5 text-slate-900 dark:text-slate-50 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 dark:ring-slate-50/10">
            <div className="flex items-center p-4 pb-0">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="mr-4 flex-auto">
                <div className="font-medium font-regular">علی علیزاده</div>
                <div className="mt-1 text-slate-500 dark:text-slate-300 font-regular">
                  درخواستی برای شما ارسال شده
                </div>
              </div>
            </div>
            <div className="flex gap-3 p-4 font-regular">
              <div className="pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">
                قبول
              </div>
              <div className="pointer-events-auto rounded-md px-4 py-2 text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50 dark:hover:bg-background dark:ring-slate-50/10">
                رد
              </div>
            </div>
          </div>
          <div className="z-0">
            <div className="absolute -left-12 -right-4 bottom-0 h-px bg-slate-900/[0.1] dark:bg-slate-50/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -bottom-16 -top-2 right-[21.875rem] w-px bg-slate-900/[0.1] dark:bg-slate-50/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          </div>
        </div>
        <div className="relative p-4">
          <div className="w-[24.5rem] divide-y divide-slate-400/20 dark:divide-slate-50/10 rounded-lg bg-white dark:bg-accent text-[0.8125rem] leading-5 text-slate-900 dark:text-slate-50 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 dark:ring-slate-50/10">
            <div className="flex items-center p-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="mr-4 flex-auto">
                <div className="font-medium font-regular">امین حبیب پور</div>
                <div className="mt-1 text-slate-700 dark:text-slate-300">
                  amin@gmail.com
                </div>
              </div>
              <div className="pointer-events-auto ml-4 flex-none font-regular rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 dark:text-slate-50 shadow-sm ring-1 ring-slate-700/10 dark:ring-slate-50/10 dark:hover:bg-background hover:bg-slate-50">
                نمایش
              </div>
            </div>
            <div className="flex items-center p-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="mr-4 flex-auto">
                <div className="font-medium font-regular">هادی محمدی</div>
                <div className="mt-1 text-slate-700 dark:text-slate-300">
                  hadi@hotmail.com
                </div>
              </div>
              <div className="pointer-events-auto ml-4 flex-none font-regular rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 dark:text-slate-50 shadow-sm ring-1 ring-slate-700/10 dark:ring-slate-50/10 dark:hover:bg-background hover:bg-slate-50">
                نمایش
              </div>
            </div>
            <div className="p-4">
              <div className="pointer-events-autoد font-regular rounded-md px-4 py-2 text-center font-medium shadow-sm ring-1 ring-slate-700/10 dark:ring-slate-50 hover:bg-slate-50 dark:hover:bg-background">
                نمایش همه
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
