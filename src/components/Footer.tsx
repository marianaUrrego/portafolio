import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Social Links */}
          <nav className="footer__social" aria-label="Redes sociales">
            <a
              href="https://github.com/marianaUrrego"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__socialLink"
              aria-label="GitHub"
            >
              <Github className="footer__socialIcon" aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/mariana-lizette-urrego-montoya-808bb7396/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__socialLink"
              aria-label="LinkedIn"
            >
              <Linkedin className="footer__socialIcon" aria-hidden="true" />
            </a>

            <a
              href="mailto:marianalizetteu@gmail.com"
              className="footer__socialLink"
              aria-label="Email"
            >
              <Mail className="footer__socialIcon" aria-hidden="true" />
            </a>
          </nav>

          {/* Copyright */}
          <div className="footer__copyright">
            <p className="footer__copyrightText">
              © {currentYear} Mariana Urrego.
            </p>
          </div>

          {/* Additional info */}
          <div className="footer__meta">
            <p className="footer__metaText">
              Desarrollado con React, TypeScript, Vite y Sass
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}