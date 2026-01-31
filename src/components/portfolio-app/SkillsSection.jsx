import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', color: '#E34F26', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS', color: '#1572B6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript', color: '#F7DF1E', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Python', color: '#3776AB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'React', color: '#61DAFB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', color: '#339933', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind', color: '#06B6D4', icon: 'https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg' },
  { name: 'Vite', color: '#646CFF', icon: 'https://icon.icepanel.io/Technology/svg/Vite.svg' },
  { name: 'FastAPI', color: '#009688', icon: 'https://icon.icepanel.io/Technology/svg/FastAPI.svg' },
  { name: 'MySQL', color: '#4479A1', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
];

const duplicatedSkills = [...skills, ...skills];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-4 block">
            Habilidades
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tecnologias que{' '}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              domino
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ferramentas e tecnologias que utilizo para criar soluções incríveis
          </p>
        </motion.div>

        {}
        <div className="hidden md:block relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

          <div className="flex gap-6 animate-scroll">
            {duplicatedSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Mobile grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:hidden grid grid-cols-2 gap-4 mt-12"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]"
            >
              <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
              <span className="text-white font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            gap: 1.5rem;
            width: max-content;
            animation: scroll 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <div className="flex-shrink-0 w-48 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 cursor-pointer">
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5"
        >
          <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-white font-semibold">{skill.name}</h3>
        </div>
      </div>
    </div>
  );
}
