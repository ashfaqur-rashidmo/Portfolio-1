import React from 'react';

import SectionTitle from '@/components/SectionTitle';

import { skillGroups } from '../../../lib/data';
import {
  Code2, Layers3, Rocket,
} from "lucide-react";

const tileStyles = [
  "bg-brand/10 text-brand",
  "bg-accent/10 text-accent",
  "bg-success/10 text-success",
];

const SkillsPage = () => {
    return (
        <section id="skills" className="section-pad">
          <div className="container-wide">
            <SectionTitle label="My toolkit" title="Skills I use to bring ideas to life." description="A practical snapshot of the technologies I am learning and using in projects. The levels are editable estimates, not formal test scores." centered />
            <div className="grid gap-5 lg:grid-cols-3">
              {skillGroups.map((group, index) => <div key={group.title} className="rounded-3xl border border-line bg-card p-6 transition hover:border-brand/40">
                <div className="flex items-center justify-between"><span className={`grid h-12 w-12 place-items-center rounded-2xl ${tileStyles[index] ?? tileStyles[0]}`}>{index === 0 ? <Code2 size={22} /> : index === 1 ? <Layers3 size={22} /> : <Rocket size={22} />}</span><span className="text-xs font-bold text-muted">0{index + 1}</span></div>
                <h3 className="mt-5 text-xl font-extrabold text-title">{group.title}</h3><p className="mt-1 text-sm text-muted">{group.subtitle}</p>
                <div className="mt-7 space-y-5">{group.skills.map((skill) => <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between gap-3 text-sm"><span className="font-semibold text-body">{skill.name}</span><span className="text-xs font-bold text-muted">{skill.level}%</span></div>
                  <div className="skill-track"><div className="skill-fill" style={{ width: `${skill.level}%` }} /></div>
                </div>)}</div>
              </div>)}
            </div>
          </div>
        </section>
    );
};

export default SkillsPage;
