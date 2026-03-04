import { motion } from "motion/react";
import { Code2, Users, TrendingUp } from "lucide-react";

export function About() {
  const softSkills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Resolución de problemas",
      description: "Me gusta analizar los problemas con calma y buscar soluciones claras y eficientes cuando aparecen retos"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Trabajo en equipo",
      description: "Disfruto trabajar en equipo, compartir ideas y colaborar para encontrar mejores soluciones en los proyectos"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Aprendizaje continuo",
      description: "Siempre estoy aprendiendo nuevas tecnologías y buscando mejorar mis habilidades como desarrolladora"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-[#240046]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#E0AAFF]" style={{ fontWeight: 600 }}>
            Sobre mí
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#9D4EDD] to-[#C77DFF] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl mb-6 text-white" style={{ fontWeight: 600 }}>
              Backend Developer con visión Full Stack
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Mi interés principal está en el <span className="text-[#C77DFF]" style={{ fontWeight: 600 }}>desarrollo backend</span>, 
                donde he trabajado en la construcción de APIs REST utilizando Python y en la gestión de bases de datos. 
                Me encuentro fortaleciendo constantemente mis habilidades en diseño de servicios, arquitectura de aplicaciones y desarrollo en la nube.
              </p>
              <p>
                También tengo experiencia desarrollando interfaces con <span className="text-[#9D4EDD]" style={{ fontWeight: 600 }}>React, TypeScript y JavaScript</span>, 
                para crear interfaces de usuario intuitivas y responsivas. Esta visión 
                full stack me ayuda a entender cómo se conectan las distintas partes de una aplicación.
              </p>
              <p>
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
            className="space-y-6"
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gradient-to-br from-[#3C096C] to-[#5A189A] p-6 rounded-xl border border-[#9D4EDD]/20 hover:border-[#9D4EDD]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#9D4EDD]/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#7B2CBF] rounded-lg text-[#E0AAFF]">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-xl text-white mb-2" style={{ fontWeight: 600 }}>
                      {skill.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                      {skill.description}
                    </p>
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
