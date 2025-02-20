import React from 'react';
import Timeline from './timeline/Timeline';
import SkillsGrid from './skills/SkillsGrid';

const About = () => {
  return (
    <section id="über-mich" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Über Mich
          </span>
        </h2>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Mein Werdegang</h3>
            <Timeline />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Meine Skills</h3>
            <SkillsGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;