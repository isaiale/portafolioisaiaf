import React from "react";
import PropTypes from "prop-types";

const Button = ({
  text,
  iconClass,
  variant = "default",
  className,
  onClick,
  downloadUrl,
}) => {
  // Definir estilos según la variante
  const variantStyles = {
    default: "bg-transparent text-gray-800 border border-gray-300 hover:bg-gray-100",
    blue: "bg-transparent border border-gray-300 text-gray-800 hover:bg-teal-500 hover:text-white",
    purple: "bg-purple-400 text-white hover:bg-purple-500",
  };

  return downloadUrl ? (
    // Enlace de descarga si `downloadUrl` está definido
    <a
      href={downloadUrl}
      download
      className={`flex items-center justify-center px-4 py-2 rounded-lg transition duration-200 ${variantStyles[variant]} ${className}`}
    >
      {text && <span className="text-center">{text}</span>}
      {iconClass && <i className={`${iconClass} ${text ? "ml-2" : ""}`}></i>}
    </a>
  ) : (
    // Botón regular si no hay `downloadUrl`
    <button
      className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {text && <span>{text}</span>}
      {iconClass && <i className={`${iconClass} ${text ? "ml-2" : ""}`}></i>}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string, // Texto del botón (opcional)
  iconClass: PropTypes.string, // Clases de Font Awesome para el ícono (opcional)
  variant: PropTypes.oneOf(["default", "blue", "purple"]), // Estilo del botón
  className: PropTypes.string, // Clases adicionales (opcional)
  onClick: PropTypes.func, // Acción al hacer clic (opcional)
};

Button.defaultProps = {
  text: null,
  iconClass: null,
  variant: "default",
  className: "",
  onClick: () => {},
};

export default Button;
