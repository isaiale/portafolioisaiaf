import React from "react";
import TypingText from "../components/TypingText";
import Button from "../components/Button";
import imagen from "../assets/images/DevIsai.png";
import SocialIcon from "../components/SocialIcon";

const HeroSection = () => {
  const texts = [
    "Ingeniero de Software",
    "Desarrollador FrontEnd",
    "Desarrollador BackEnd",
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center px-10 mt-10">
      {/* Contenedor principal */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 m-1">
        {/* Columna derecha (imagen) */}
        <div className="relative order-1 md:order-2">
          <div className="w-80 h-80 bg-teal-500 rounded-full overflow-hidden shadow-lg">
            <img
              src={imagen}
              alt="Profile"
              className="object-cover w-full h-full bg-blue-400"
            />
          </div>
        </div>

        {/* Columna izquierda (texto e información) */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-1">
          {/* Etiqueta superior */}
          <span className="bg-yellow-200 text-yellow-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Isai Flores
          </span>

          {/* Título */}
          <h1 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4 whitespace-nowrap">
            Soy{" "}
            <TypingText
              className="inline text-teal-500"
              texts={texts}
              typingSpeed={100}
              pauseTime={1500}
            />
          </h1>

          {/* Descripción */}
          <p className="text-gray-600 text-base md:w-1/2 mb-3">
            Soy desarrollador de software con experiencia en el diseño e
            implementación de soluciones tecnológicas tanto en frontend como
            backend.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">            
            <Button text="Ver proyectos" variant="purple" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} />
            <Button
              text="Descargar CV"
              iconClass="fa-solid fa-download"
              variant="blue"
              downloadUrl="/Cv-IsaiAlejandroFlores.pdf" // Ruta o URL de tu archivo
            />
          </div>
        </div>
      </div>

      {/* Íconos sociales */}
      <div className="flex justify-center gap-6 mt-5">
        {/* <SocialIcon platform="facebook" user="khaled.vegas.7" /> */}
        {/* <SocialIcon platform="instagram" user="isaialef" /> */}
        {/* <SocialIcon platform="whatsapp" user="3320468328" /> */}
        {/* <a href="https://wa.me/######?text=¡Estoy+interesado!">Contáctame por WhatsApp</a> */}
        {/* <SocialIcon platform="github" user="isaiale" /> */}
        <SocialIcon platform="linkedin" user="isai-alejandro-flores" />
      </div>
    </div>
  );
};

export default HeroSection;
