"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eef1f5] dark:bg-neutral-950 px-4">
      <AuthForm />
    </div>
  );
}

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

    // backend routing here for shantanu
    ///



  };

  return (
    <div className="w-full max-w-md rounded-lg bg-[#f7f8fa] shadow-lg p-6 md:p-8 dark:bg-neutral-900">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
        {isLogin ? "Welcome Back" : "Create Your Account"}
      </h2>
      <p className="mt-2 mb-6 text-center text-sm text-neutral-600 dark:text-neutral-300">
        {isLogin
          ? "Login to continue to Aceternity."
          : "Sign up and start your journey with us."}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="John" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Doe" type="text" />
            </LabelInputContainer>
          </div>
        )}

        <LabelInputContainer>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="you@example.com" type="email" />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <button
          type="submit"
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-700 font-medium text-white shadow-md dark:bg-zinc-800"
        >
          {isLogin ? "Login →" : "Sign Up →"}
          <BottomGradient />
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-300">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          type="button"
          className="text-blue-600 hover:underline"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
