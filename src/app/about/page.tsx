import React from 'react';

import SectionTitle from '@/components/SectionTitle';


import {
  ArrowRight,
  Code2, Layers3,  Heart, Sparkles,
} from "lucide-react";

const AboutPage = () => {
    return (
       <section id="about" className="section-pad">
          <div className="container-wide">
            <SectionTitle label="A little about me" title="Developer in progress. Problem-solver at heart." description="I like understanding how things work, then turning that understanding into something people can use." />
            <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
              <div className="space-y-5 text-[15px] leading-8 text-body">
                <p>I&apos;m studying Computer Science and Engineering at International Islamic University Chittagong. My programming journey started with learning the fundamentals and gradually moved toward building practical web applications.</p>
                <p>Today, I enjoy working across the frontend and backend: shaping responsive interfaces, connecting APIs, organizing data, and fixing the small details that make an application feel complete. I learn best by building projects, testing ideas, and improving the code after I understand what can be better.</p>
                <p>Outside programming, I enjoy cricket, football, and gardening. These interests help me step away from the screen and return with a clearer head. I value consistency, curiosity, and simple solutions over unnecessary complexity.</p>
                <div className="pt-2"><a href="/contact" className="inline-flex items-center gap-2 font-extrabold text-brand transition hover:text-accent">Let&apos;s connect <ArrowRight size={16} /></a></div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Code2, title: "Build with purpose", text: "I prefer projects that solve a clear problem and are easy to use." },
                  { icon: Layers3, title: "Learn by doing", text: "I strengthen my skills by building, debugging, and iterating." },
                  { icon: Sparkles, title: "Keep it simple", text: "Readable code and clear interfaces beat unnecessary complexity." },
                  { icon: Heart, title: "Beyond the screen", text: "Cricket, football, and gardening keep me balanced." },
                ].map(({ icon: Icon, title, text }) => <div key={title} className="rounded-3xl border border-line bg-card p-6 transition hover:border-brand/40">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand/10 text-brand"><Icon size={20} /></span>
                  <h3 className="mt-5 font-extrabold text-title">{title}</h3><p className="mt-2 text-sm leading-6 text-body">{text}</p>
                </div>)}
              </div>
            </div>
          </div>
        </section>
    );
};

export default AboutPage;
