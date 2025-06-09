"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Entre em Contato
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          {/* Contact Form */}
          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-text-dark/10 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-white"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-text-dark/10 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-white"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-text-dark/10 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-white"
                  placeholder="Assunto da mensagem"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-text-dark/10 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-white"
                  placeholder="Sua mensagem aqui..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="btn-primary flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane className="mr-2" /> Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-text-dark/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary/20 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">Email</h4>
                    <a href="mailto:a.milton18@hotmail.com" className="text-white hover:text-secondary transition-colors">
                      a.milton18@hotmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary/20 p-3 rounded-full mr-4">
                    <FaPhone className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">Telefone</h4>
                    <a href="tel:+5511959946164" className="text-white hover:text-secondary transition-colors">
                      +55 (11) 95994-6164
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary/20 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">Localização</h4>
                    <p className="text-white">
                      São Paulo, SP - Brasil
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm font-medium text-gray-300 mb-4">Horário de Disponibilidade</h4>
                <p className="text-white">
                  Segunda a Sexta: 7h às 18h
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
