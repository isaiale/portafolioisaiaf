import React from "react";
import PropTypes from "prop-types";

const LanguageSkill = ({ language, percentage }) => {
  return (
    <div className="w-full mb-4">
      {/* Nombre del idioma y porcentaje */}
      <div className="flex justify-between">
        <span className="text-base font-medium text-gray-700">{language}</span>
        <span className="text-sm font-medium text-gray-700">{percentage}%</span>
      </div>

      {/* Barra de progreso */}
      <div className="w-full bg-gray-200 rounded-full h-1">
        <div
          className="bg-teal-500 h-3 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

LanguageSkill.propTypes = {
  language: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default LanguageSkill;
