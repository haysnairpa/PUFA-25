"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `PUFA Computing is a dynamic organization within President University, serving as a platform for students pursuing various computing-related fields like Information Technology, Information Systems, Visual Communication Design, and Interior Design. It fosters a vibrant community where students can connect, collaborate, and explore their passion for technology, creativity, and innovation. PUFA Computing offers opportunities for professional development, networking, and social engagement, making it a valuable resource for students aspiring to excel in the computing industry.
`;

export default function TextGenerate() {
  return <TextGenerateEffect words={words} />;
}
