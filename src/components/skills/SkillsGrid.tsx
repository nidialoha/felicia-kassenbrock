import React from 'react';
import SkillCategory from './SkillCategory';

const SkillsGrid = () => {
  const skillCategories = [
    {
      title: 'Grafikdesign',
      skills: ['Adobe Creative Suite', 'Final Cut Pro', 'Canva']
    },
    {
      title: 'UI Design',
      skills: ['Adobe XD', 'Figma', 'Wordpress', 'HTML/CSS']
    },
    {
      title: 'Sonstiges',
      skills: ['Ausbildereignung nach AEVO', 'Microsoft Office']
    },
    {
      title: 'Sprache',
      skills: ['indonesisch (Muttersprache)', 'deutsch', 'englisch']
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {skillCategories.map((category, index) => (
        <SkillCategory
          key={index}
          title={category.title}
          skills={category.skills}
        />
      ))}
    </div>
  );
};

export default SkillsGrid;