import SectionTitle from '@/components/SectionTitle';
import { GraduationCap } from 'lucide-react';
import React from 'react';

const EducationPage = () => {
    return (
        <section id="education" className="section-pad">
          <div className="container-wide">
            <SectionTitle label="Education" title="The foundation behind my work." description="My academic background is helping me build a strong base in computing and problem-solving." />
            <div className="ml-3 border-l-2 border-line pl-8">

              <div className="relative">
                <div className="absolute -left-[41px] top-1 grid h-8 w-8 place-items-center rounded-full border-4 border-ink bg-brand text-ink">
                  <GraduationCap size={14} />
                </div>

                <div className="rounded-3xl border border-line bg-card p-6 transition hover:border-brand/40 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">

                    <div>
                        <span className="rounded-full bg-brand/10 px-3 py-1.5 text-xs font-bold text-brand">Undergraduate · Current

                        </span>
                        <h3 className="mt-4 text-xl font-extrabold text-title">B.Sc. in Computer Science and Engineering</h3><p className="mt-2 font-semibold text-body">International Islamic University Chittagong (IIUC)
                            </p>
                            </div>
                            <span className="rounded-xl border border-line bg-navy px-3 py-2 text-sm font-bold text-muted">Spring 2023 intake
                                </span>
                                </div>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-body">Coursework and project work have introduced me to programming, software development, databases, algorithms, and research. I am continuing to strengthen these fundamentals through hands-on projects.</p>
                </div>
              </div>

              <div className="relative mt-7">
                <div className="absolute -left-[41px] top-1 grid h-8 w-8 place-items-center rounded-full border-4 border-ink bg-success text-ink"><GraduationCap size={14} /></div>

                <div className="rounded-3xl border border-line bg-card p-6 transition hover:border-success/40 sm:p-8">
                  <span className="rounded-full bg-success/10 px-3 py-1.5 text-xs font-bold text-success">Higher Secondary Certificate

                  </span>
                  <h3 className="mt-4 text-xl font-extrabold text-title">HSC — GPA 5.00</h3>
                  <p className="mt-2 text-sm text-body">Hazera-Taju Degree College, Chittagong</p>
                  <p className="mt-4 text-sm leading-7 text-body">Completed higher secondary education before starting my undergraduate studies in Computer Science and Engineering.</p>
                </div>
              </div>

            </div>
          </div>
        </section>
    );
};

export default EducationPage;
