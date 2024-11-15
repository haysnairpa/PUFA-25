"use client";

import React, { useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Input, Textarea, Button, Select, Option } from "@material-tailwind/react";
import { FiUpload } from "react-icons/fi";

const FileInput = ({ label, accept, onChange }) => {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
    onChange(e);
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="mt-1 flex items-center">
        <span className="h-12 w-12 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 flex items-center justify-center">
          <FiUpload className="h-5 w-5" />
        </span>
        <label className="cursor-pointer bg-white h-12 rounded-r-md border border-l-0 border-gray-300 py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-between flex-grow">
          <span className="truncate">{fileName}</span>
          <input type="file" className="sr-only" accept={accept} onChange={handleFileChange} />
          <span className="ml-3 inline-flex items-center rounded-full bg-gray-600 px-2.5 py-0.5 text-xs font-medium text-white">
            Choose
          </span>
        </label>
      </div>
    </div>
  );
};

export default function AddProjectPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start p-6 pt-24">
      <div className="text-center mb-12">
        <h1 data-aos="fade-down" className="text-4xl md:text-7xl font-[900] mb-6">Add Your Project</h1>
        <TextGenerateEffect
          words="Share your amazing project with the computizens community."
          className="text-xl md:text-2xl mx-auto max-w-2xl"
        />
      </div>
      
      <form className="w-full max-w-2xl space-y-6 border border-gray-300 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <p className="text-lg font-bold">Hello, Aldi Apriansyah! 👋</p>
        <p>Let's add your project by filling the form below!</p>
        
        <Input label="Team Name" placeholder="Name of your team on this projects" />
        
        <Input label="Team Members" placeholder="Mention all the people who incharge in this projects" />
        
        <Input label="Title" placeholder="The title of the projects" />
        
        <Textarea label="Description" rows={4} />
        
        <Select label="Major">
          <Option>Informatics</Option>
          <Option>Information Systems</Option>
          <Option>Data Science</Option>
        </Select>
        
        <Select label="Batch">
          <Option>2020</Option>
          <Option>2021</Option>
          <Option>2022</Option>
          <Option>2023</Option>
        </Select>
        
        <FileInput 
          label="Images" 
          accept="image/*" 
          onChange={(e) => console.log(e.target.files)}
        />
        
        <Input label="Project Source" placeholder="Google Drive, Github, Gitlab, Google Docs, Youtube" />
        
        <Button className="w-full" color="black" ripple="light">
          Submit
        </Button>
      </form>
    </section>
  );
}
