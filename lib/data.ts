import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import BazarDor from "../public/Bazar-Dor.png";
import Wanderlust from "../public/Wanderlust.png";

import type { Project } from "./types";


export const skillGroups = [
  {
    title: "Frontend",
    subtitle: "Building clean, responsive interfaces",
    skills: [
      { name: "HTML & CSS", level: 85 },
      { name: "JavaScript", level: 72 },
      { name: "React", level: 68 },
      { name: "Next.js", level: 62 },
      { name: "TypeScript", level: 55 }
    ]
  },
  {
    title: "Backend & data",
    subtitle: "Learning how applications work behind the UI",
    skills: [
      { name: "Node.js / Express", level: 55 },
      { name: "Python", level: 70 },
      { name: "Django", level: 48 },
      { name: "MongoDB", level: 52 },
      { name: "REST APIs", level: 62 }
    ]
  },
  {
    title: "Tools & workflow",
    subtitle: "Tools I use to build and ship projects",
    skills: [
      { name: "Git & GitHub", level: 70 },
      { name: "VS Code", level: 85 },
      { name: "Tailwind CSS", level: 72 },
      { name: "Vercel", level: 65 },
      { name: "Figma basics", level: 35 }
    ]
  }
];



export const socialLinks = [
  { label: "GitHub", href: "https://github.com/ashfaqur-rashidmo", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: FaLinkedin },
  {label: "Twitter", href: "https://twitter.com/ashfaqur_rashid", icon: CiTwitter},
  {label: "Facebook", href: "https://www.facebook.com/ashfaqur.rashid", icon: CiFacebook}
];



export const projects: Project[] = [
  {
    slug: "fitlog",
    name: "FITLOG",
    tagline: "Fitness tracking web app",
    category: "Web application",
    image: "/fitlog.svg",
    description: "A fitness web application for exploring exercises, saving workouts, and organizing a personal training plan in one place.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    liveUrl: "https://fit-log-next-app.vercel.app/",
    githubUrl: "https://github.com/ashfaqur-rashidmo/Fit-Log-Next-App",
    challenges: [
      "Organizing exercise data from a REST API into clear, reusable UI components.",
      "Managing saved exercises and a daily plan without making the interface complicated.",
      "Handling loading states and keeping the layout usable on small screens."
    ],
    improvements: [
      "Add user accounts and cloud-synced workout plans.",
      "Add workout history and progress charts.",
      "Improve accessibility and add more detailed exercise filters."
    ]
  },
  {
    slug: "bazardor",
    name: "BazarDor",
    tagline: "Bengali shopping experience",
    category: "E-commerce UI",
    image:  BazarDor ,
    description: "A Bengali-language shopping interface designed to help visitors browse products through a clear, approachable storefront.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Better Auth"],
    liveUrl: "https://bazar-dor-next-app.vercel.app/",
    githubUrl: "https://github.com/ashfaqur-rashidmo/Bazar-Dor-Next-App",
    challenges: [
      "Building a readable Bengali interface with consistent spacing and typography.",
      "Organizing product browsing and navigation into a predictable user journey.",
      "Working through framework-specific rendering and date-related behavior."
    ],
    improvements: [
      "Deploy the finished project and add the live URL here.",
      "Connect product data to a production database.",
      "Add order tracking and a more complete checkout experience if required."
    ]
  },
  {
    slug: "Bangla-News-24",
    name: "Bangla-News-24",
    tagline: "News portal project",
    category: "Frontend",
    image: "/images/worknexus.svg",
    description: "A job portal concept focused on browsing opportunities and providing a structured entry point for job seekers.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    liveUrl: "https://bangla-news-24-2x74.vercel.app/",
    githubUrl: "https://github.com/ashfaqur-rashidmo/Bangla-News-24",
    challenges: [
      "Connecting a Next.js frontend to a separate Django backend.",
      "Keeping authentication endpoints and frontend form behavior consistent.",
      "Structuring the project so frontend and backend responsibilities stay separate."
    ],
    improvements: [
      "Deploy the frontend and backend and add their live links.",
      "Add job search filters and saved vacancies.",
      "Improve form validation and add tests for authentication flows."
    ]
  },
  {
    slug: "Wanderlust",
    name: "Wanderlust",
    tagline: "Travel blog project",
    category: "Full Stack",
    image: Wanderlust,
    description: "A travel blog concept focused on sharing experiences and providing a structured entry point for travelers.",
    stack: ["Next.js", "Typescript", "Tailwind CSS", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
    challenges: [
      "Connecting a Next.js frontend to a separate Django backend.",
      "Keeping authentication endpoints and frontend form behavior consistent.",
      "Structuring the project so frontend and backend responsibilities stay separate."
    ],
    improvements: [
      "Deploy the frontend and backend and add their live links.",
      "Add job search filters and saved vacancies.",
      "Improve form validation and add tests for authentication flows."
    ]
  },
];