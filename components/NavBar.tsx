import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-page/80 backdrop-blur-xl border-b border-border' : 'bg-transparent py-4'
      }`}>
        <div className="container flex justify-between items-center h-16">
          <div className="font-heading font-bold text-xl tracking-tight text-text-main flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            S.A.J.
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 items-center">
              <a href="#work" onClick={scrollToSection('work')} className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">{t.nav.work}</a>
              <a href="#experience" onClick={scrollToSection('experience')} className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">{t.nav.experience}</a>
              <a href="#about" onClick={scrollToSection('about')} className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">{t.nav.about}</a>
              <a href="#contact" onClick={scrollToSection('contact')} className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">{t.nav.contact}</a>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-accent/50 transition-all group"
                aria-label="Switch Language"
              >
                <Globe className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors" />
                <span className={`text-xs font-semibold ${language === 'en' ? 'text-accent' : 'text-text-muted'}`}>EN</span>
                <span className="text-xs text-border">/</span>
                <span className={`text-xs font-semibold ${language === 'es' ? 'text-accent' : 'text-text-muted'}`}>ES</span>
              </button>

              <button 
                className="md:hidden text-text-main"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-page pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-lg font-medium">
            <a href="#work" onClick={scrollToSection('work')} className="text-text-muted hover:text-accent">{t.nav.work}</a>
            <a href="#experience" onClick={scrollToSection('experience')} className="text-text-muted hover:text-accent">{t.nav.experience}</a>
            <a href="#about" onClick={scrollToSection('about')} className="text-text-muted hover:text-accent">{t.nav.about}</a>
            <a href="#contact" onClick={scrollToSection('contact')} className="text-text-muted hover:text-accent">{t.nav.contact}</a>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;