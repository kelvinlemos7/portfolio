import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

console.log("Projects carregando motion:", !!motion);

const projects = [
  {
    id: 1,
    title: "Bank System API",
    description: "API completa para gerenciar usuários, contas e transações bancárias, com histórico de operações e validações de saldo.",
    image: "https://plus.unsplash.com/premium_photo-1745612945275-fb9774a36236?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "FaskAPI", "MySQL"],
    github: "https://github.com/kelvinlemos7/bank-system",
    live: null,
    featured: true,
  },
  {
    id: 2,
    title: "Consulta de CEP",
    description: "Projeto criado em Python para consultar informações de endereço usando a API pública ViaCEP.",
    image: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9jYXRpb258ZW58MHx8MHx8fDA%3D",
    technologies: ["Python"],
    github: "https://github.com/kelvinlemos7/consulta-cep",
    live: null,
    featured: true,
  },
  {
    id: 3,
    title: "Sistema de Restaurante",
    description: "Sistema de pedidos de restaurante via terminal em Python. Permite escolher pratos e tamanhos, acumular o valor total e gerar um resumo final formatado.",
    image: "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    technologies: ["Python"],
    github: "https://github.com/kelvinlemos7/sistema-restaurante",
    live: null,
    featured: false,
  },
  {
    id: 4,
    title: "Locadora de Veículos",
    description: "Este projeto simula um sistema de locação de veículos utilizando modelagem relacional e comandos SQL.",
    image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["MySQL"],
    github: "https://github.com/kelvinlemos7/locadora-veiculos",
    live: null,
    featured: false,
  },
];

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projetos" className="relative py-32 bg-[#0A0A0A]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-4 block">
            Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projetos{' '}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              em destaque
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Uma seleção dos meus trabalhos mais recentes e impactantes
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.05] hover:border-purple-500/30 transition-all duration-500 ${
                project.featured ? 'md:row-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredId === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
                
                {/* Overlay on hover */}
                <AnimatePresence>
                  {hoveredId === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-purple-900/40 backdrop-blur-sm flex items-center justify-center gap-4"
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="p-3 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
        <Button
          asChild
          variant="outline"
          className="px-8 py-6 border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-500/50 rounded-full transition-all duration-300 group"
         >
          <a
          href="https://github.com/kelvinlemos7?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver todos os projetos
        <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </Button>
        </motion.div>
      </div>
    </section>
  );
}