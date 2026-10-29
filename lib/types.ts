import type { StaticImageData } from "next/image";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string | StaticImageData,
  category: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  challenges: string[];
  improvements: string[];
}