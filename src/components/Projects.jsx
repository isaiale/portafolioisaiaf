import React from "react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";

const Projects = () => {
    const projects = [
        {
          title: "App Movil",
          description:
            "Es una aplicación móvil que complementa la tienda de productos y servicios de enfermería, ofreciendo a los usuarios una experiencia optimizada para dispositivos móviles.",
          technologies: ["Flutter", "Dart"],
          link: "https://isaiale.itch.io/mi-app",
          image: img1, // Aquí usa la variable importada directamente
        },
        {
          title: "Sitio Web de E-commerce",
          description:
            "Esta plataforma permite a los usuarios comprar, alquilar y reservar productos de enfermería de manera eficiente y accesible desde cualquier dispositivo mediante una Aplicación Web Progresiva (PWA).",
          technologies: ["MongoDB", "Express.js","React.js", "Node.js"],
          link: "https://mi-enfermera-favorita.vercel.app/",
          image: img2, // Aquí usa la variable importada directamente
        },
        {
          title: "Modelo de recomendación",
          description:
            "La aplicación fue desarrollada para que ofrezca recomendaciones personalizadas utilizando algoritmos de aprendizaje automático para mejorar la experiencia del usuario.",
            technologies: ["Python", "Flask", "HTML", "CSS"],
          link: "https://model-recomendacion.onrender.com/buy/Pantalon",
          image: img3, // Aquí usa la variable importada directamente
        },
        {
          title: "Prediccion a la resistencia a la compresión del concreto",
          description:
            "Ayuda a optimizar recursos, garantizar la calidad de los materiales y tomar decisiones más rápidas y precisas, reduciendo costos y aumentando la seguridad en proyectos de construcción.",
          technologies: ["Python", "Flask", "bootstrap"],
          link: "https://proyectom2flask.onrender.com/",
          image: img4, // Aquí usa la variable importada directamente
        },
      ];      

  return (
    <div className="bg-gray-100 py-8 px-4 min-h-screen mt-5">
      <h1 className="text-3xl font-bold text-center mb-8">Mis Proyectos</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-49 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-teal-100 text-teal-600 text-sm font-medium px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 font-medium hover:underline"
              >
                Ver Proyecto →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
