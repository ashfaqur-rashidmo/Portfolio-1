import React from "react";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Download,
} from "lucide-react";
import Image from "next/image";
import { socialLinks } from "../../lib/data";

const Hero = () => {
  return (
    <main>
      <section
        id="home"
        className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40"
      >
        {/* Background effects */}
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />

        <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-accent/[0.08] blur-3xl" />

        <div className="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-brand/[0.08] blur-3xl" />

        <div className="container-wide relative grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
          {/* Left Section */}
          <div>
            <div className="eyebrow rise-1">
              <span className="eyebrow-dot" />
              Available for learning &amp; collaboration
            </div>

            <h1 className="rise-2 mt-7 max-w-3xl text-5xl font-black leading-[1.04] tracking-[-.05em] text-title sm:text-6xl lg:text-[68px]">
              Full Stack{" "}
              <span className="gradient-text">
                Web Developer
              </span>
            </h1>

            <p className="rise-3 mt-6 max-w-2xl text-lg leading-8 text-body">
              Hi, I&apos;m{" "}
              <strong className="font-bold text-title">
                MD. Ashfaqur Rashid
              </strong>{" "}
              — a CSE student and aspiring full stack developer who
              enjoys building useful, thoughtful, and user-friendly
              web applications.
            </p>

            {/* Action Buttons */}
            <div className="rise-3 mt-9 flex flex-wrap gap-3">
              <a
                href="/projects"
                className="btn btn-primary"
              >
                Explore my work
                <ArrowUpRight size={17} />
              </a>

              <a
                href="/RESUME.pdf"
                download
                className="btn btn-outline"
              >
                <Download size={16} />
                Download resume
              </a>
            </div>

            {/* Social Links and Location */}
            <div className="rise-4 mt-9 flex flex-wrap items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-navy/60 px-4 py-2.5 text-sm font-semibold text-muted transition hover:border-brand hover:text-brand"
                >
                  <Icon size={16} />
                  {label}
                  <ArrowUpRight size={13} />
                </a>
              ))}

              <span className="inline-flex items-center gap-2 px-2 text-sm text-muted">
                <MapPin size={15} />
                Chittagong, Bangladesh
              </span>
            </div>

            
          </div>

          {/* Right Section: Profile Image */}
          <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center">
            <div className="pointer-events-none absolute inset-8 rounded-full bg-accent/8 blur-3xl" />

            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-line shadow-soft sm:h-80 sm:w-80">
              <Image
                src="/Ashfaq14.jpg"
                alt="MD. Ashfaqur Rashid"
                width={320}
                height={320}
                priority
                quality={100}
                sizes="(max-width: 640px) 256px, 320px"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
