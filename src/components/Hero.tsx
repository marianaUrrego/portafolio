import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="hero" aria-label="Introducción">
      {/* Fondo con orbes */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--one" />
        <div className="hero__orb hero__orb--two" />
      </div>

      <div className="hero__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero__conten"
        >
          {/* Nombre */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hero__name"
            style={{ fontWeight: 700 }}
          >
            Mariana Lizette Urrego Montoya
          </motion.h1>

          {/* Rol */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero__role"
          >
            <h2 className="hero__roleTitle">
              Desarrolladora Backend
            </h2>
            <p className="hero__roleSubtitle">
              con experiencia en frontend moderno
            </p>
          </motion.div>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hero__description"
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
            className="hero__actions"
          >
            <a
              href="#projects"
              className="hero__btn hero__btn--primary"
            >
              Ver proyectos
              <ArrowRight className="hero__btnIcon" />
            </a>
            <a
              href="#contact"
              className="hero__btn hero__btn--secondary"
            >
              Contactar
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hero__social"
          >
            <a
              href="https://github.com/marianaUrrego"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__socialLink"
              aria-label="GitHub"
            >
              <Github className="hero__socialIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/mariana-lizette-urrego-montoya-808bb7396/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__socialLink"
              aria-label="LinkedIn"
            >
              <Linkedin className="hero__socialIcon" />
            </a>
            <a
              href="mailto:marianalizetteu@gmail.com"
              className="hero__socialLink"
              aria-label="Email"
            >
              <Mail className="hero__socialIcon" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
