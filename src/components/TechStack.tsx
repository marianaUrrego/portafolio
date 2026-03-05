import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  Server,
  Database,
  Code2,
  FileCode,
  Boxes,
  GitBranch,
  Github,
  Container,
  Layers,
} from "lucide-react";

type TechItem = {
  name: string;
  Icon: LucideIcon;
  iconSize?: "lg" | "md";
};

export function TechStack() {
  const backendTechs: TechItem[] = [
    { name: "Python", Icon: Code2, iconSize: "lg" },
    { name: "REST APIs", Icon: Server, iconSize: "lg" },
    { name: "Laravel", Icon: Boxes, iconSize: "lg" },
    { name: "PostgreSQL", Icon: Database, iconSize: "lg" },
    { name: "MySQL", Icon: Database, iconSize: "lg" },
    { name: "MongoDB", Icon: Database, iconSize: "lg" },
  ];

  const frontendTechs: TechItem[] = [
    { name: "React", Icon: Code2 },
    { name: "TypeScript", Icon: FileCode },
    { name: "JavaScript", Icon: FileCode },
    { name: "Sass", Icon: Layers },
  ];

  const tools: TechItem[] = [
    { name: "Git", Icon: GitBranch },
    { name: "GitHub", Icon: Github },
    { name: "Docker", Icon: Container },
    { name: "Laragon", Icon: Server },
  ];

  return (
    <section id="stack" className="tech-stack">
      {/* Background blob */}
      <div className="tech-stack__bg" aria-hidden="true">
        <div className="tech-stack__blob" />
      </div>

      <div className="tech-stack__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="tech-stack__header"
        >
          <h2 className="tech-stack__title">Stack Tecnológico</h2>
          <div className="tech-stack__divider" />
        </motion.div>

        {/* Backend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="tech-stack__group tech-stack__group--backend"
        >
          <div className="tech-stack__groupHeader">
            <h3 className="tech-stack__groupTitle">Backend</h3>
            <p className="tech-stack__groupSubtitle tech-stack__groupSubtitle--strong">
              Enfoque Principal
            </p>
          </div>

          <div className="tech-stack__grid tech-stack__grid--backend">
            {backendTechs.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="tech-stack__item"
              >
                <div className="tech-stack__card tech-stack__card--primary">
                  <div className="tech-stack__cardBody">
                    <div className="tech-stack__iconWrap tech-stack__iconWrap--primary">
                      <tech.Icon
                        className={
                          tech.iconSize === "lg"
                            ? "tech-stack__icon tech-stack__icon--lg"
                            : "tech-stack__icon"
                        }
                        aria-hidden="true"
                      />
                    </div>
                    <h4 className="tech-stack__name">{tech.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="tech-stack__group"
        >
          <div className="tech-stack__groupHeader">
            <h3 className="tech-stack__groupTitle tech-stack__groupTitle--sm">
              Frontend
            </h3>
            <p className="tech-stack__groupSubtitle">Complementario</p>
          </div>

          <div className="tech-stack__grid tech-stack__grid--compact">
            {frontendTechs.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="tech-stack__card tech-stack__card--compact"
              >
                <div className="tech-stack__compactIcon">
                  <tech.Icon className="tech-stack__icon" aria-hidden="true" />
                </div>
                <p className="tech-stack__compactName">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="tech-stack__group"
        >
          <div className="tech-stack__groupHeader">
            <h3 className="tech-stack__groupTitle tech-stack__groupTitle--sm">
              Herramientas
            </h3>
          </div>

          <div className="tech-stack__grid tech-stack__grid--compact tech-stack__grid--tools">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="tech-stack__card tech-stack__card--compact"
              >
                <div className="tech-stack__compactIcon">
                  <tool.Icon className="tech-stack__icon" aria-hidden="true" />
                </div>
                <p className="tech-stack__compactName">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}