import React from 'react';

import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Project } from "../../lib/types";



const ProjectCard = ({project} : {project: Project}) => {
    return (
       <article className="project-card overflow-hidden rounded-3xl border border-line bg-card">

      <Link href={`/project/${project.slug}`} className="group relative block overflow-hidden bg-navy">

        <Image src={project.image}
        alt={`${project.name} project preview`}
        width={500}
        height={300}
        className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />

        <span className="absolute left-4 top-4 rounded-full border border-line bg-ink/80 px-3 py-1.5 text-xs font-bold text-body backdrop-blur">{project.category}</span>

        <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full border border-line bg-ink/80 text-title backdrop-blur transition group-hover:border-brand group-hover:bg-brand group-hover:text-ink">
          <ArrowUpRight size={18} />
          </span>
      </Link>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[.15em] text-brand">{project.tagline}</p>

        <h3 className="mt-2 text-xl font-extrabold tracking-tight text-title">{project.name}</h3>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-body">{project.description}</p>


        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((item) => <span key={item} className="rounded-lg border border-line bg-navy px-2.5 py-1.5 text-xs font-semibold text-muted">{item}</span>)}
        </div>


        <div className="mt-6 border-t border-line pt-5">
          <Link href={`/project/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-extrabold text-title transition hover:text-brand">View details <ArrowUpRight size={16} />
          </Link>

          {
            project.liveUrl !== "#" && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="ml-5 inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-brand">Live site <ExternalLink size={13} />
          </a>
          }
        </div>
      </div>
    </article>
    );
};

export default ProjectCard;