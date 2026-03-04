import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#5A189A] rounded-full blur-[100px]" />
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
            Formación Académica
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#9D4EDD] to-[#C77DFF] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#3C096C] to-[#5A189A] p-8 md:p-10 rounded-2xl border border-[#9D4EDD]/30 hover:border-[#C77DFF] transition-all duration-300 hover:shadow-2xl hover:shadow-[#9D4EDD]/30"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#7B2CBF] rounded-xl flex items-center justify-center text-[#E0AAFF] group-hover:bg-[#9D4EDD] transition-colors">
                  <GraduationCap className="w-8 h-8" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl text-white mb-3" style={{ fontWeight: 600 }}>
                  Ingeniería de Sistemas e Informática
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-[#C77DFF]">
                    <Calendar className="w-5 h-5" />
                    <p style={{ fontWeight: 500 }}>Octavo semestre • 2022 - 2026 (Expected)</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#C77DFF]">
                    <MapPin className="w-5 h-5" />
                    <p style={{ fontWeight: 500 }}>Universidad Pontificia Bolivariana sede Medellín</p>
                  </div>
                </div>

                <div className="bg-[#240046]/50 p-6 rounded-xl border border-[#7B2CBF]/30">
                  <h4 className="text-lg text-[#E0AAFF] mb-3" style={{ fontWeight: 600 }}>
                    Áreas de especialización:
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2" style={{ fontWeight: 300 }}>
                      <span className="text-[#9D4EDD] mt-1">•</span>
                      <span>Desarrollo Backend con Python</span>
                    </li>
                    <li className="flex items-start gap-2" style={{ fontWeight: 300 }}>
                      <span className="text-[#9D4EDD] mt-1">•</span>
                      <span>Diseño y consumo de APIs REST</span>
                    </li>
                    <li className="flex items-start gap-2" style={{ fontWeight: 300 }}>
                      <span className="text-[#9D4EDD] mt-1">•</span>
                      <span>Modelado y gestión de bases de datos</span>
                    </li>
                    <li className="flex items-start gap-2" style={{ fontWeight: 300 }}>
                      <span className="text-[#9D4EDD] mt-1">•</span>
                      <span>Desarrollo web con React</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-300 text-lg" style={{ fontWeight: 400 }}>
              Buscando oportunidades de <span className="text-[#C77DFF]" style={{ fontWeight: 600 }}>prácticas profesionales</span> y 
              roles <span className="text-[#C77DFF]" style={{ fontWeight: 600 }}>junior</span> para aplicar y expandir mis conocimientos
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
