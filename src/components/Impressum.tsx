import React from "react";

const Impressum = () => {
  return (
    <div className="container mx-auto px-6 pt-24 pb-12">
      {" "}
      {/* pt-24 hinzugefügt */}
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>
      <div className="prose max-w-none">
        <h3>
          <strong>Angaben gemäß § 5 TMG</strong>
        </h3>
        <p>
          Felicia Kaßenbrock
          <br />
          Hölderlinstr. 3
          <br />
          49565 Bramsche, Deutschland
        </p>
        <h3>Kontakt</h3>
        <p>
          E-Mail: <a href="mailto:[nidialoha@gmail.com]">nidialoha@gmail.com</a>
          <br />
          Telefon: +49 178 58 38 558
        </p>
        <br />

        <h3>
          <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</strong>
        </h3>
        <p>
          Felicia Kaßenbrock
          <br />
          Hölderlinstr. 3
          <br />
          49565 Bramsche
        </p>

        <br />
        <h3>
          <strong>Hinweis zur KI-Unterstützung</strong>
        </h3>
        <p>
          Diese Website wurde teilweise mit Unterstützung künstlicher
          Intelligenz erstellt und befindet sich derzeit in einer Testphase. Der
          integrierte Chatbot basiert auf KI-Technologie und ist darauf
          ausgelegt, automatisierte Antworten zu geben und Informationen
          bereitzustellen. Felicia Kaßenbrock übernimmt die volle Verantwortung
          für die Inhalte dieser Website, einschließlich der KI-generierten
          Inhalte. Trotz sorgfältiger Prüfung können Fehler oder Ungenauigkeiten
          nicht vollständig ausgeschlossen werden. Die bereitgestellten
          Informationen dienen lediglich Informationszwecken und sind ohne
          Gewähr.
        </p>

        <br />
        <h3>
          <strong>Haftungsausschluss (Disclaimer)</strong>
        </h3>
        <p>
          Für die Inhalte externer Links übernehmen wir keine Haftung. Die
          verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
          Rechtsverstöße überprüft. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Links umgehend entfernen. Für den Inhalt der
          verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </div>
    </div>
  );
};

export default Impressum;
