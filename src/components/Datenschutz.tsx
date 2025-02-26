import React from "react";

const Datenschutz = () => {
  return (
    <div className="container mx-auto px-6 pt-24 pb-12">
      {" "}
      {/* pt-24 hinzugefügt */}
      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
      <div className="prose max-w-none">
        <h3>1. Allgemeine Hinweise</h3>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
          Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>

        <h3>2. Verantwortlicher</h3>
        <p>
          <strong>
            Verantwortlich für die Datenverarbeitung auf dieser Website:
          </strong>
          <br />
          minucia und co.
          <br />
          49565 Bramsche
          <br />
          E-Mail:{" "}
          <a href="mailto:[minuciaundco@gmail.com]">minuciaundco@gmail.com</a>
        </p>

        <h3>
          3. Erhebung und Speicherung personenbezogener Daten sowie Art und
          Zweck von deren Verwendung
        </h3>

        <h4>a) Beim Besuch der Website</h4>
        <p>
          Beim Aufrufen dieser Website werden durch den Hosting-Anbieter
          automatisch Informationen an den Server dieser Website gesendet. Diese
          Informationen werden temporär in sogenannten Logfiles gespeichert.
          Folgende Daten können erfasst werden:
        </p>
        <ul>
          <li>IP-Adresse des anfragenden Geräts,</li>
          <li>Datum und Uhrzeit des Zugriffs,</li>
          <li>Name und URL der abgerufenen Datei,</li>
          <li>Website, von der aus der Zugriff erfolgt (Referrer-URL),</li>
          <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Geräts.</li>
        </ul>
        <p>
          Die genannten Daten werden zur Sicherstellung eines reibungslosen
          Verbindungsaufbaus der Website und zu administrativen Zwecken
          verarbeitet.
        </p>

        <h4>b) Kontaktformular</h4>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Formular inklusive der von Ihnen angegebenen
          Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
          Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
          Ihre Einwilligung weiter.
        </p>

        <h4>c) Chatbot-Funktion</h4>
        <p>
          Die Chatbot-Funktion wird bereitgestellt, um automatisierte Anfragen
          zu beantworten. Die im Chat eingegebenen Daten werden{" "}
          <strong>nicht gespeichert</strong> und ausschließlich für den
          angegebenen Zweck verwendet.
        </p>

        <h3>4. Weitergabe von Daten</h3>
        <p>
          Eine Übermittlung Ihrer persönlichen Daten an Dritte findet nur statt,
          wenn:
        </p>
        <ul>
          <li>Sie hierzu Ihre ausdrückliche Einwilligung erteilt haben,</li>
          <li>
            die Weitergabe gesetzlich zulässig und für die Abwicklung von
            Vertragsverhältnissen erforderlich ist, oder
          </li>
          <li>wir gesetzlich dazu verpflichtet sind.</li>
        </ul>

        <h3>5. Hosting</h3>
        <p>
          Diese Website wird bei folgendem Anbieter gehostet:
          <br />
          <strong>Netlify, Inc.</strong>
          {/* <br />
            [Anschrift des Hosting-Anbieters, falls erforderlich] */}
        </p>
        <p>
          Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses
          an einer sicheren und effizienten Bereitstellung unseres
          Online-Angebots.
        </p>

        <h3>6. Ihre Rechte</h3>
        <p>
          Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und
          Einschränkung der Verarbeitung Ihrer Daten. Zudem können Sie der
          Verarbeitung Ihrer personenbezogenen Daten widersprechen oder eine
          erteilte Einwilligung widerrufen.
        </p>

        <h3>7. Änderungen dieser Datenschutzerklärung</h3>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf
          anzupassen, um sie aktuellen rechtlichen Anforderungen oder Änderungen
          unserer Dienstleistungen anzupassen.
        </p>
      </div>
    </div>
  );
};

export default Datenschutz;
