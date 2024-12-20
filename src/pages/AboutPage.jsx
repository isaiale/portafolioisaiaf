import React from "react";
import SkillTag from "../components/SkillTag";
import Button from "../components/Button";
import LanguageSkill from "../components/LanguageSkill";
import Education from "../components/Education";

const AboutPage = () => {
  // Datos para las etiquetas
  const frontendSkills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Javascript",
    "Vue",
    "React",
    "Angular",
  ];
  const backendSkills = [
    "PHP",
    "JAVA",
    "Python",
    "C++",
    "Node.js",
    "Express.js",
  ];
  const databaseSkills = ["MySQL", "PostgreSQL", "MongoDB"];
  const languageSkills = [
    { language: "Ingles", percentage: 40 },
    { language: "Español", percentage: 100 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8 mt-5">
      {/* Título */}
      <h1 className="text-3xl font-bold text-center mb-10">Sobre Mí</h1>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-9">
        {/* Introducción */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/1">
          <h2 className="text-xl text-center font-semibold mb-4">
          Mi Introducción
          </h2>
          <p className="text-gray-600 mb-6 text-center md:text-left">
            Soy Isai Alejandro Flores, Ing en desarrollado y gestión de software con experiencia
            en frontend y backend. He trabajado en proyectos de aplicaciones
            móviles, videojuegos y sistemas web, utilizando metodologías ágiles
            como Scrum y XP. Estoy comprometido con el aprendizaje continuo y me
            apasiona crear soluciones innovadoras que brinden excelentes
            experiencias de usuario.
          </p>
          <div className="flex justify-center">
            <Button
              text="Descargar CV"
              iconClass="fa-solid fa-download"
              variant="blue"
              downloadUrl="/Cv-IsaiAlejandroFlores.pdf" // Ruta o URL de tu archivo
            />
          </div>
        </div>

        {/* Habilidades */}
        <div className="grid grid-cols-3 gap-6 md:grid-cols-4 w-full">
          {/* Frontend Column */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3">Frontend</h3>
            <div className="grid grid-cols-1 gap-1">
              {frontendSkills.map((skill, index) => (
                <SkillTag key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Backend Column */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3">Backend</h3>
            <div className="grid grid-cols-1 gap-1">
              {backendSkills.map((skill, index) => (
                <SkillTag key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Database Column */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3">Database</h3>
            <div className="grid grid-cols-1 gap-1">
              {databaseSkills.map((skill, index) => (
                <SkillTag key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* idiomas */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/1 mt-6">
        <h2 className="text-xl text-center font-semibold mb-4">Idiomas</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {languageSkills.map((lang, index) => (
            <LanguageSkill
              key={index}
              language={lang.language}
              percentage={lang.percentage}
            />
          ))}
        </div>
      </div>
      {/* Educación */}
      <Education />
    </div>
  );
};

export default AboutPage;
