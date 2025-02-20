import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, Award } from "lucide-react";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  const milestones = [
    {
      icon: Award,
      title: "Weiterbildung Full-Stack Web- & App Entwicklung",
      organization: "WBS Coding School",
      period: "01.2025 - vsl.05.2025",
      description:
        "Fullstack-Entwicklung für kreative, funktionale und performante Web- und App-Projekte.",
    },
    {
      icon: Award,
      title: 'Weiterbildung "Künstliche Intelligenz für den Beruf"',
      organization: "WBS Coding School",
      period: "10.2024 - 12.2024",
      description:
        "Praxisnahe KI-Kenntnisse für effiziente und kreative Anwendungen im Arbeitsalltag.",
    },
    {
      icon: Briefcase,
      title: "Teamlead Media Design",
      organization: "intan group",
      period: "08.2019 - 07.2024",
      description:
        "Leitung im Bereich Media Design: Verantwortung für Print- und Digitalprojekte, inklusive Teamführung und crossmedialer Expertise.",
    },
    {
      icon: Award,
      title: 'Bootcamp "UI/UX Design"',
      organization: "SuperCode GmbH & Co. KG",
      period: "10.2021 - 01.2022",
      description:
        "Intensives Training mit Fokus auf nutzerzentriertem Design, Prototyping und kreativer Gestaltung für intuitive digitale Erlebnisse.",
    },
    {
      icon: Award,
      title: "Ausbildereignung nach AEVO",
      organization: "IHK Osnabrück",
      period: "2021",
      description:
        "Qualifikation zur professionellen Planung, Durchführung und Betreuung von Ausbildungsprozessen gemäß der Ausbilder-Eignungsverordnung.",
    },
    {
      icon: Briefcase,
      title: "Mediengestalterin",
      organization: "Ability Design",
      period: "2017 - 2019",
      description:
        "Komplette Projektbetreuung: Von Kundengesprächen über Designentwicklung bis zur Terminplanung für Montage.",
    },
    {
      icon: GraduationCap,
      title: "Master of Arts in Media Production",
      organization: "Hochschule Ostwesfalen-Lippe",
      period: "2014 - 2017",
      description: "Spezialisierung auf Animation.",
    },
    {
      icon: GraduationCap,
      title: "Bachelor of Arts in Grafikdesign",
      organization: "Tarumanagara Universität, Jakarta-Indonesien",
      period: "2009 - 2013",
      description: "Spezialisierung auf Multimedia-Design.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {milestones.map((milestone, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 150, // Reduzierte Steifigkeit für sanfteren Bounce
              mass: 0.8, // Leichte Masse
              delay: index * 0.2,
            },
          }}
          viewport={{
            once: false,
            amount: 0.5,
          }}
        >
          <TimelineItem
            {...milestone}
            isLast={index === milestones.length - 1}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
