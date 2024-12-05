"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation"
import LoadingDots from "@/components/loading-dots";
import { Icons } from "./icons";


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function GoogleLoginForm() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams()

  return (
    <Card className="mx-auto w-full max-w-md p-6 space-y-6 sm:space-y-8">
      <CardHeader className="items-center text-center">
        <CardTitle className="text-2xl font-semibold">Welcome</CardTitle>
        <CardDescription className="text-muted-foreground">
        Use your Google account to continue.
        </CardDescription>
      </CardHeader>
  
      <CardContent>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            await signIn("google", {
              redirect: false,
              callbackUrl: searchParams?.get("from") || "/dashboard",
            });
          }}
          className="space-y-6"
        >
          <button
            disabled={loading}
            className={`${
              loading
                ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-500"
                : "border-black bg-black text-white hover:bg-white hover:text-black"
            } flex h-12 w-full items-center justify-center rounded-md border text-sm font-medium transition-all focus:outline-none`}
          >
            {loading ? (
              <LoadingDots color="#808080" />
            ) : (
              <div className="flex items-center space-x-2">
                <Icons.google className="h-5 w-5" />
                <span>Continue with Google</span>
              </div>
            )}
          </button>
        </form>
      </CardContent>
  
      
    </Card>
  );
  
  
}
