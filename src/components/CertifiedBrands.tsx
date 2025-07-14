'use client';

import Image from 'next/image';
import { FaTools, FaWarehouse, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhyUs() {
  const features = [
    {
      icon: <FaTools className="text-white text-2xl" />,
      title: 'Profesjonalna obsługa',
      desc: 'Doświadczeni pracownicy i szybka realizacja usług – niezależnie od sytuacji.',
      number: '1',
    },
    {
      icon: <FaWarehouse className="text-white text-2xl" />,
      title: 'Nowoczesne zaplecze',
      desc: 'Dysponujemy specjalistycznym sprzętem do precyzyjnych napraw i diagnostyki.',
      number: '2',
    },
    {
      icon: <FaCheckCircle className="text-white text-2xl" />,
      title: 'Gwarancja satysfakcji',
      desc: 'Każde zlecenie traktujemy indywidualnie, zapewniając najwyższy standard.',
      number: '3',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* 🔴 Lewa strona z grafiką */}
        <motion.div
          className="relative w-full lg:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/job.jpg"
            alt="Naprawa auta"
            width={800}
            height={600}
            className="object-cover shadow-md w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 bg-red-700 text-white px-6 py-4 font-bold text-lg shadow-lg ">
            W Marecki 24/7 jesteś w dobrych rękach!
          </div>
        </motion.div>

        {/* ⚪ Prawa strona – tekst i benefity */}
        <motion.div
          className="w-full lg:w-1/2 bg-white  shadow p-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm uppercase text-gray-500 font-semibold mb-1">
            Nasze usługi naprawcze
          </h3>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-red-700 mb-6 leading-tight">
            Dlaczego Marecki 24/7 to dobry wybór?
          </h2>
          <p className="text-gray-700 mb-6">
            Działamy nieprzerwanie od czerwca 2015 roku. Nasz zespół to doświadczeni technicy, którzy dbają o
            każdy detal. Korzystamy z nowoczesnego sprzętu i zapewniamy szybki, profesjonalny serwis w każdej sytuacji.
          </p>

          <div className="space-y-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-red-700 p-3 shadow-md">{item.icon}</div>
                <div>
                  <h4 className="text-md text-gray-800 font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
                <div className="ml-auto text-red-100 text-5xl font-black opacity-20 absolute right-0 bottom-0">
                  {item.number}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
