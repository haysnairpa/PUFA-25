"use client"

import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Input, Textarea, Button, Select, Option } from "@material-tailwind/react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const aspirations = [
  { 
    id: 1, 
    name: "Anonim", 
    to: "PUFA Computing", 
    subject: "Improve Campus Wi-Fi", 
    message: "We need better Wi-Fi coverage across campus." 
  },
  { 
    id: 2, 
    name: "John Doe", 
    to: "PUMA Informatics", 
    subject: "More Programming Workshops", 
    message: "It would be great to have more hands-on programming workshops." 
  },
  { 
    id: 3, 
    name: "Anonim", 
    to: "PUMA Information System", 
    subject: "Green Campus Initiative", 
    message: "Let's make our campus more environmentally friendly." 
  },
  { 
    id: 4, 
    name: "Jamaludin", 
    to: "PUMA Information System", 
    subject: "Green Campus Initiative", 
    message: "Let's make our campus more environmentally friendly." 
  },
  { 
    id: 5, 
    name: "Ujang", 
    to: "PUMA Informatics", 
    subject: "Green Campus Initiative", 
    message: "Let's make our campus more environmentally friendly." 
  },
  { 
    id: 6, 
    name: "Budi Santoso", 
    to: "PUMA Information System", 
    subject: "Green Campus Initiative", 
    message: "Let's make our campus more environmentally friendly." 
  },
];

export default function AspirationsPage() {
  const [isAnonymous, setIsAnonymous] = React.useState(false);

  // Divide aspirations into two groups
  const firstHalf = aspirations.slice(0, Math.ceil(aspirations.length / 2));
  const secondHalf = aspirations.slice(Math.ceil(aspirations.length / 2));

  return (
    <section className="min-h-screen flex flex-col items-center justify-start p-6 pt-24">
      <div className="text-center mb-12">
        <h1 data-aos="fade-down" className="text-4xl md:text-7xl font-[900] mb-6">Aspirations</h1>
        <TextGenerateEffect
          words="A place for computizens to share their aspirations, ideas, and suggestions with us."
          className="text-xl md:text-2xl mx-auto max-w-2xl mb-12"
        />
      </div>
      
      <div className="w-full max-w-7xl mb-24">
        <InfiniteMovingCards
          items={firstHalf.map(item => ({
            quote: item.message,
            name: item.name,
            title: `${item.to} - ${item.subject}`
          }))}
          direction="right"
          speed="slow"
        />
        <div className="my-8"></div> {/* Spacer between rows */}
        <InfiniteMovingCards
          items={secondHalf.map(item => ({
            quote: item.message,
            name: item.name,
            title: `${item.to} - ${item.subject}`
          }))}
          direction="left"
          speed="normal"
        />
      </div>

      <form className="w-full max-w-2xl space-y-6 border border-gray-300 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <p className="text-lg mb-4 font-bold">Hello, Aldi Apriansyah 👋</p>
        <p className="text-lg mb-6">Let's share your aspirations for better computing!</p>

        <div className="mb-4">
          <p className="text-sm mb-2">Select the organization you want to share your aspiration with:</p>
          <Select label="To" animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}>
            <Option>PUFA Computing</Option>
            <Option>PUMA Informatics</Option>
            <Option>PUMA Information System</Option>
          </Select>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-bold">From:</p>
            <div className="flex items-center">
              <span className="mr-2 text-sm">Share it anonymously</span>
              <input 
                type="checkbox" 
                className="form-checkbox h-5 w-5"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
              />
            </div>
          </div>
          <Input 
            label="Your name" 
            defaultValue="Aldi Apriansyah"
            disabled={isAnonymous}
          />
        </div>

        <div className="mb-4">
          <p className="text-sm mb-2 font-bold">Subject:</p>
          <Input label="Your email etc." />
        </div>

        <div className="mb-4">
          <p className="text-sm mb-2 font-bold">Message:</p>
          <p className="text-xs mb-2">Anything else you want to let us know:</p>
          <Textarea label="Your message" rows={6} />
        </div>

        <Button className="w-full" color="black" ripple="light">
          Submit
        </Button>
      </form>
    </section>
  );
}
