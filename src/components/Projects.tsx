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
  demoLabel: "Demo" | "Docs";
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Sistema de Gestión de Información de Medicamentos",
      problem:
        "Permite gestionar información relacionada con medicamentos y sus respectivos compuestos, siguiendo el patrón repositorio y una arquitectura distribuida en capas.",
      technologies: ["Python", "Flask", "MongoDB", "API REST"],
      image:
        "https://i.ibb.co/r29H192p/tadbx-04.png",
      demoUrl: "https://github.com/marianaUrrego/tadb_202510_ex04/tree/main#readme",
      codeUrl: "https://github.com/marianaUrrego/tadb_202510_ex04",
      demoLabel: "Docs",
    },
    {
      id: 2,
      title: "Sistema de Gestión de Datos Hidrológicos",
      problem:
        "Solución para la gestión de datos hidrológicos, incluyendo la estructuración y limpieza de datos provenientes de embalses, fuentes hídricas y aportes hídricos en energía.",
      technologies: ["PostgreSQL", "MySQL", "SQL", "Docker", "Git", "Railway"],
      image:
        "https://i.ibb.co/j9BhqmZZ/tadb-02.png",
      demoUrl: "https://github.com/marianaUrrego/tadb_examen_02#readme",
      codeUrl: "https://github.com/marianaUrrego/tadb_examen_02",
      demoLabel: "Docs",
    },
    {
      id: 3,
      title: "Sistema de Pago de Nómina",
      problem: "Diseño de base de datos para hacer el cálculo de una nómina cada quincena.",
      technologies: ["PostgreSQL", "MySQL", "SQL", "Docker", "Git", "Clever Cloud"],
      image:
        "https://i.ibb.co/YH7VF0Y/tadb-01.png",
      demoUrl: "https://github.com/marianaUrrego/tadb_examen_01#readme",
      codeUrl: "https://github.com/marianaUrrego/tadb_examen_01",
      demoLabel: "Docs",
    },
    {
      id: 4,
      title: "Portal de Noticias de Tecnología(CiberTrends)",
      problem:
        "Proyecto web de blog de noticias tecnológicas, tiene un panel de administración para gestionar artículos, comentarios y usuarios.",
      technologies: ["Laravel ", "Voyager", "Breeze", "MySQL", "PHP ", "Apache", "Git"],
      image:
        "https://i.ibb.co/FQJz4Wq/cibertrends.png",
      demoUrl: "https://github.com/Joaquin9999/newsPortalPHP#readme",
      codeUrl: "https://github.com/Joaquin9999/newsPortalPHP",
      demoLabel: "Docs",
    },
    {
      id: 5,
      title: "Episodic — App Android",
      problem: "Aplicación Android nativa para explorar películas y series usando la API de TMDB.",
      technologies: ["Kotlin", "Jetpack Compose", "Hilt", "Git"],
      image:
        "https://i.ibb.co/bjvYf9Lg/episodic.png",
      demoUrl: "https://youtube.com/shorts/GeqDcUSImdI?feature=share",
      codeUrl: "https://github.com/SebasSotoA/app_moviles_nativa",
      demoLabel: "Demo",
    },
    {
      id: 6,
      title: "LukApp  — App Android",
      problem:
        "Aplicación pensada para estudiantes universitarios que buscan llevar el control de sus gastos de forma sencilla, rápida y sin depender de bancos o plataformas complejas.",
      technologies: ["React", "Vite", "Sass", "Git", "Capacitor"],
      image:
        "https://i.ibb.co/QvGcCCrP/Luk-App-diagrama.png",
      demoUrl: "https://youtube.com/shorts/FZosauEvjAk?feature=share",
      codeUrl: "https://github.com/marianaUrrego/app_hibrida",
      demoLabel: "Demo",
    },
    {
      id: 7,
      title: "Landing Page — Concurso de fotografía",
      problem: "Página web para un concurso de fotografía.",
      technologies: ["HTML", "CSS", "JavaScript", "Git"],
      image:
        "https://i.ibb.co/DfPTSVRk/photography.png",
      demoUrl: "https://samueluribe27.github.io/Taller1plataformas/",
      codeUrl: "https://github.com/samueluribe27/Taller1plataformas/tree/version-final",
      demoLabel: "Demo",
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
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__btn projects__btn--primary"
                  >
                    <ExternalLink className="projects__btnIcon" />
                    {project.demoLabel}
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