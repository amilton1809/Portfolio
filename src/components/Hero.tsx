"use client";

import React from 'react';
import { FaGithub, FaInstagram, FaFacebook, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background wave */}
      <div className="absolute bottom-[-200px] left-0 w-full overflow-hidden">
        {/* Onda normal */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#38BDF8"
            fillOpacity="0.2"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        {/* Onda invertida (ajustada para não empurrar o conteúdo) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="-mt-[0px]"
        >
          <path
            transform="scale(1, -1) translate(0, -320)"
            fill="#38BDF8"
            fillOpacity="0.2"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>


      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Profile Image */}
          <motion.div
            className="mb-8 md:mb-0 md:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-secondary shadow-lg shadow-accent/20 float-animation">
              <img
                src="/Amilton.jpg"
                alt="José Amilton"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "../img/Amilton.jpg";
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="text-center md:text-left md:w-2/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              José Amilton
            </h1>
            <h2 className="text-xl md:text-2xl text-secondary mb-6">
              Desenvolvedor Front-End
            </h2>
            <p className="text-lg mb-8 max-w-2xl">
              Transformando ideias em experiências digitais excepcionais. Insight em React, Next.js e interfaces modernas.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6 mb-8">
              <motion.a
                href="https://www.instagram.com/a.milton18/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-secondary hover:text-accent transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://github.com/amilton1809"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-secondary hover:text-accent transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              {/* <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-secondary hover:text-accent transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook />
              </motion.a> */}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="#projetos"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Projetos
              </motion.a>
              <motion.a
                href="/curriculo.pdf"
                className="btn-secondary flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="mr-2" /> Baixar Currículo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
