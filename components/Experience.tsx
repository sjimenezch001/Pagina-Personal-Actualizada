import React from 'react';
import { EXPERIENCE } from '../constants';
import { useLanguage } from './LanguageContext';
import SectionFade from './SectionFade';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const { language, t } = useLanguage();
  const experiences = EXPERIENCE[language];

  return (
    <section id="experience" className="container py-24">
      <SectionFade>
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-6 h-6 text-accent" />
          <h2 className="text-3xl font-bold font-heading text-text-main">{t.experience.title}</h2>
        </div>
      </SectionFade>

      <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <SectionFade key={index} delay={index * 100}>
            <div className="relative pl-8 md:pl-12">
              {/* Dot */}
              <div className="absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full bg-page border-2 border-accent" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-text-main">{exp.role}</h3>
                <span className="text-sm font-mono text-accent bg-accent/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <div className="text-base font-medium text-text-muted mb-3">{exp.company}</div>
              <p className="text-text-muted/80 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          </SectionFade>
        ))}
      </div>
    </section>
  );
};

export default Experience;