import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Felicia Kaßenbrock",
      description:
        "Entwicklung und Gestaltung meiner eigenen Website als Abschlussprojekt der KI-Weiterbildung – Design und Programmierung eigenständig mit Unterstützung von Künstlicher Intelligenz umgesetzt.",
      image: "src/image/Felicia-Website.png",
      tech: ["Künstliche Intelligenz", "Typescript"],
      github: "/link",
      live: "/link",
    },
    {
      title: "Ribka Tour & Travel",
      description:
        "Professionelle Website-Gestaltung für eine Tour- und Travel-Firma auf Bali mit Adobe Illustrator, Photoshop und Figma – von kreativen Konzepten bis zur finalen Umsetzung.",
      image: "src/image/ribka_travel_2.jpg",
      tech: ["Figma", "Adobe Photoshop"],
      github: "/link",
      live: "/link",
    },
    {
      title: "inXteam",
      description:
        "Zielgerichtetes Website-Design für die Softwareentwicklungsbranche mit Adobe XD – ansprechend, nutzerfreundlich und strategisch optimiert, um neue Talente und Mitarbeiter zu gewinnen.",
      image: "src/image/inxteam.png",
      tech: ["Adobe XD", "Adobe Illustrator"],
      github: "/link",
      live: "/link",
    },
    {
      title: "Daobee",
      description:
        "Design und UI-Konzeption für das Discord-Spiel Daobee – Erstellung eines ansprechenden und funktionalen Webbrowser-Designs, maßgeschneidert für Community-Engagement.",
      image: "src/image/Daobee.jpg",
      tech: ["Figma", "Adobe Illustrator"],
      github: "/link",
      live: "/link",
    },
    {
      title: "abo-direkt.de",
      description:
        "Umsetzung kreativer Webbanner-Layouts unter Berücksichtigung des Corporate Identity des Kunden, von der Konzeptentwicklung bis zur finalen Gestaltung, einschließlich ansprechender Gartenmotive und Designs.",
      image: "src/image/Webbanner_Garten.jpg",
      tech: ["Adobe Photoshop"],
      github: "/link",
      live: "/link",
    },
    {
      title: "Ingenieurbüro Kaßenbrock & Kiel",
      description:
        "Komplette Entwicklung des Corporate Designs für ein Unternehmen – von der Logo-Gestaltung bis hin zur Umsetzung professioneller Visitenkarten, mit einem Fokus auf einheitliches und ansprechendes Branding.",
      image: "src/image/ingenieurbuero_kk_2.jpg",
      tech: ["Adobe Illustrator", "Adobe Indesign"],
      github: "/link",
      live: "/link",
    },
    {
      title: "intan inside",
      description:
        "Design und Layout für das Mitarbeitermagazin Intan Inside – Erstellung eines ansprechenden und klar strukturierten Designs für interne News, abgestimmt auf das Corporate Design des Unternehmens.",
      image: "src/image/Buch_intan.jpg",
      tech: ["Adobe Indesign", "Adobe Photoshop"],
      github: "/link",
      live: "/link",
    },
    {
      title: "BloomPost",
      description:
        "Gestaltung eines ansprechenden Flyers im Einklang mit dem Corporate Identity des Kunden – Verwendung markenspezifischer Farben und Designelemente, von der kreativen Konzeptentwicklung bis zur druckfertigen.",
      image: "src/image/Flyer_Bloompost.jpg",
      tech: ["Adobe Illustrator", "Adobe Indesign"],
      github: "/link",
      live: "/link",
    },
    {
      title: "hysana",
      description:
        "Gestaltung eines ansprechenden Falzflyers für Hysana im Einklang mit der Corporate Identity – Einsatz markenspezifischer Farben und Designelemente, von der kreativen Konzeptentwicklung bis zur druckfertigen Umsetzung.",
      image: "src/image/Flyer_hysana.jpg",
      tech: ["Adobe Illustrator", "Adobe Indesign"],
      github: "/link",
      live: "/link",
    },
  ];

  return (
    <section id="projekte" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Meine Projekte
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
