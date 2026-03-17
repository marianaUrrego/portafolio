import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="education">
      {/* Background blob */}
      <div className="education__bg" aria-hidden="true">
        <div className="education__blob" />
      </div>

      <div className="education__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="education__header"
        >
          <h2 className="education__title">Formación Académica</h2>
          <div className="education__divider" />
        </motion.div>

        <div className="education__content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="education__card"
          >
            <div className="education__cardGrid">
              {/* Icon */}
              <div className="education__iconCol">
                <div className="education__iconWrap" aria-hidden="true">
                  <GraduationCap className="education__icon" />
                </div>
              </div>

              {/* Content */}
              <div className="education__body">
                <h3 className="education__degree">Ingeniería de Sistemas e Informática</h3>

                <div className="education__meta">
                  <div className="education__metaRow">
                    <Calendar className="education__metaIcon" aria-hidden="true" />
                    <p className="education__metaText">
                      Octavo semestre • 2022 - 2027 (Expected)
                    </p>
                  </div>

                  <div className="education__metaRow">
                    <MapPin className="education__metaIcon" aria-hidden="true" />
                    <p className="education__metaText">
                      Universidad Pontificia Bolivariana sede Medellín
                    </p>
                  </div>
                </div>

                <div className="education__specialties">
                  <h4 className="education__specialtiesTitle">Áreas de especialización:</h4>

                  <ul className="education__list">
                    <li className="education__listItem">
                      <span className="education__bullet" aria-hidden="true">•</span>
                      <span>Desarrollo Backend con Python</span>
                    </li>
                    <li className="education__listItem">
                      <span className="education__bullet" aria-hidden="true">•</span>
                      <span>Diseño y consumo de APIs REST</span>
                    </li>
                    <li className="education__listItem">
                      <span className="education__bullet" aria-hidden="true">•</span>
                      <span>Modelado y gestión de bases de datos</span>
                    </li>
                    <li className="education__listItem">
                      <span className="education__bullet" aria-hidden="true">•</span>
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
            className="education__note"
          >
            <p className="education__noteText">
              Buscando oportunidades de{" "}
              <span className="education__noteHighlight">prácticas profesionales</span> y
              roles{" "}
              <span className="education__noteHighlight">junior</span> para aplicar y expandir mis conocimientos
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}