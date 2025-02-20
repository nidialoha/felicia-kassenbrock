import React from 'react';
import { Camera, Music, Plane, Book, Palette, LandPlot } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Malen',
      description: 'Es ist ein Weg, meine Gedanke und Gefühle in Farben und Formen auszudrucken'
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'Reisen',
      description: 'Neue Kulturen, neue Orte und Menschen kennenlernen und meinen Horizont zu erweitern'
    },
    {
      icon: <LandPlot className="w-8 h-8" />,
      title: 'Sports',
      description: 'Ich probiere gerne neue Sportarten aus, am liebsten Golf, Badminton und Joggen'
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Musik',
      description: 'Ich liebe es, Musik aus verschiedenen Sprachen zu hören und spiele gerne Gitarre'
    }
  ];

  const funFacts = [
    'Ich liebe scharfes Essen so sehr, dass ich immer eine kleine Flasche Sambal (indonesische Chili-Sauce) in meiner Tasche habe – für den Fall, dass das Essen nicht würzig genug ist.',
    'Egal ob asiatische Dramen oder Netflix-Serien, ich kann problemlos eine ganze Staffel in einer Nacht durchschauen, während ich meine Snacks perfekt portioniere.',
    'Meine besten Ideen habe ich oft mitten in der Nacht und bin dafür bekannt, schnell Skizzen oder Notizen zu machen, bevor ich sie vergesse.',
    'Ich liebe spontane Ausflüge und habe eine Schwäche für Roadtrips – Hauptsache, die Playlist stimmt und es gibt unterwegs gutes Essen.'
  ];

  return (
    <section id="hobbies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Hobbies & Fun Facts
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Meine Hobbies</h3>
            <div className="grid grid-cols-2 gap-6">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-purple-600 mb-4">{hobby.icon}</div>
                  <h4 className="font-semibold mb-2">{hobby.title}</h4>
                  <p className="text-gray-600">{hobby.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8">Fun Facts</h3>
            <div className="space-y-4">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-gray-700">✨ {fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;