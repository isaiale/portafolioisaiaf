import React from "react";
import PropTypes from "prop-types";

const SocialIcon = ({ platform, user }) => {
  // Mapear los íconos y URLs base a las plataformas
  const platforms = {
    facebook: {
      icon: "fa-brands fa-facebook",
      baseUrl: "https://facebook.com/",
    },
    instagram: {
      icon: "fa-brands fa-instagram",
      baseUrl: "https://instagram.com/",
    },
    whatsapp: {
      icon: "fa-brands fa-whatsapp",
      baseUrl: "https://wa.me/",
    },
    tiktok: {
      icon: "fa-brands fa-tiktok",
      baseUrl: "https://tiktok.com/@",
    },
    linkedin:{
        icon: "fa-brands fa-linkedin",
        baseUrl: "https://linkedin.com/in/",
    },
    github:{
      icon: "fa-brands fa-github",
      baseUrl: "https://github.com/",
  }
  };

  // Obtener los datos correspondientes a la plataforma
  const platformData = platforms[platform] || { icon: "fa-solid fa-globe", baseUrl: "#" };

  // Construir la URL completa
  const url = `${platformData.baseUrl}${user}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow transition"
    >
      <i className={`${platformData.icon} text-center text-gray-800`}style={{fontSize:'25px', width:'24px', height:'24px'}}></i>
    </a>
  );
};

SocialIcon.propTypes = {
  platform: PropTypes.oneOf(["facebook", "instagram", "whatsapp", "tiktok", "linkedin","github"]).isRequired,
  user: PropTypes.string.isRequired,
};

export default SocialIcon;
