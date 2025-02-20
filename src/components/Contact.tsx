import React, { useRef, useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    emailjs.sendForm(
      'service_qva50za',
      'template_xods4ip',
      form.current,
      'LB2pshsQzJC6RzBzb'
    )
    .then(() => {
      alert('Nachricht wurde erfolgreich gesendet!');
      if (form.current) form.current.reset();
    })
    .catch((error) => {
      console.error(error);
      alert('Es gab einen Fehler beim Senden der Nachricht.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="kontakt" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Kontakt
          </span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Lass uns sprechen!</h3>
              <p className="text-gray-600 mb-8">
                Haben Sie ein spannendes Projekt oder eine Frage? Ich freue mich darauf, von Ihnen zu hören!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <a href="mailto:your@email.com" className="text-gray-600 hover:text-purple-600">
                    minuciaundco@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-600">+49 123 45 67 890</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-600">Bramsche, Deutschland</span>
                </div>
              </div>
            </div>  

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;