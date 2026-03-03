import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

console.log("Blog carregando motion:", !!motion);

const posts = [
  {
    id: 1,
    title: "Saí de Python pra Java, e foi mais fácil do que eu imaginava",
    excerpt: "A prova de que a linguagem é apenas detalhe de sintaxe quando sua base de lógica está fortalecida.",
    date: "14 Fev 2026",
    readTime: "5 min",
    category: "Linguagens",
    image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7428495048054509568/"
  },
  {
    id: 2,
    title: "Vale a pena estudar Java em 2026?",
    excerpt: "Uma análise direta sobre o mercado atual e a relevância da linguagem para este ano.",
    date: "12 Fev 2026",
    readTime: "5 min",
    category: "Mercado",
    image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7427739601030610945/"
  },
  {
    id: 3,
    title: "Git na prática: erros que quase todo iniciante comete",
    excerpt: "Aprenda os principais erros de Git que iniciantes cometem e como corrigi-los rapidamente.",
    date: "31 Jan 2026",
    readTime: "4 min",
    category: "Versionamento",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7423403955323305984/"  
  },
];


export default function BlogSection() {
  return (
    <section id="blog" className="relative py-32 bg-[#0A0A0A]">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <span className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-4 block">
              Blog
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Artigos{' '}
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                recentes
              </span>
            </h2>
          </div>
          <motion.a
            href="#"
            className="group flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mt-6 md:mt-0"
            whileHover={{ x: 5 }}
          >
            Ver todos os artigos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => {
                if (post.link) {
                  window.open(post.link, "_blank");
                }
              }}
            >
              {/* Image */}
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent" />

                {/* Category badge */}
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div>
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                {/* Read more link */}
                <span className="inline-flex items-center gap-2 text-sm text-purple-400 group-hover:text-purple-300 transition-colors">
                  Ler artigo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
