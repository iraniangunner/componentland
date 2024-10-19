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

export default function ForgotPasswordForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">بازیابی رمز عبور</CardTitle>
        <CardDescription>
          برای بازیابی رمز عبور ایمیل خود را وارد کنید
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

          <Button type="submit" className="w-full">
            ارسال ایمیل
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          <Link href="/login" className="underline mr-4">
            برگرد به صفحه ورود
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
