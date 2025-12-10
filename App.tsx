import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import SectionFade from './components/SectionFade';
import Experience from './components/Experience';
import { SKILLS, PROJECTS, SOCIAL_LINKS } from './constants';
import { LanguageProvider, useLanguage } from './components/LanguageContext';

function MainContent() {
  const { language, t } = useLanguage();
  
  const currentSkills = SKILLS[language];
  const currentProjects = PROJECTS[language];
  const mlProjects = currentProjects.filter(p => p.category === 'Data Science');
  const daProjects = currentProjects.filter(p => p.category === 'Data Analysis');

  useEffect(() => {
    document.title = `Santiago A. Jiménez | ${language === 'en' ? 'Data Scientist' : 'Científico de Datos'}`;
  }, [language]);

  // Load Tally script for dynamic form resizing
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="font-body text-text-main bg-page min-h-screen selection:bg-accent/20 selection:text-white">
      <NavBar />
      
      <main>
        <Hero />

        {/* Tech Stack / Skills Section */}
        <section className="container mb-32">
          <SectionFade delay={500}>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
              <p className="mb-8 font-heading font-bold text-xl text-center md:text-left">{t.skills.title}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
                {currentSkills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-2 rounded-lg bg-page border border-border group-hover:border-accent/50 transition-all duration-300">
                      <skill.icon className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" />
                    </div>
                    <span className="font-medium text-sm text-text-muted group-hover:text-white transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionFade>
        </section>

        {/* Experience Section */}
        <Experience />

        {/* Work Section */}
        <section id="work" className="container py-24">
          <SectionFade>
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">{t.work.title}</h2>
                <p className="text-text-muted max-w-lg">
                  Selected projects demonstrating end-to-end capabilities from raw data to deployed intelligence.
                </p>
              </div>
            </div>
          </SectionFade>

          {/* ML Projects */}
          <div className="mb-8">
            <span className="text-xs font-bold tracking-wider uppercase text-accent mb-6 block flex items-center gap-2">
              <span className="w-8 h-[1px] bg-accent"></span>
              {t.work.badgeDS}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mlProjects.map((project, index) => (
                <SectionFade key={project.title} delay={index * 100}>
                  <ProjectCard project={project} />
                </SectionFade>
              ))}
            </div>
          </div>

          {/* DA Projects */}
          <div className="mt-20">
            <span className="text-xs font-bold tracking-wider uppercase text-accent mb-6 block flex items-center gap-2">
              <span className="w-8 h-[1px] bg-accent"></span>
              {t.work.badgeDA}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {daProjects.map((project, index) => (
                <SectionFade key={project.title} delay={index * 100}>
                  <ProjectCard project={project} />
                </SectionFade>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-32 border-t border-border">
          <div className="grid grid-cols-1 gap-12">
            <SectionFade>
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">{t.about.title}</h2>
                <div className="space-y-6 text-text-muted text-lg leading-relaxed font-light">
                  <p>
                    {t.about.p1}
                  </p>
                  <p className="border-l-2 border-accent pl-6 italic text-text-main/80">
                    {t.about.p2Start} <strong className="text-white font-semibold not-italic">{t.about.p2Bold}</strong>{t.about.p2End}
                  </p>
                </div>
              </div>
            </SectionFade>
            
            <SectionFade delay={200} className="w-full">
              {/* Aspect ratio 21/9 for panoramic view. Grayscale applied strictly. */}
              <div className="relative rounded-2xl overflow-hidden border border-border aspect-[21/9] group bg-card shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-page via-transparent to-transparent opacity-40 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Data Scientist workspace" 
                  className="w-full h-full object-cover grayscale transition-all duration-700 scale-100 group-hover:scale-105"
                />
              </div>
            </SectionFade>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="container py-24">
          <SectionFade>
            <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:border-accent/40 transition-colors shadow-2xl">
               {/* Decorative glow */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
               
               <div className="text-center mb-10">
                 <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">{t.contactSection.title}</h2>
                 <p className="text-text-muted text-lg leading-relaxed max-w-xl mx-auto">
                   {t.contactSection.text}
                 </p>
               </div>

               {/* Tally Embed */}
               <div className="w-full -mx-1 relative">
                <iframe 
                  src="https://tally.so/embed/KYz8l7?alignLeft=1&hideTitle=1&dynamicHeight=1"
                  data-tally-src="https://tally.so/embed/KYz8l7?alignLeft=1&hideTitle=1&dynamicHeight=1" 
                  loading="eager" 
                  width="100%" 
                  height="276" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Contact Form"
                >
                </iframe>
               </div>
            </div>
          </SectionFade>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30">
        <div className="container py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="font-heading font-bold text-xl mb-2 text-white">SANTIAGO A. JIMÉNEZ</div>
              <p className="text-text-muted text-sm max-w-xs">
                {t.footer.rights}
              </p>
            </div>

            <div className="flex gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent hover:scale-110 transition-all p-2 rounded-full border border-transparent hover:border-accent/20 hover:bg-card"
                  aria-label={link.platform}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}