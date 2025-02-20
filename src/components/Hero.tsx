import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();

  const leftX = useTransform(scrollY, [0, 200], [0, -100]);
  const rightX = useTransform(scrollY, [0, 200], [0, 100]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="container mx-auto px-10 py-8">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-8 flex flex-wrap justify-center gap-4">
            <motion.span
              style={{ x: leftX }}
              className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
            >
              Hallo!
            </motion.span>
            <motion.span
              style={{ x: rightX }}
              className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
            >
              Ich bin Felicia!
            </motion.span>
          </h1>

          <div className="grid md:grid-cols-3 gap-2 items-center">
            {/* Linke Seite - Erfahrung */}
            <div className="flex justify-end pr-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                  <span className="text-gray-600 text-sm">Erfahrung über</span>
                  <div className="text-2xl font-bold text-purple-600">
                    10 Jahre
                  </div>
                </div>
              </div>
            </div>

            {/* Mittlere Spalte - Profilbild */}
            <div className="flex flex-col items-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full opacity-10 blur-xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <img
                    src="src/image/felicia.png"
                    alt="Profile"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="flex gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:nidialoha@gmail.com"
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Rechte Seite - Chat CTA */}
            <div className="text-center md:text-left">
              <div className="bg-white p-6 rounded-2xl shadow-lg relative">
                {/* Sprechblase-Pfeil */}
                <div className="absolute w-4 h-4 bg-white transform rotate-45 -left-2 top-1/2 -translate-y-1/2 hidden md:block"></div>

                <h2 className="text-xl font-semibold mb-4">
                  Möchtest du über mich mehr erfahren?
                </h2>
                <p className="text-gray-600 mb-6">
                  Jetzt mit meinem KI-Zwillinge chatten!
                </p>
                <button
                  onClick={openModal}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  Jetzt chatten
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 relative">
              {/* Erste und zweite Zeile unverändert */}
              <motion.div
                className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <div>Kreativität und Design</div>
                <div>sind meine Spielplätze,</div>
              </motion.div>

              {/* Dritte Zeile mit korrigierter Animation */}
              <motion.div
                className="text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }} // Verzögerung nach der ersten Animation
              >
                {/* Explosions-Animation beim Scrollen */}
                {"auf denen ich mit Farben, Formen und Ideen jongliere."
                  .split("")
                  .map((char, index) => (
                    <motion.span
                      key={index}
                      style={{
                        display: "inline-block",
                        x: useTransform(
                          scrollY,
                          [600, 800],
                          [0, Math.random() * 1000 - 500]
                        ),
                        y: useTransform(
                          scrollY,
                          [600, 800],
                          [0, Math.random() * 1000 - 500]
                        ),
                        rotate: useTransform(
                          scrollY,
                          [600, 800],
                          [0, Math.random() * 360]
                        ),
                        opacity: useTransform(
                          scrollY,
                          [600, 700, 800],
                          [1, 0.5, 0]
                        ),
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
              </motion.div>
            </h2>
            <p className="text-xl text-gray-600">Meine Werke ansehen ↓</p>
          </div>
        </div>
      </section>

      {/* Chat Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-[800px] relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 text-gray-500 hover:text-gray-700 bg-white rounded-full p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Chatbot iframe */}
            <iframe
              src="https://dante-ai.com/embed/?kb_id=3b309c9e-0396-4033-9943-836a753d07f6&token=bdccdfb7-a50c-40e0-bf47-aabf1230cf4b&modeltype=gpt-4-omnimodel-mini&mode=false&logo=ZmFsc2U%3D"
              className="w-full h-[600px] rounded-lg"
              allow="clipboard-write; clipboard-read; *;microphone *"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
