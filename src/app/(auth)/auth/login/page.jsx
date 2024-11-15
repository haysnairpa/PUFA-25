"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 pt-24">
      <div className="text-center mb-12">
        <h1 data-aos="fade-down" className="text-4xl md:text-7xl font-[900] mb-6">Welcome Back!</h1>
        <TextGenerateEffect
          words="Login to access your Computing account"
          className="text-xl md:text-2xl mx-auto max-w-2xl"
        />
      </div>

      <div className="w-full max-w-md rounded-2xl p-8 shadow-lg bg-white dark:bg-black border border-gray-300">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="ml-2">Remember me</span>
            </label>
            <Link href="/auth/forgot-password" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button className="w-full bg-black text-white rounded-lg py-2.5 hover:bg-gray-800 transition-colors">
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;