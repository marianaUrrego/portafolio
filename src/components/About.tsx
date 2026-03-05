import { motion } from "motion/react";
import { Code2, Users, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SoftSkill = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

export function About() {
  const softSkills: SoftSkill[] = [
    {
      Icon: Code2,
      title: "Resolución de problemas",
      description:
        "Me gusta analizar los problemas con calma y buscar soluciones claras y eficientes cuando aparecen retos",
    },
    {
      Icon: Users,
      title: "Trabajo en equipo",
      description:
        "Disfruto trabajar en equipo, compartir ideas y colaborar para encontrar mejores soluciones en los proyectos",
    },
    {
      Icon: TrendingUp,
      title: "Aprendizaje continuo",
      description:
        "Siempre estoy aprendiendo nuevas tecnologías y buscando mejorar mis habilidades como desarrolladora",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about__header"
        >
          <h2 className="about__title">Sobre mí</h2>
          <div className="about__divider" />
        </motion.div>

        <div className="about__content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about__textBlock"
          >
            <h3 className="about__headline">
              Backend Developer con visión Full Stack
            </h3>

            <div className="about__paragraphs">
              <p className="about__paragraph">
                Mi interés principal está en el{" "}
                <span className="about__highlight about__highlight--hover">
                  desarrollo backend
                </span>
                , donde he trabajado en la construcción de APIs REST utilizando Python y
                en la gestión de bases de datos. Me encuentro fortaleciendo constantemente
                mis habilidades en diseño de servicios, arquitectura de aplicaciones y
                desarrollo en la nube.
              </p>

              <p className="about__paragraph">
                También tengo experiencia desarrollando interfaces con{" "}
                <span className="about__highlight about__highlight--primary">
                  React, TypeScript y JavaScript
                </span>
                , para crear interfaces de usuario intuitivas y responsivas. Esta visión
                full stack me ayuda a entender cómo se conectan las distintas partes de
                una aplicación.
              </p>

              <p className="about__paragraph">
                Me gusta aprender nuevas tecnologías, perfeccionar las que ya conozco y
                participar en proyectos donde pueda seguir creciendo como desarrolladora.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about__skills"
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="about__skillCard"
              >
                <div className="about__skillRow">
                  <div className="about__skillIconWrap">
                    <skill.Icon className="about__skillIcon" aria-hidden="true" />
                  </div>

                  <div className="about__skillBody">
                    <h4 className="about__skillTitle">{skill.title}</h4>
                    <p className="about__skillDescription">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}