'use client';

import { useRef, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function WhyUs() {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_564t3b6',     // ← 🔁 zamień na swój ID
          'template_27nzxn2',    // ← 🔁 zamień na swój template ID
          formRef.current,
          'vgMyUXe7D-ey-o5-Y'      // ← 🔁 zamień na swój public key
        )
        .then(
          () => setSuccess(true),
          () => setError(true)
        );
      formRef.current.reset();
    }
  };

  return (
    <section id="kontakt" className="bg-gray-900 text-white py-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* ✅ Tekst – Dlaczego Marecki */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-white">
            Dlaczego warto wybrać <span className="text-red-600">Marecki</span>?
          </h2>
          <p className="mb-6 text-[15px] text-gray-300 leading-relaxed">
            Od czerwca 2015 roku pomagamy kierowcom w każdej sytuacji drogowej —
            od przebitych opon po poważniejsze awarie. Nasza firma to nie tylko wulkanizacja
            i pomoc drogowa — to przede wszystkim zespół doświadczonych fachowców,
            którzy zawsze są gotowi do działania, niezależnie od pory dnia czy pogody.
          </p>
          <ul className="space-y-5 text-[15px] leading-relaxed">
            {[
              {
                title: '10+ lat doświadczenia',
                desc: '– działamy nieprzerwanie od 2015 roku, zdobywając zaufanie setek klientów w regionie.',
              },
              {
                title: 'Dostępność 24/7',
                desc: '– jesteśmy pod telefonem przez całą dobę, również w niedziele i święta.',
              },
              {
                title: 'Szybki dojazd',
                desc: '– dzięki lokalizacji w Pełcznicy docieramy na miejsce awarii już w kilkanaście minut.',
              },
              {
                title: 'Nowoczesny sprzęt',
                desc: '– mobilne urządzenia do wulkanizacji, profesjonalne lawety i sprawdzone narzędzia.',
              },
              {
                title: 'Bezpieczna i sprawna obsługa',
                desc: '– działamy szybko, ale nigdy kosztem jakości czy bezpieczeństwa.',
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-red-600 mt-0.5 shrink-0" />
                <span>
                  <strong>{item.title}</strong> {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 📬 Formularz zapytania */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white text-gray-800 p-8 shadow-md w-full rounded-md"
        >
          <h3 className="text-2xl font-bold text-red-700 mb-6">Zapytaj o pomoc lub wycenę</h3>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4 text-sm">
            <input
              type="text"
              name="user_name"
              placeholder="Imię i nazwisko"
              className="w-full border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Adres e-mail"
              className="w-full border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Numer telefonu"
              className="w-full border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              name="message"
              placeholder="Opisz swoją sytuację lub pytanie"
              className="w-full border border-gray-300 px-4 py-2 h-24 resize-none outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-700 text-white px-6 py-2 font-semibold hover:bg-black transition"
            >
              Wyślij zapytanie
            </button>

            {/* 🟢 Info o statusie */}
            {success && (
              <p className="text-green-600 font-medium mt-2">
                Wiadomość została wysłana ✅
              </p>
            )}
            {error && (
              <p className="text-red-600 font-medium mt-2">
                Wystąpił błąd. Spróbuj ponownie ❌
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
