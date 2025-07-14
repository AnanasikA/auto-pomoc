'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] overflow-hidden">
      
      <Image
        src="/hero.jpg"
        alt="Pomoc drogowa 24/7"
        fill
        className="object-cover"
        priority
      />

      
      <div className="absolute left-0 top-0 w-full h-full z-10 pointer-events-none">
        <div className="w-[80%] sm:w-[70%] md:w-[60%] h-full bg-black/70 clip-left-steep pointer-events-none" />
      </div>

      
      <div className="absolute inset-0 z-20 flex items-center justify-start px-4 sm:px-8 lg:px-24">
        <motion.div
          className="text-white max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Marecki 24/7<br />
            <span className="text-red-600">Wymiana opon, laweta i naprawy</span><br />
            dostępne przez całą dobę
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mb-8">
            Szybka reakcja, profesjonalizm i dostępność 24/7. Skontaktuj się z nami, gdy tylko potrzebujesz wsparcia na drodze.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+48721291739"
              className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 text-sm sm:text-base transition"
            >
              Zadzwoń teraz
            </a>
            <Link
              href="#uslugi"
              className="bg-white text-black px-6 py-3 border border-gray-300 text-sm sm:text-base hover:bg-gray-100 transition"
            >
              Nasze usługi
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
