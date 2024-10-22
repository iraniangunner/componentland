"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

export default function AnimatedText({
  words = [
    "که به طور کامل قابلیت شخصی سازی دارند",
    "که هر بیننده ای را تحت تاثیر قرار می دهند",
    "که در اکثر پروژه ها قابل استفاده هستند",
  ],
  prefix = "کامپوننت های جذاب و پرکاربرد",
  //   suffix = "UIs",
  interval = 2000,
}: {
  words?: string[];
  prefix?: string;
  suffix?: string;
  interval?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className="p-4 text-xl sm:text-3xl xl:text-4xl font-bold text-primary">
      <h4 className="text-center md:text-start">{prefix}</h4>
      <div className="relative h-[2em] lg:h-[1.5em] overflow-hidden mt-3">
        <AnimatePresence initial={false}>
          <motion.h4
            key={currentIndex}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 text-sm sm:text-xl xl:text-2xl text-[#0073e6] text-center md:text-start"
          >
            {words[currentIndex]}
          </motion.h4>
        </AnimatePresence>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-2">
        <div className="flex items-center text-sm text-slate-500 dark:text-slate-50">
          <svg
            className="h-8 w-8 flex-none stroke-current text-slate-400 dark:text-slate-100"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <ellipse cx="16" cy="16" rx="13" ry="5"></ellipse>
            <ellipse
              cx="16"
              cy="16"
              rx="13"
              ry="5"
              transform="rotate(60 16 16)"
            ></ellipse>
            <ellipse
              rx="13"
              ry="5"
              transform="matrix(-.5 .86603 .86603 .5 16 16)"
            ></ellipse>
            <circle cx="16" cy="16" r="2"></circle>
          </svg>
          <span className="mr-1">ري اکت</span>
        </div>
        <div className="flex items-center text-sm text-slate-500 dark:text-slate-50">
          <svg
            className="h-8 w-8 flex-none stroke-current text-slate-400 dark:text-slate-100"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <defs>
              <linearGradient
                id="next-icon-gradient-a"
                x1="15.125"
                y1="18.25"
                x2="24.25"
                y2="27.375"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".24" stop-color="currentColor"></stop>
                <stop
                  offset="1"
                  stop-color="currentColor"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
              <linearGradient
                id="next-icon-gradient-b"
                x1="20.5"
                y1="11.25"
                x2="20.5"
                y2="18.25"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="currentColor"></stop>
                <stop
                  offset="1"
                  stop-color="currentColor"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
            </defs>
            <path d="M16.25 28.5c6.765 0 12.25-5.485 12.25-12.25S23.015 4 16.25 4 4 9.485 4 16.25 9.485 28.5 16.25 28.5Z"></path>
            <path
              d="M12 21.5V12l12.25 14.25"
              stroke="url(#next-icon-gradient-a)"
            ></path>
            <path
              d="M21.25 12a.75.75 0 1 0-1.5 0v8.17l1.5 1.64V12Z"
              fill="url(#next-icon-gradient-b)"
              stroke-width="0"
            ></path>
          </svg>
          <span className="mr-1">نکست جی اس</span>
        </div>
      </div>

      <p className="text-sm md:text-lg mt-2 lg:mt-4 text-justify text-muted-foreground dark:text-white">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد.
      </p>

      <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6">
        <Button className="flex items-center text-xs sm:text-sm font-medium px-0 py-0 h-auto">
          <Link href="/elements" className="w-full h-full px-3 sm:px-4 py-3">
            مشاهده کامپوننت ها
          </Link>
        </Button>

        <Button
          variant="outline"
          className="flex items-center text-xs sm:text-sm font-medium px-0 py-0 h-auto dark:bg-accent dark:hover:bg-background"
        >
          <Link href="/contact-us" className="w-full h-full px-3 sm:px-4 py-3">
            پیشنهاد کامپوننت جدید
          </Link>
        </Button>
      </div>
    </div>
  );
}
