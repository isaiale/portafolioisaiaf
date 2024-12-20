import React from "react";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  // Datos de habilidades y redes sociales
  const socialLinks = [
    { platform: "facebook", user: "khaled.vegas.7" },
    { platform: "whatsapp", user: "3320468328" },
    { platform: "linkedin", user: "isai-alejandro-flores" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10">
      {/* Contenedor principal */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6">
        {/* Redes Sociales */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Sigueme en</h3>
          <div className="flex justify-center md:justify-start gap-4">
            {socialLinks.map((social, index) => (
              <SocialIcon
                key={index}
                platform={social.platform}
                user={social.user}
              />
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-lg font-semibold mb-4">Contactos</h3>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <i className="fas fa-envelope mr-2"></i>
              <a href="mailto:example@example.com" className="hover:underline">
                isaialef20@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <i className="fas fa-phone mr-2"></i>
              <p>332 046 8328</p>
            </div>
          </div>
        </div>

        {/* Enlaces rápidos */}
        <div className="w-full md:w-1/3 text-center md:text-right">
          <h3 className="text-lg font-semibold mb-4">Click Aqui</h3>
          <ul className="space-y-2">
            <li>
              <a href="#hero" className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                Sobre Mí
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                projectos
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Isai Alejandro Flores. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
