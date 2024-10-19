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
import { useFormState, useFormStatus } from "react-dom";

export function RegisterForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">ثبت نام</CardTitle>
        <CardDescription>برای ثبت نام ایمیل خود و یک رمز عبور وارد نمایید</CardDescription>
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
            </div>
            <Input id="password" type="password" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="confirm-password">تکرار رمز عبور</Label>
            </div>
            <Input id="confirm-password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            ایجاد حساب کاربری
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          حساب کاربری دارید؟
          <Link href="/login" className="underline mr-4">
            ورود
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
