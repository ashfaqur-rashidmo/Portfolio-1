import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import React from 'react';
import { projects } from '../../../lib/data';

const projectsPage = () => {
    const count = String(projects.length).padStart(2, "0");
    return (
        <section id="projects" className="section-pad">
          <div className="container-wide">
            <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <SectionTitle label="Selected projects" title="A few things I have been building." description="Explore the problem, technology stack, development challenges, and next steps for each project." />
              <span className="inline-flex items-center gap-2 text-sm font-bold text-muted"><span className="h-2 w-2 rounded-full bg-success" /> {count} projects featured</span>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
          </div>
        </section>
    );
};

export default projectsPage;
