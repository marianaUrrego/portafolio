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
      problem: "Permite gestionar información relacionada con medicamentos y sus respectivos compuestos, siguiendo el patrón repositorio y una arquitectura distribuida en capas.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "React"],
      image: "https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrZW5kJTIwZGV2ZWxvcG1lbnQlMjBjb2RlJTIwc2VydmVyfGVufDF8fHx8MTc3MjQ2NTI1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      codeUrl: "https://github.com/marianaUrrego/tadb_202510_ex04"
    },
    {
      id: 2,
      title: "Sistema de Gestión de Datos Hidrológicos",
      problem: "Solución para la gestión de datos hidrológicos, incluyendo la estructuración y limpieza de datos provenientes de embalses, fuentes hídricas y aportes hídricos en energía.",
      technologies: ["PostgreSQL", "MySQL", "Docker", "Git", "Railway"],
      image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZCUyMG1vZGVybnxlbnwxfHx8fDE3NzI1Mjc1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      codeUrl: "https://github.com/marianaUrrego/tadb_examen_02"
    },
    {
      id: 3,
      title: "Sistema de Pago de Nómina",
      problem: "Diseño de base de datos para hacer el cálculo de una nómina cada quincena.",
      technologies: ["PostgreSQL", "MySQL", "SQL", "Docker", "Git", "Clever Cloud"],
      image: "https://images.unsplash.com/photo-1760952851538-17a59f691efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBpbnRlZ3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNTI3NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      codeUrl: "https://github.com/marianaUrrego/tadb_examen_01"
    },
    {
      id: 4,
      title: "Portal de Noticias de Tecnología(CiberTrends)",
      problem: "Proyecto web de blog de noticias tecnológicas, tiene un panel de administración para gestionar artículos, comentarios y usuarios.",
      technologies: ["Laravel ", "Voyager", "Breeze", "MySQL", "PHP ", "Apache", "Git" ],
      image: "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NzI1MTIyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      codeUrl: "https://github.com/Joaquin9999/newsPortalPHP/tree/features"
    },
    {
      id: 5,
      title: "Prime Burger Restaurante - Página Web",
      problem: "Página web para un local de hamburguesas, desarrollada con el objetivo de proporcionar una experiencia de usuario moderna y funcional.",
      technologies: ["HTML", "CSS", "JavaScript", "Rollup", "Less", "Git"],
      image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMGFyY2hpdGVjdHVyZSUyMHN5c3RlbXxlbnwxfHx8fDE3NzI1Mjc1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "https://valensoto486.github.io/TallerPlataformas/",
      codeUrl: "https://github.com/valensoto486/TallerPlataformas/tree/prueba"
    },
    {
      id: 6,
      title: "Episodic — App Android",
      problem: "Aplicación Android nativa para explorar películas y series usando la API de TMDB.",
      technologies: ["Kotlin", "Jetpack Compose", "Hilt", "Git"],
      image: "https://images.unsplash.com/photo-1718630732291-3bc8de36b030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGF3cyUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3MjUyNzU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      codeUrl: "https://github.com/SebasSotoA/app_moviles_nativa"
    },
    {
      id: 7,
      title: "LukApp  — App Android",
      problem: "Aplicación pensada especialmente para estudiantes universitarios que buscan llevar el control de sus gastos de forma sencilla, rápida y sin depender de bancos o plataformas complejas.",
      technologies: ["React", "Vite", "Sass", "Git"],
      image: "https://images.unsplash.com/photo-1718630732291-3bc8de36b030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGF3cyUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3MjUyNzU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "#",
      codeUrl: "https://github.com/marianaUrrego/app_hibrida"
    },
    {
      id: 8,
      title: "Landing Page — Concurso de fotografía",
      problem: "Página web para un concurso de fotografía.",
      technologies: ["HTML", "CSS", "JavaScript", "Git"],
      image: "https://images.unsplash.com/photo-1718630732291-3bc8de36b030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGF3cyUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3MjUyNzU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      demoUrl: "https://samueluribe27.github.io/Taller1plataformas/",
      codeUrl: "https://github.com/samueluribe27/Taller1plataformas/tree/version-final"
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-[#240046] relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7B2CBF] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-[#E0AAFF]" style={{ fontWeight: 600 }}>
            Proyectos Destacados
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#9D4EDD] via-[#C77DFF] to-[#9D4EDD] mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" style={{ fontWeight: 400 }}>
            Soluciones tecnológicas que generan impacto real
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-gradient-to-br from-[#3C096C] to-[#5A189A] rounded-2xl overflow-hidden border border-[#9D4EDD]/20 hover:border-[#C77DFF] transition-all duration-300 hover:shadow-2xl hover:shadow-[#9D4EDD]/30 transform hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-[#240046]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3C096C] via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl text-white mb-3 group-hover:text-[#E0AAFF] transition-colors" style={{ fontWeight: 600 }}>
                  {project.title}
                </h3>

                <div className="mb-4">
                  <p className="text-sm text-[#9D4EDD] mb-2" style={{ fontWeight: 600 }}>Problema resuelto:</p>
                  <p className="text-sm text-gray-300 leading-relaxed" style={{ fontWeight: 300 }}>
                    {project.problem}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-[#9D4EDD] mb-2" style={{ fontWeight: 600 }}>Tecnologías:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#7B2CBF] text-[#E0AAFF] rounded-full text-xs border border-[#9D4EDD]/30"
                        style={{ fontWeight: 500 }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                
                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#9D4EDD] hover:bg-[#C77DFF] text-white rounded-lg transition-all duration-300 text-sm"
                    style={{ fontWeight: 600 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#7B2CBF] hover:bg-[#9D4EDD] text-white rounded-lg transition-all duration-300 border border-[#9D4EDD]/50 text-sm"
                    style={{ fontWeight: 600 }}
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 text-center"
        >
          <Code2 className="w-12 h-12 mx-auto text-[#9D4EDD] opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
