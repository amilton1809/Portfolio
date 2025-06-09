import React from 'react';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Details from '@/components/Details';
import Mechanics from '@/components/Mechanics';
// import Events from '@/components/Events';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Details />
      <Projects />
      <Mechanics />
      {/* <Events /> */}
      <Contact />
      
      <footer className="bg-text-dark/30 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} José Amilton. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
