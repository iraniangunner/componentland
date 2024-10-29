"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const SecondSection = () => {
  const features = [
    {
      title: "500+ Components",
      description:
        "Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize.",
      icon: (
        <svg
          className="h-10 w-10 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]"
          viewBox="0 0 40 40"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
            className="fill-indigo-50 stroke-indigo-500"
          ></path>
          <path
            d="M27 25.335L30.25 27l-6.603 3.382a8 8 0 01-7.294 0L9.75 27 13 25.335m14-6.999L30.25 20l-6.603 3.382a8 8 0 01-7.294 0L9.75 20 13 18.336"
            className="stroke-indigo-500/50"
          ></path>
          <path
            d="M9.75 13l9.338-4.783a2 2 0 011.824 0L30.25 13l-6.603 3.382a8 8 0 01-7.294 0L9.75 13z"
            className="stroke-indigo-500"
          ></path>
        </svg>
      ),
    },
    {
      title: "React, Vue, and HTML",
      description:
        "Interactive examples for React and Vue powered by Headless UI, plus vanilla HTML if you'd rather write any necessary JS yourself.",
      icon: (
        <svg
          className="h-10 w-10 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]"
          viewBox="0 0 40 40"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
            className="fill-indigo-50 stroke-indigo-500"
          ></path>
          <path
            d="M22.25 11.75l-4.5 16.5"
            className="stroke-indigo-500/50"
          ></path>
          <path
            d="M16.25 7.75h-.5a4 4 0 00-4 4v4.007a3 3 0 01-.88 2.122 3 3 0 000 4.242 3 3 0 01.88 2.122v4.007a4 4 0 004 4h.5m7.5-24.5h.5a4 4 0 014 4v4.007a3.002 3.002 0 00.878 2.122 3 3 0 010 4.242 3 3 0 00-.878 2.122v4.007a4 4 0 01-4 4h-.5"
            className="stroke-indigo-500"
          ></path>
        </svg>
      ),
    },
    {
      title: "Fully Responsive",
      description:
        "Every example is fully responsive and carefully designed and implemented to look great at any screen size.",
      icon: (
        <svg
          className="h-10 w-10 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]"
          viewBox="0 0 40 40"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
            className="fill-indigo-50 stroke-indigo-500"
          ></path>
          <path
            d="M7.75 21.25v-1.5a4 4 0 014-4h7.5m5 5v7.5a4 4 0 01-4 4h-1.5M27.75 32.25h.5a4 4 0 004-4v-10.5m-10-10h-10.5a4 4 0 00-4 4v.5"
            className="stroke-indigo-500/50"
          ></path>
          <path d="M31.5 8.5l-23 23" className="stroke-indigo-500"></path>
          <path
            d="M25.75 7.75h4.5a2 2 0 012 2v4.5m-18 18h-4.5a2 2 0 01-2-2v-4.5"
            className="stroke-indigo-500"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="relative z-20 sm:z-auto pt-12 md:pt-[5.75rem] md:max-w-[1500px]">
        <div className="mx-auto max-w-container px-4 pb-16 sm:px-6 lg:px-8">
          <div className="relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[250px] flex flex-col">
                  <CardHeader className="flex items-center">
                    <div className="mr-4">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};