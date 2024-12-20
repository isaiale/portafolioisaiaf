import React from "react";

const Education = () => {
  const educationData = [
    {
      institution: "Preparatoria CBTa No.5 de Huejutla",
      degree: "Tecnico en programación",
      year: "2018 - 2021",
      description:
        "Cursé estudios de nivel medio superior con énfasis en ciencias exactas y programación básica.",
    },
    {
      institution: "Universidad Tecnológica de la Huasteca Hidalguense",
      degree: "Ingeniería en Desarrollo y Gestión de Software",
      year: "2021 - 2025",
      description:
        "Adquirí habilidades avanzadas en desarrollo de software, metodologías ágiles y gestión de proyectos tecnológicos.",
    },
  ];

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Mis Estudios</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{edu.institution}</h2>
            <p className="text-teal-500 text-sm font-medium mb-1">{edu.degree}</p>
            <p className="text-gray-500 text-sm mb-3">{edu.year}</p>
            <p className="text-gray-600">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
