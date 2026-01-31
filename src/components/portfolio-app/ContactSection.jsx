import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/kelvinlemos7",
    username: "@kelvinlemos7",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kelvinkauan/",
    username: "/in/kelvinkauan",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:kelvinkauan17@gmail.com",
    username: "kelvinkauan17@gmail.com",
  },
];

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error | null

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xpqrqywb", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="relative py-32 bg-[#0A0A0A]">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-4 block">
            Contato
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              conversar?
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Me conte sobre sua ideia ou projeto. Eu respondo rápido.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome
                  </label>
                  <Input
                    name="name"
                    required
                    placeholder="Seu nome"
                    className="bg-white/[0.03] border-white/[0.1] text-white placeholder:text-gray-500 h-12 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    name="email"
                    required
                    placeholder="seu@email.com"
                    className="bg-white/[0.03] border-white/[0.1] text-white placeholder:text-gray-500 h-12 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Conte-me sobre seu projeto..."
                    className="bg-white/[0.03] border-white/[0.1] text-white placeholder:text-gray-500 rounded-xl resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-14 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                <Send className="w-5 h-5 mr-2" />
                {loading ? "Enviando..." : "Enviar mensagem"}
              </Button>

              {status === "success" && (
                <p className="text-green-400 text-sm">
                  Mensagem enviada com sucesso 🚀
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Erro ao enviar. Tente novamente.
                </p>
              )}
            </form>
          </motion.div>

          {/* INFO + SOCIAL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Localização */}
            <div className="mb-10">
              <div className="flex items-center gap-3 text-gray-400 mb-2">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>São Paulo, Brasil</span>
              </div>
              <p className="text-gray-500 text-sm ml-8">
                Disponível para trabalho remoto
              </p>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-6">
                Me encontre em
              </h3>

              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-purple-500/30 transition-all"
                >
                  <div className="p-3 rounded-lg bg-purple-500/10">
                    <social.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <span className="block text-white font-medium">
                      {social.label}
                    </span>
                    <span className="text-sm text-gray-500">
                      {social.username}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* BADGE — NÃO REMOVER */}
            <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-400 font-medium">
                Disponível para novos projetos
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
