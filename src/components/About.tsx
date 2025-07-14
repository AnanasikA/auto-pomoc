'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="o-nas" className="bg-white py-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* 📸 Zdjęcie + doświadczenie */}
        <motion.div
          className="relative w-full lg:w-1/2 h-72 sm:h-96"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/tow-truck-1.webp"
            alt="Naprawa silnika"
            fill
            className="object-cover "
          />
          <div className="absolute bottom-0 left-0 bg-red-700 text-white px-6 py-3 text-lg font-extrabold ">
            10+ <span className="text-sm font-medium ml-2">lat doświadczenia</span>
          </div>
        </motion.div>

        {/* 📄 Tekst */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-red-700 mb-4">
            O firmie Marecki
          </h2>
          <hr className="w-16 border-b-4 border-red-700 mb-6" />
          <p className="text-gray-700 mb-4">
            Firma Marecki działa od <span className="text-red-700 font-semibold">czerwca 2015 roku</span>, oferując kompleksowe usługi wulkanizacji, pomocy drogowej oraz napraw bieżących.
            Dzięki wieloletniemu doświadczeniu i indywidualnemu podejściu zdobyliśmy zaufanie setek klientów.
          </p>
          <p className="text-gray-700 mb-6">
            Naszym celem jest szybka i skuteczna pomoc – niezależnie od pory dnia. Działamy 24/7, obsługując zarówno kierowców prywatnych, jak i firmy. Sprawdź, dlaczego warto nam zaufać.
          </p>
          <a
  href="tel:+48721291739"
  className="inline-block bg-red-700 text-white px-6 py-2 shadow-md hover:bg-black transition-all duration-300"
>
  Skontaktuj się z nami
</a>

        </motion.div>
      </div>
    </section>
  );
}
