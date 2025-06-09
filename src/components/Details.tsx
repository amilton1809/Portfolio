"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaLightbulb } from 'react-icons/fa';

const Details = () => {
  const timelineItems = [
    {
      id: 1,
      icon: <FaGraduationCap className="text-secondary text-xl" />,
      title: "Formação em Desenvolvimento Web",
      period: "2024 - 2026",
      description: "Graduação em Análise e Desenvolvimento de Sistemas com foco em tecnologias front-end e experiência do usuário."
    },
    {
      id: 2,
      icon: <FaCertificate className="text-secondary text-xl" />,
      title: "Certificação React Developer",
      period: "2025",
      description: "Certificação profissional em desenvolvimento React, abrangendo hooks avançados, context API e otimização de performance."
    },
    {
      id: 3,
      icon: <FaBriefcase className="text-secondary text-xl" />,
      title: "Certificação em UX/UI Design",
      period: "2025",
      description: "Curso de design de interfaces e experiência do usuário, integrando conhecimentos de desenvolvimento com princípios de design."
    },
    // {
    //   id: 4,
    //   icon: <FaBriefcase className="text-secondary text-xl" />,
    //   title: "Desenvolvedor Front-End Pleno",
    //   period: "2023 - Atual",
    //   description: "Liderança técnica em projetos de front-end, implementação de arquiteturas escaláveis e mentoria de desenvolvedores júnior."
    // },
    // {
    //   id: 5,
    //   icon: <FaLightbulb className="text-secondary text-xl" />,
    //   title: "Especialização em UX/UI Design",
    //   period: "2024",
    //   description: "Curso de especialização em design de interfaces e experiência do usuário, integrando conhecimentos de desenvolvimento com princípios de design."
    // }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="detalhes" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Minha Jornada & Expertise
        </motion.h2>
        
        <div className="flex flex-col md:flex-row mt-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="sticky top-20"
            >
              <h3 className="text-2xl font-semibold mb-4">Trajetória Profissional</h3>
              <p className="text-gray-300">
                Estou em constante evolução na minha jornada como desenvolvedor front-end. A cada experiência, aprendo um pouco mais e busco me tornar um profissional cada vez mais completo, unindo conhecimentos técnicos com atenção à experiência do usuário e visão de futuro.
              </p>
              <div className="mt-6">
                <a href="#contato" className="btn-primary">Entre em Contato</a>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-2/3 md:pl-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {timelineItems.map((item) => (
              <motion.div 
                key={item.id} 
                className="timeline-item"
                variants={itemAnimation}
              >
                <div className="flex items-center mb-2">
                  {item.icon}
                  <h3 className="text-xl font-semibold ml-2">{item.title}</h3>
                </div>
                <div className="text-sm text-secondary mb-2">{item.period}</div>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Details;
