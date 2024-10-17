"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ExpandableCardDemo } from "@/components/ui/expandable-card";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const events = [
  {
    title: "Hackathon 2024",
    description: "Join our annual hackathon and showcase your coding skills!",
    src: "/assets/events/image.png",
    ctaText: "Register",
    ctaLink: "/register/hackathon",
    content: () => (
      <p>
        This 48-hour coding marathon brings together developers, designers, and innovators to create groundbreaking solutions. 
        Prizes include cash awards and internship opportunities with leading tech companies.
        <br /><br />
        Date: April 15-17, 2024
        <br />
        Location: Charles Auditorium
      </p>
    ),
  },
  {
    title: "Tech Talk: AI in Healthcare",
    description: "Learn about the latest applications of AI in the healthcare industry.",
    src: "/assets/events/healthcare.png",
    ctaText: "RSVP",
    ctaLink: "/rsvp/tech-talk",
    content: () => (
      <p>
        Featuring speakers from top medical institutions and AI research labs, this talk will explore how artificial intelligence 
        is revolutionizing diagnostics, treatment plans, and patient care.
        <br /><br />
        Date: May 5, 2024
        <br />
        Location: Charles Auditorium
      </p>
    ),
  },
  {
    title: "Workshop: Web Development Basics",
    description: "A hands-on workshop for beginners to learn the fundamentals of web development.",
    src: "/assets/events/simulation.jpg",
    ctaText: "Register",
    ctaLink: "/register/web-dev-workshop",
    content: () => (
      <p>
        This workshop will cover the basics of web development, including HTML, CSS, and JavaScript. 
        Participants will learn how to build a simple web application and deploy it to a cloud platform.
        <br /><br />
        Date: June 10, 2024
        <br />
        Location: Charles Auditorium
      </p>
    ),
  },
  {
    title: "PUFA Computing Career Fair",
    description: "Connect with top tech companies and explore career opportunities.",
    src: "/assets/events/pufa24.png",
    ctaText: "RSVP",
    ctaLink: "/rsvp/career-fair",
    content: () => (
      <p>
        Meet representatives from leading tech companies and learn about their latest projects and job openings. 
        This is a great opportunity to network and learn about the latest trends in the tech industry.
        <br /><br />
        Date: July 20, 2024
        <br />
        Location: Charles Auditorium
      </p>
    ),
  },
  {
    title: "Coding Competition",
    description: "Test your problem-solving skills in our annual coding competition.",
    src: "/assets/events/competition.png",
    ctaText: "Register",
    ctaLink: "/register/coding-competition",
    content: () => (
      <p>
        This competition will challenge participants to solve complex coding problems and showcase their skills. 
        Prizes include cash awards and internship opportunities with leading tech companies.
        <br /><br />
        Date: August 8, 2024
        <br />
        Location: PUCC
      </p>
    ),
  }
];

export default function EventPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

  return (
    <section className="flex flex-col items-center justify-start min-h-screen pt-32 md:pt-40 px-4">
      <div className="mb-20 text-center">
        <h1 data-aos="fade-down" className="text-4xl md:text-7xl font-[900] mb-6">Computing Events</h1>
        <TextGenerateEffect
          words="Discover the latest updates on events in our faculty."
          className="text-xl md:text-2xl max-w-2xl"
        />
      </div>
      
      <div className="w-full max-w-7xl">
        <ExpandableCardDemo cards={events} />
      </div>
    </section>
  );
}
