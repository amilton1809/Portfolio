"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaReact, FaNodeJs, FaDatabase, FaGit, FaProjectDiagram } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagem de Programação",
      icon: <FaCode className="text-3xl text-secondary" />,
      skills: [
        { name: "JavaScript", level: 50 }
      ]
    },
    {
      title: "Biblioteca",
      icon: <FaReact className="text-3xl text-secondary" />,
      skills: [
        { name: "React.JS", level: 27 },
        { name: "Framer Motion", level: 20 }
      ]
    },
    {
      title: "Ferramenta de Versionamento",
      icon: <FaGit className="text-3xl text-secondary" />,
      skills: [
        { name: "Git", level: 70 },
        { name: "GitHub", level: 80 }
      ]
    },
    {
      title: "Ambiente de execução",
      icon: <FaNodeJs className="text-3xl text-secondary" />,
      skills: [
        { name: "Node.JS", level: 35 }
      ]
    },
    {
      title: "Banco de Dados",
      icon: <FaDatabase className="text-3xl text-secondary" />,
      skills: [
        { name: "SQL", level: 25 },
        { name: "SQLite", level: 15 }
      ]
    },
    {
      title: "FrameWork",
      icon: <FaProjectDiagram className="text-3xl text-secondary" />,
      skills: [
        { name: "Next.JS", level: 25 },
        { name: "Scrum", level: 50 },
        { name: "Kanban", level: 50 }
      ]
    }
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
    <section id="habilidades" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Minhas Habilidades
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-card"
              variants={item}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-secondary h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
