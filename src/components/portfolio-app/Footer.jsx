import React from 'react';
import { motion } from 'framer-motion';
import kelvinFoto from "../../assets/kelvin.jpeg";
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

console.log("Footer carregando motion:", !!motion);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.05]">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
              <img
              src={kelvinFoto}
              alt="Kelvin Kauan"
              className='w-full h-full object-cover'
              />
            </div>
            <div>
              <span className="text-white font-semibold block">Kelvin Lemos</span>
              <span className="text-gray-500 text-sm">Engenheiro de Software</span>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/kelvinlemos7" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/kelvinkauan/" },
              { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=kelvinkauan17@gmail.com&su=Assunto%20aqui&body=Mensagem%20aqui" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300"
              >
                <social.icon className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm font-medium">Voltar ao topo</span>
          </motion.button>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500"
        >
          <p className="text-sm text-gray-400">
           © {new Date().getFullYear()} Kelvin Kauan — São Paulo, Brazil.
          </p>
          
          <nav className="flex items-center gap-6">
            <a href="#sobre" className="hover:text-purple-400 transition-colors">Sobre</a>
            <a href="#projetos" className="hover:text-purple-400 transition-colors">Projetos</a>
            <a href="#blog" className="hover:text-purple-400 transition-colors">Blog</a>
            <a href="#contato" className="hover:text-purple-400 transition-colors">Contato</a>
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}