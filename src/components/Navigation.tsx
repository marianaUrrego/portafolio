import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Stack", href: "#tech" },
  { label: "Proyectos", href: "#projects" },
  { label: "Formación", href: "#education" },
  { label: "Contacto", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Cierra el menú móvil si el usuario cambia a desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Opcional: bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="nav" role="banner">
      <div className="nav__container">
        <a className="nav__brand" href="#hero" onClick={handleNavClick}>
          <span className="nav__brandMark" aria-hidden="true" />
          <span className="nav__brandText">Mariana</span>
        </a>

        {/* Desktop */}
        <nav className="nav__links" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="nav__cta" href="#contact" onClick={handleNavClick}>
            Contactar
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="nav__toggle"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X className="nav__toggleIcon" /> : <Menu className="nav__toggleIcon" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`nav__mobile ${isOpen ? "nav__mobile--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <nav className="nav__mobilePanel" aria-label="Menú móvil">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav__mobileLink"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}