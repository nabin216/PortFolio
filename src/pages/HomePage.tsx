import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Research from '../components/sections/Research';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import AIChatbot from '../components/sections/AIChatbot';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Research />
      <Experience />
      <Contact />
      <AIChatbot />
    </Layout>
  );
};

export default HomePage; 