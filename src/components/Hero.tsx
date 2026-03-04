import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B2CBF] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5A189A] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-[#C77DFF] via-[#9D4EDD] to-[#E0AAFF] bg-clip-text text-transparent"
            style={{ fontWeight: 700 }}
          >
            Mariana Lizette Urrego Montoya
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#E0AAFF] mb-2" style={{ fontWeight: 600 }}>
              Desarrolladora Backend
            </h2>
            <p className="text-lg md:text-xl text-[#C77DFF]" style={{ fontWeight: 500 }}>
              con experiencia en frontend moderno
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{ fontWeight: 400 }}
          >
            Estudiante de octavo semestre de Ingeniería de Sistemas e Informática con experiencia en desarrollo de 
            aplicaciones usando Python, React y AWS. Con conocimientos en desarrollo de aplicaciones web y mobile, 
            control de versiones con Git. Interesada en roles de desarrollo de software.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="#projects"
              className="group px-8 py-4 bg-[#9D4EDD] hover:bg-[#C77DFF] text-white rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-[#9D4EDD]/50 transform hover:scale-105"
              style={{ fontWeight: 600 }}
            >
              Ver proyectos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-[#7B2CBF] hover:bg-[#9D4EDD] text-white rounded-xl transition-all duration-300 border border-[#9D4EDD]/50 hover:border-[#C77DFF] shadow-lg transform hover:scale-105"
              style={{ fontWeight: 600 }}
            >
              Contactar
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com/marianaUrrego"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#3C096C] hover:bg-[#5A189A] rounded-lg transition-all duration-300 text-[#E0AAFF] hover:text-white transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mariana-lizette-urrego-montoya-808bb7396/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#3C096C] hover:bg-[#5A189A] rounded-lg transition-all duration-300 text-[#E0AAFF] hover:text-white transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:marianalizetteu@gmail.com"
              className="p-3 bg-[#3C096C] hover:bg-[#5A189A] rounded-lg transition-all duration-300 text-[#E0AAFF] hover:text-white transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
