import React from 'react';

const Impressum = () => {
  return (
    <div className="container mx-auto px-6 pt-24 pb-12"> {/* pt-24 hinzugefügt */}
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>
      <div className="prose max-w-none">
        <h3><strong>Angaben gemäß § 5 TMG</strong></h3>
        <p>
          minucia & co.
          <br />
          49565 Bramsche, Deutschland
        </p>
        <h3>Kontakt</h3>
        <p>
          E-Mail: <a href="mailto:[minuciaundco@gmail.com]">minuciaundco@gmail.com</a>
          <br />
          Telefon: +49 123 45 67 890
        </p>
        <br />

        <h3><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</strong></h3>
        <p>
          Felicia Kaßenbrock
          <br />
          49565 Bramsche
        </p>

        <br />
        <h3><strong>Hinweis zur KI-Unterstützung</strong></h3>
        <p>
          Diese Website wurde teilweise mit Unterstützung künstlicher Intelligenz erstellt. Der integrierte Chatbot basiert auf einer KI-Technologie, 
          die darauf ausgelegt ist, automatisierte Antworten zu geben und Informationen bereitzustellen. Trotz der KI-Unterstützung liegt die 
          Verantwortung für die Inhalte und deren Richtigkeit vollständig bei Felicia Kaßenbrock.
        </p>

        <br />
        <h3><strong>Haftungsausschluss (Disclaimer)</strong></h3>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten 
          sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </div>
    </div>
  );
};

export default Impressum;
