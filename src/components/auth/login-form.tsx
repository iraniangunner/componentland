"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">ورود</CardTitle>
        <CardDescription>
          برای ورود به حساب کاربری ایمیل خود را وارد کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">ایمیل</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">رمز عبور</Label>
              <Link
                href="/forgot-password"
                className="mr-auto inline-block text-sm underline"
              >
                فراموشی رمز عبور
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            ورود
          </Button>
          <Button variant="outline" className="w-full">
            ورود با گوگل
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          حساب کاربری ندارید؟
          <Link href="/register" className="underline mr-4">
            ثبت نام
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
