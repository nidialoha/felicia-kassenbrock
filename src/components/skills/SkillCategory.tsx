import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  className?: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, className = '' }) => {
  return (
    <div className={className}>
      <h4 className="text-lg font-semibold mb-3 text-gray-800">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-white rounded-full shadow-sm text-gray-700 hover:shadow-md transition-shadow border border-purple-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;