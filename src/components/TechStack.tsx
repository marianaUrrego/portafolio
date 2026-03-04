import { motion } from "motion/react";
import { Server, Database, Code2, FileCode, Boxes, GitBranch, Github, Container,Layers } from "lucide-react";

export function TechStack() {
  const backendTechs = [
    { name: "Python", icon: <Code2 className="w-8 h-8" /> },
    { name: "REST APIs", icon: <Server className="w-8 h-8" /> },
    { name: "Laravel", icon: <Boxes className="w-8 h-8" /> },
    { name: "PostgreSQL", icon: <Database className="w-8 h-8" /> },
    { name: "MySQL", icon: <Database className="w-8 h-8" /> },
    { name: "MongoDB", icon: <Database className="w-8 h-8" /> }
  ];

  const frontendTechs = [
    { name: "React", icon: <Code2 className="w-7 h-7" /> },
    { name: "TypeScript", icon: <FileCode className="w-7 h-7" /> },
    { name: "JavaScript", icon: <FileCode className="w-7 h-7" /> },
    { name: "Sass", icon: <Layers className="w-7 h-7" /> }
  ];

  const tools = [
    { name: "Git", icon: <GitBranch className="w-7 h-7" /> },
    { name: "GitHub", icon: <Github className="w-7 h-7" /> },
    { name: "Docker", icon: <Container className="w-7 h-7" /> },
    { name: "Laragon", icon: <Server className="w-7 h-7" /> }
  ];

  return (
    <section id="stack" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#5A189A] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#E0AAFF]" style={{ fontWeight: 600 }}>
            Stack Tecnológico
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#9D4EDD] to-[#C77DFF] mx-auto rounded-full" />
        </motion.div>

        {/* Backend - Principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl text-white mb-3" style={{ fontWeight: 600 }}>
              Backend
            </h3>
            <p className="text-[#C77DFF]" style={{ fontWeight: 500 }}>Enfoque Principal</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {backendTechs.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-[#3C096C] to-[#5A189A] p-8 rounded-2xl border border-[#9D4EDD]/30 hover:border-[#C77DFF] transition-all duration-300 hover:shadow-2xl hover:shadow-[#9D4EDD]/30 transform hover:scale-105">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-[#7B2CBF] rounded-xl mb-4 text-[#E0AAFF] group-hover:bg-[#9D4EDD] transition-colors">
                      {tech.icon}
                    </div>
                    <h4 className="text-xl text-white" style={{ fontWeight: 600 }}>
                      {tech.name}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Frontend - Secundario */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl text-white mb-2" style={{ fontWeight: 600 }}>
              Frontend
            </h3>
            <p className="text-[#9D4EDD]" style={{ fontWeight: 400 }}>Complementario</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {frontendTechs.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#3C096C] p-6 rounded-xl border border-[#7B2CBF]/50 hover:border-[#9D4EDD] transition-all duration-300 text-center hover:shadow-lg hover:shadow-[#7B2CBF]/20 transform hover:scale-105"
              >
                <div className="flex justify-center mb-3 text-[#C77DFF]">
                  {tech.icon}
                </div>
                <p className="text-white" style={{ fontWeight: 500 }}>
                  {tech.name}
                </p>
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
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl text-white mb-2" style={{ fontWeight: 600 }}>
              Herramientas
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#3C096C] p-6 rounded-xl border border-[#7B2CBF]/50 hover:border-[#9D4EDD] transition-all duration-300 text-center hover:shadow-lg hover:shadow-[#7B2CBF]/20 transform hover:scale-105"
              >
                <div className="flex justify-center mb-3 text-[#C77DFF]">
                  {tool.icon}
                </div>
                <p className="text-white" style={{ fontWeight: 500 }}>
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}