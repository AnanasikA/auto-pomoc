'use client';

import Image from 'next/image';
import { GiCarWheel } from 'react-icons/gi';
import { RiTruckFill } from 'react-icons/ri';
import { MdBuild } from 'react-icons/md';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Wymiana opon',
    desc: 'Profesjonalna, szybka i dokładna wymiana opon. Obsługujemy auta osobowe i dostawcze.',
    img: '/services2.jpg',
    icon: <GiCarWheel className="text-4xl" />,
  },
  {
    title: 'Pomoc drogowa',
    desc: 'Całodobowa pomoc drogowa i laweta w razie awarii lub kolizji. Szybki dojazd.',
    img: '/services1.jpg',
    icon: <RiTruckFill className="text-4xl" />,
  },
  {
    title: 'Bieżące naprawy',
    desc: 'Naprawy mechaniczne i diagnostyka na miejscu lub w naszym warsztacie.',
    img: '/services3.jpg',
    icon: <MdBuild className="text-4xl" />,
  },
];

export default function Services() {
  return (
    <section id="uslugi" className="bg-[#f3f7ff] py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 🔺 Nagłówek */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-red-700 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Nasze usługi
        </motion.h2>

        {/* 📦 Karty usług */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow hover:shadow-lg transition overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Zdjęcie + ikona */}
              <div className="h-48 relative w-full">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-red-700 text-white p-4">
                  {service.icon}
                </div>
              </div>

              {/* Treść */}
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
