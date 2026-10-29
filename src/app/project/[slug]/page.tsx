import React from 'react';

import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink, Lightbulb, Wrench } from 'lucide-react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { notFound } from "next/navigation";
import { projects } from '../../../../lib/data';
import Image from 'next/image';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

const ProjectDetailsPage = async ({ params }: Props) => {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

   return (
   <main className="min-h-screen pb-20 pt-32">
        <div className="container-wide">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-muted transition hover:text-brand">
          <ArrowLeft size={16} /> Back to all projects</Link>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.05fr_.95fr]">

            <div>
              <span className="eyebrow"><span className="eyebrow-dot" />{project.category}
              </span>

              <p className="mt-6 text-xs font-extrabold uppercase tracking-[.18em] text-brand">{project.tagline}</p>

              <h1 className="mt-3 text-4xl font-black tracking-[-.05em] text-title sm:text-6xl">{project.name}</h1>

              <p className="mt-6 text-lg leading-8 text-body">
                {project.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {
                  project.liveUrl !== "#" ? <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">View live project <ExternalLink size={15} /></a> : <span className="btn cursor-default border border-line bg-navy font-bold text-muted">Live link to be added <ExternalLink size={15} />
                </span>
                }
                {
                   project.githubUrl !== "#" ? <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline"><FaGithub size={16} /> GitHub repository</a> : <span className="btn cursor-default border border-line bg-navy font-semibold text-muted"><FaGithub size={16} /> Repository link to be added</span>
                   }
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-line bg-card p-2 shadow-soft">
              <Image 
              src={project.image} 
              alt={`${project.name} preview`} 
              height={500}
              width={500}
              className="w-full rounded-2xl bg-navy object-cover" />
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
            <section className="rounded-3xl border border-line bg-card p-7">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-title"><Wrench className="text-brand" size={20} /> Technology stack</h2>
              <p className="mt-2 text-sm leading-6 text-muted">Main tools and technologies used in this project.</p>
              <div className="mt-5 flex flex-wrap gap-2">

                {project.stack.map((item) => <span key={item} className="rounded-xl border border-line bg-navy px-3 py-2 text-sm font-bold text-body">{item}</span>)}</div>
            </section>
            <section className="rounded-3xl border border-line bg-card p-7">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-title"><CheckCircle2 className="text-success" size={20} /> Challenges faced</h2>
              <ul className="mt-5 space-y-3">{project.challenges.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-body"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />{item}</li>)}</ul>
            </section>
          </div>
          <section className="mt-6 rounded-3xl border border-line bg-card p-7 sm:p-9">
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-title"><Lightbulb className="text-accent" size={21} /> Future improvements</h2>
            <p className="mt-2 text-sm leading-6 text-muted">Potential next steps to make this project more complete and useful.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">{project.improvements.map((item, index) => <div key={item} className="rounded-2xl bg-navy p-5"><span className="text-xs font-black text-brand">0{index + 1}</span><p className="mt-3 text-sm font-semibold leading-6 text-body">{item}</p></div>)}</div>
          </section>
          <div className="mt-8 rounded-3xl border border-line bg-gradient-to-r from-brand/10 via-transparent to-accent/10 p-7 text-title sm:flex sm:items-center sm:justify-between"><div><h2 className="text-xl font-extrabold">Want to know more?</h2><p className="mt-2 text-sm text-body">Reach out if you would like to discuss this project.</p></div>
          <Link href="/contact" className="btn btn-primary mt-5 sm:mt-0">Contact me <ArrowUpRight size={15} />
          </Link>
          </div>
        </div>
      </main>
    );
};


export default ProjectDetailsPage;
