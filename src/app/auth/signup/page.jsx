"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { Select, Option } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center mb-8">
        <div className="flex justify-center gap-4 mb-6">
          <Image src="/assets/pufapu.png" alt="Computing Logo" width={80} height={80} />
          
        </div>
        <h1 data-aos="fade-down" className="text-4xl md:text-7xl font-[900] mb-6">Hello Computizen!</h1>
        <TextGenerateEffect
          words="Let's Create an Account"
          className="text-xl md:text-2xl mx-auto max-w-2xl text-neutral-600"
        />
      </div>

      <div className="w-full max-w-md rounded-2xl p-8 shadow-lg bg-white dark:bg-black border border-gray-300">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="firstname">First Name</Label>
              <Input id="firstname" type="text" placeholder="First Name" />
            </div>
            <div className="flex-1">
              <Label htmlFor="lastname">Last Name</Label>
              <Input id="lastname" type="text" placeholder="Last Name" />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Email" />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Password" />
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-black text-white rounded-lg py-2.5 hover:bg-gray-800 transition-colors">   
              Computizen
            </button>
            <button className="flex-1 bg-gray-100 text-gray-700 rounded-lg py-2.5 hover:bg-gray-200 transition-colors">
              Institution
            </button>
          </div>

          <div>
            <Label htmlFor="studentId">Student ID</Label>
            <Input id="studentId" type="text" placeholder="Student ID" />
          </div>

          <div>
            <Label htmlFor="batch">Batch</Label>
            <Input id="batch" type="text" placeholder="Batch" />
          </div>

          <button className="w-full bg-black text-white rounded-lg py-2.5 hover:bg-gray-800 transition-colors">
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-[#4285F4] hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
