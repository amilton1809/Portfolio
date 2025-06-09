"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Clean Services",
      description: "Empresa que trabalha com a remoção de sujidades visíveis e superficiais, além de ácaros e bactérias.",
      image: "/a7maclean.jpg",
      technologies: ["HTML", "CSS", "Javascript"],
      liveLink: "https://a7maclean.vercel.app/",
      codeLink: "https://github.com/amilton1809/A7maclean"
    },
    {
      id: 2,
      title: "Sistema de Gerenciamento de Estoque",
      description: "Aplicação completa para gerenciamento de estoque de roupas, integrando frontend, backend e banco de dados. O sistema permite o cadastro, edição e exclusão de produtos, controle de quantidades e registro de vendas.",
      image: "/relogios.jpg",
      technologies: ["React", "CSS", "JavaScript", "Espress", "MongoDB"],
      liveLink: "https://joias-relogios-site.vercel.app/",
      codeLink: "https://github.com/amilton1809/joias-relogios-site"
    },
    // {
    //   id: 3,
    //   title: "Dashboard Analítico",
    //   description: "Dashboard interativo para visualização de dados de vendas e métricas de desempenho, com gráficos dinâmicos e filtros personalizáveis.",
    //   image: "https://via.placeholder.com/600x400?text=Dashboard+Analitico",
    //   technologies: ["React", "Chart.js", "Node.js", "Express"],
    //   liveLink: "#",
    //   codeLink: "#"
    // },
    // {
    //   id: 4,
    //   title: "App de Tarefas",
    //   description: "Aplicativo de gerenciamento de tarefas com funcionalidades de categorização, priorização e lembretes por notificação.",
    //   image: "https://via.placeholder.com/600x400?text=App+de+Tarefas",
    //   technologies: ["React Native", "Redux", "Firebase"],
    //   liveLink: "#",
    //   codeLink: "#"
    // }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projetos" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Meus Projetos
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              variants={item}
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/600x400?text=${project.title.replace(/ /g, '+')}`;
                  }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-secondary hover:text-accent transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Ver Projeto
                  </a>
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-secondary hover:text-accent transition-colors"
                  >
                    <FaGithub className="mr-2" /> Ver Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
