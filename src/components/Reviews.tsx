'use client';

import { motion } from 'framer-motion';

export default function Reviews() {
  const reviews = [
    {
      text: 'Auto nie chciało odpalić na mrozie, laweta przyjechała w 15 minut. Wszystko sprawnie, profesjonalnie i z uśmiechem. Polecam każdemu!',
      author: 'Marcin W.',
      role: 'Kierowca',
    },
    {
      text: 'Zdecydowałem się na pełen serwis – wymiana opon i naprawa felgi. Usługa wykonana perfekcyjnie, a cena bardzo uczciwa.',
      author: 'Jakub Z.',
      role: 'Właściciel auta',
    },
    {
      text: 'Zgubiłam koło w trasie. Marecki 24/7 uratował mnie błyskawicznie – przyjechali, zabrali auto i wszystko naprawili. Mega pomoc!',
      author: 'Anna K.',
      role: 'Klientka',
    },
  ];

  return (
    <section id="opinie" className="bg-[#f3f7ff] py-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* 🔺 Nagłówki */}
        <h3 className="text-sm text-gray-500 uppercase mb-1 tracking-wide">
          Co mówią nasi klienci
        </h3>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-red-700 mb-12">
          Opinie klientów
        </h2>

        {/* 💬 Karty z opiniami */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              className="relative bg-white border border-gray-200 rounded-lg p-6 text-left shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Cudzysłów */}
              <span className="absolute top-4 right-4 text-5xl text-red-200 select-none leading-none">
                ”
              </span>

              {/* Treść */}
              <p className="text-gray-700 text-sm mb-6">{rev.text}</p>

              {/* Autor */}
              <div className="text-sm font-semibold text-gray-800">
                {rev.author}
              </div>
              <div className="text-xs text-gray-500 mb-3">{rev.role}</div>

              {/* ⭐ Ocena */}
              <div className="flex gap-1 text-yellow-400 text-base">
                {Array(5)
                  .fill(null)
                  .map((_, j) => (
                    <span key={j}>★</span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
