import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-[#5A189A]/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/marianaUrrego"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#3C096C] hover:bg-[#5A189A] rounded-lg transition-all duration-300 text-[#E0AAFF] hover:text-white transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mariana-lizette-urrego-montoya-808bb7396/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#3C096C] hover:bg-[#5A189A] rounded-lg transition-all duration-300 text-[#E0AAFF] hover:text-white transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:marianalizetteu@gmail.com"
              className="p-3 bg-[#3C096C] hover:bg-[#5A189A] rounded-lg transition-all duration-300 text-[#E0AAFF] hover:text-white transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 flex items-center gap-2 justify-center" style={{ fontWeight: 300 }}>
              © {currentYear} María González. Hecho con
              <Heart className="w-4 h-4 text-[#9D4EDD] fill-current" />
              y mucho código
            </p>
          </div>

          {/* Additional info */}
          <div className="text-center">
            <p className="text-sm text-gray-500" style={{ fontWeight: 300 }}>
              Desarrollado con React, TypeScript, Vite y Sass
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
