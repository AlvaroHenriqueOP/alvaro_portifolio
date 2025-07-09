"use client";

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('../components/Hero'));
const About = dynamic(() => import('../components/About'), { ssr: false });
const Skills = dynamic(() => import('../components/Skills'), { ssr: false });
const Services = dynamic(() => import('../components/Services'), { ssr: false });
const Projects = dynamic(() => import('../components/Projects'), { ssr: false });
const Contact = dynamic(() => import('../components/Contact'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

const ClientWrapper = ({ heroImage }: { heroImage: React.ReactNode }) => {
  return (
    <>
      <section id="hero">
        <Hero>{heroImage}</Hero>
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="sobre">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default ClientWrapper;
