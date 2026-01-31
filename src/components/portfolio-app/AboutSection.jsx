import React from 'react';
import { motion } from 'framer-motion';
import kelvinFoto from "../../assets/kelvin.jpeg";
import { Code2, Server, DatabaseIcon, Zap } from 'lucide-react';

console.log("About carregando motion:", !!motion);

const highlights = [
  {
    icon: Code2,
    title: "Front-end",
    description: "React, JavaScript, Tailwind CSS",
  },
  {
    icon: Server,
    title: "Back-end",
    description: "Node.js, Python, FastAPI",
  },
  {
    icon: DatabaseIcon,
    title: "Database",
    description: "MySQL · integração com APIs e back-end",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Otimização e boas práticas",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-32 bg-[#0A0A0A]">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - AVATAR */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">

              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Middle ring */}
              <motion.div
                className="absolute inset-4 rounded-full border border-purple-500/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-400 rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${i * 45}deg) translateX(140px) translateY(-50%)`,
                    }}
                  />
                ))}
              </motion.div>

              {/* INNER PHOTO */}
              <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-purple-900/50 to-violet-900/50 backdrop-blur-sm border border-purple-500/20">
                <img
                  src={kelvinFoto}
                  alt="Kelvin Kauan"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-sm text-purple-300">Back-end focused</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-violet-500/20 backdrop-blur-sm rounded-full border border-violet-500/30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <span className="text-sm text-violet-300">APIs & sistemas</span>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-4 block">
              Sobre mim
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Transformando ideias em{" "}
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                sistemas eficientes
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Estudante de Engenharia de Software, interessado em back-end, arquitetura de sistemas
                e no impacto que boas decisões técnicas geram a longo prazo.
            </p>

            <p className="text-gray-500 leading-relaxed mb-10">
                Busco evoluir com consistência, construir uma base sólida e transformar aprendizado
                em soluções reais.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
                >
                  <item.icon className="w-6 h-6 text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-white font-medium mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
