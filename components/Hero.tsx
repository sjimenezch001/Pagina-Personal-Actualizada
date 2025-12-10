import React from 'react';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import SectionFade from './SectionFade';
import { useLanguage } from './LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative overflow-hidden">
      {/* Background Gradients - Warmer, Orange Tones */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-orange-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-[900px]">
          <SectionFade delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-accent/30 text-accent-light text-xs font-semibold mb-8 shadow-[0_0_15px_rgba(255,109,0,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              {t.hero.status}
            </div>
          </SectionFade>
          
          <SectionFade delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[1.05] mb-8 tracking-tight text-white">
              {/* Metallic Gradient Fusion Effect */}
              {t.hero.titleStart} <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-accent">{t.hero.titleAccent}</span>{t.hero.titleEnd}
            </h1>
          </SectionFade>
          
          <SectionFade delay={300}>
            <p className="text-lg md:text-xl text-text-muted max-w-[640px] mb-10 leading-relaxed font-light">
              {t.hero.description}
            </p>
          </SectionFade>
          
          <SectionFade delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a 
                href="#work" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-page rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,109,0,0.2)]"
              >
                {t.hero.btnProject} <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="pdf/C.V.S.Jimenez.pdf" 
                target="_blank" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border border-border text-text-main rounded-lg font-medium hover:border-accent/50 hover:text-accent transition-all duration-200 group"
              >
                {t.hero.btnCv} <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </SectionFade>

          <SectionFade delay={500}>
            <div className="grid grid-cols-3 gap-8 border-t border-border pt-8 max-w-[500px]">
              <div>
                <div className="text-3xl font-bold font-heading text-white mb-1">{t.hero.stat1}</div>
                <div className="text-sm text-text-muted font-medium">{t.hero.stat1Label}</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-heading text-white mb-1">{t.hero.stat2}</div>
                <div className="text-sm text-text-muted font-medium">{t.hero.stat2Label}</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-heading text-white mb-1">{t.hero.stat3}</div>
                <div className="text-sm text-text-muted font-medium">{t.hero.stat3Label}</div>
              </div>
            </div>
          </SectionFade>
        </div>
      </div>
    </section>
  );
};

export default Hero;