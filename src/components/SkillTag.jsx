import React from "react";

const SkillTag = ({ skill }) => {
  return (
    <span className="bg-purple-500 text-white font-medium text-sm px-4 py-1 rounded-lg shadow-md">
      {skill}
    </span>
  );
};

export default SkillTag;
