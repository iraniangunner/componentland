"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

const TopProgressBar = () => {
  const pathname = usePathname(); // Hook to get the current path
  const searchParams = useSearchParams(); // Hook to get the search params

  useEffect(() => {
    NProgress.start();
    NProgress.done(); // Ensure it ends when the pathname or search params change
  }, [pathname, searchParams]);

  return null;
};

export default TopProgressBar;
