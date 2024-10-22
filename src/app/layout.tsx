import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import TopProgressBar from "@/components/top-progressbar";

const iranYekanRegular = localFont({
  src: "./fonts/IRANYekanXFaNum-Regular.woff",
  variable: "--font-regular",
  weight: "100 900",
});

const iranYekanBold = localFont({
  src: "./fonts/IRANYekanXFaNum-Bold.woff",
  variable: "--font-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "کامپوننت لند",
  description: "جایی برای پیدا کردن کامپوننت های پر استفاده",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${iranYekanRegular.variable} ${iranYekanBold.variable}`}
      >
        <TopProgressBar />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
