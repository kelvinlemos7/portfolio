import React, { useEffect } from 'react';
import HeroSection from './components/portfolio-app/HeroSection.jsx';
import AboutSection from './components/portfolio-app/AboutSection.jsx';
import SkillsSection from './components/portfolio-app/SkillsSection.jsx';
import ProjectsSection from './components/portfolio-app/ProjectsSection.jsx';
import BlogSection from './components/portfolio-app/BlogSection.jsx';
import ContactSection from './components/portfolio-app/ContactSection.jsx';
import Footer from './components/portfolio-app/Footer.jsx';

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
