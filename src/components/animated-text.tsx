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
      <p className="text-sm md:text-lg mt-2 lg:mt-4 text-justify">
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

        <Button className="flex items-center text-xs sm:text-sm font-medium px-0 py-0 h-auto">
          <Link href="/contact-us" className="w-full h-full px-3 sm:px-4 py-3">
            پیشنهاد کامپوننت جدید
          </Link>
        </Button>
      </div>
    </div>
  );
}
