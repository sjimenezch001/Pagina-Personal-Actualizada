import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const Icon = project.icon;

  return (
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <article className="relative flex flex-col h-full p-8 bg-card border border-border rounded-2xl transition-all duration-300 hover:border-accent/40 hover:bg-card-hover overflow-hidden">
        
        {/* Top Gradient Line on Hover - Metallic Orange Fusion */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-orange-300 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

        <header className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-xl bg-page border border-border text-text-muted group-hover:text-accent group-hover:border-accent/30 group-hover:scale-110 transition-all duration-300">
            <Icon className="w-6 h-6" strokeWidth={2} />
          </div>
          <div className="text-text-muted group-hover:text-white transition-colors">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </header>
        
        <h3 className="text-xl font-bold font-heading mb-3 text-text-main group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-100 transition-all duration-300">{project.title}</h3>
        <p className="text-sm text-text-muted mb-8 leading-relaxed flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[11px] font-mono font-medium text-text-muted px-2.5 py-1 rounded-md bg-page border border-border/50 group-hover:border-accent/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </a>
  );
};

export default ProjectCard;