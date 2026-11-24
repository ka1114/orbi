"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#educacion", label: "Educación" },
  { href: "#servicios", label: "Servicios" },
  { href: "#comunidad", label: "Comunidad" },
  { href: "#invitacion", label: "Para quiénes" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="ORBI, inicio">
          <Image
            src="/orbi-logo-white.png"
            alt=""
            width={272}
            height={327}
            priority
            sizes="272px"
          />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`nav-menu${isOpen ? " is-open" : ""}`} id="main-menu">
          <div className="nav-links">
            {links.map((link) => (
              <a href={link.href} key={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <a
              className="button button-primary button-small"
              href="#pilares"
              onClick={closeMenu}
            >
              Descubre ORBI
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
