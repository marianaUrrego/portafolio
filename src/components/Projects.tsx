import { motion } from "motion/react";
import { ExternalLink, Github, Code2 } from "lucide-react";

interface Project {
  id: number;
  title: string;
  problem: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Sistema de Gestión de Inventarios",
      problem:
        "Permite gestionar información relacionada con medicamentos y sus respectivos compuestos, siguiendo el patrón repositorio y una arquitectura distribuida en capas.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "React"],
      image:
        "https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrZW5kJTIwZGV2ZWxvcG1lbnQlMjBjb2RlJTIwc2VydmVyfGVufDF8fHx8MTc3MjQ2NTI1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      codeUrl: "https://github.com/marianaUrrego/tadb_202510_ex04",
    },
    {
      id: 2,
      title: "Sistema de Gestión de Datos Hidrológicos",
      problem:
        "Solución para la gestión de datos hidrológicos, incluyendo la estructuración y limpieza de datos provenientes de embalses, fuentes hídricas y aportes hídricos en energía.",
      technologies: ["PostgreSQL", "MySQL", "Docker", "Git", "Railway"],
      image:
        "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZCUyMG1vZGVybnxlbnwxfHx8fDE3NzI1Mjc1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      codeUrl: "https://github.com/marianaUrrego/tadb_examen_02",
    },
    {
      id: 3,
      title: "Sistema de Pago de Nómina",
      problem: "Diseño de base de datos para hacer el cálculo de una nómina cada quincena.",
      technologies: ["PostgreSQL", "MySQL", "SQL", "Docker", "Git", "Clever Cloud"],
      image:
        "https://images.unsplash.com/photo-1760952851538-17a59f691efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBpbnRlZ3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNTI3NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      codeUrl: "https://github.com/marianaUrrego/tadb_examen_01",
    },
    {
      id: 4,
      title: "Portal de Noticias de Tecnología(CiberTrends)",
      problem:
        "Proyecto web de blog de noticias tecnológicas, tiene un panel de administración para gestionar artículos, comentarios y usuarios.",
      technologies: ["Laravel ", "Voyager", "Breeze", "MySQL", "PHP ", "Apache", "Git"],
      image:
        "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NzI1MTIyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      codeUrl: "https://github.com/Joaquin9999/newsPortalPHP/tree/features",
    },
    {
      id: 5,
      title: "Prime Burger Restaurante - Página Web",
      problem:
        "Página web para un local de hamburguesas, desarrollada con el objetivo de proporcionar una experiencia de usuario moderna y funcional.",
      technologies: ["HTML", "CSS", "JavaScript", "Rollup", "Less", "Git"],
      image:
        "https://images.unsplash.com/photo-1633412802994-5c058f151b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMGFyY2hpdGVjdHVyZSUyMHN5c3RlbXxlbnwxfHx8fDE3NzI1Mjc1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "https://valensoto486.github.io/TallerPlataformas/",
      codeUrl: "https://github.com/valensoto486/TallerPlataformas/tree/prueba",
    },
    {
      id: 6,
      title: "Episodic — App Android",
      problem: "Aplicación Android nativa para explorar películas y series usando la API de TMDB.",
      technologies: ["Kotlin", "Jetpack Compose", "Hilt", "Git"],
      image:
        "https://images.unsplash.com/photo-1718630732291-3bc8de36b030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGF3cyUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3MjUyNzU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      codeUrl: "https://github.com/SebasSotoA/app_moviles_nativa",
    },
    {
      id: 7,
      title: "LukApp  — App Android",
      problem:
        "Aplicación pensada especialmente para estudiantes universitarios que buscan llevar el control de sus gastos de forma sencilla, rápida y sin depender de bancos o plataformas complejas.",
      technologies: ["React", "Vite", "Sass", "Git"],
      image:
        "https://images.unsplash.com/photo-1718630732291-3bc8de36b030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGF3cyUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3MjUyNzU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      codeUrl: "https://github.com/marianaUrrego/app_hibrida",
    },
    {
      id: 8,
      title: "Landing Page — Concurso de fotografía",
      problem: "Página web para un concurso de fotografía.",
      technologies: ["HTML", "CSS", "JavaScript", "Git"],
      image:
        "https://images.unsplash.com/photo-1718630732291-3bc8de36b030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGF3cyUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3MjUyNzU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "https://samueluribe27.github.io/Taller1plataformas/",
      codeUrl: "https://github.com/samueluribe27/Taller1plataformas/tree/version-final",
    },
  ];

  return (
    <section id="projects" className="projects">
      {/* Background effect */}
      <div className="projects__bg">
        <div className="projects__orb" />
      </div>

      <div className="projects__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="projects__header"
        >
          <h2 className="projects__title">Proyectos Destacados</h2>
          <div className="projects__divider" />
          <p className="projects__subtitle">Soluciones tecnológicas que generan impacto real</p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="projects__card"
            >
              {/* Image */}
              <div className="projects__media">
                <img src={project.image} alt={project.title} className="projects__img" />
                <div className="projects__imgOverlay" />
              </div>

              {/* Content */}
              <div className="projects__body">
                <h3 className="projects__cardTitle">{project.title}</h3>

                <div className="projects__block">
                  <p className="projects__label">Problema resuelto:</p>
                  <p className="projects__text">{project.problem}</p>
                </div>

                <div className="projects__block">
                  <p className="projects__label">Tecnologías:</p>
                  <div className="projects__tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="projects__tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="projects__actions">
                  <a href={project.demoUrl} className="projects__btn projects__btn--primary">
                    <ExternalLink className="projects__btnIcon" />
                    Demo
                  </a>
                  <a href={project.codeUrl} className="projects__btn projects__btn--secondary">
                    <Github className="projects__btnIcon" />
                    Código
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="projects__bottom"
        >
          <Code2 className="projects__bottomIcon" />
        </motion.div>
      </div>
    </section>
  );
}