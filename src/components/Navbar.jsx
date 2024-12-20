import React from "react";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <span className="text-teal-500 font-bold text-xl">Isai Flores</span>
          <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <i className={`${isMenuOpen ? "fa fa-times" : "fa fa-bars"} fa-2x`}></i>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#hero" className="hover:text-teal-500 transition duration-200">
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-purple-500 font-semibold hover:text-teal-500 transition duration-200"
            >
              Sobre Mí
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-teal-500 transition duration-200">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-teal-500 transition duration-200">
              Contacto
            </a>
          </li>
        </ul>

        {/* Download CV Button */}
        <div className="hidden md:block">
          <Button
            text="Descargar CV"
            iconClass="fa-solid fa-download"
            variant="blue"
            downloadUrl="/Cv-IsaiAlejandroFlores.pdf" // Ruta o URL de tu archivo
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="space-y-4 text-gray-700 font-medium px-6 py-4">
            <li>
              <a
                href="#hero"
                className="block hover:text-teal-500 transition duration-200"
                onClick={toggleMenu}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-purple-500 font-semibold hover:text-teal-500 transition duration-200"
                onClick={toggleMenu}
              >
                Sobre Mí
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block hover:text-teal-500 transition duration-200"
                onClick={toggleMenu}
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:text-teal-500 transition duration-200"
                onClick={toggleMenu}
              >
                Contacto
              </a>
            </li>
            <li>
              <Button
                text="Descargar CV"
                iconClass="fa-solid fa-download"
                variant="blue"
                downloadUrl="/Cv-IsaiAlejandroFlores.pdf"
                onClick={toggleMenu}
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
