'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const news = [
  {
    title: 'Jak przygotować auto do sezonu zimowego?',
    description:
      'Dowiedz się, jak właściwie zadbać o swoje auto przed nadejściem mrozów — od wymiany opon po akumulator.',
    image: '/winter.jpg',
    tag: 'Porady',
    slug: 'jak-przygotowac-auto-do-zimy',
  },
  {
    title: 'Na co zwrócić uwagę przy holowaniu auta?',
    description:
      'Poznaj kluczowe zasady bezpiecznego holowania oraz jak przygotować się na niespodziewane sytuacje na drodze.',
    image: '/towing.jpg',
    tag: 'Pomoc drogowa',
    slug: 'bezpieczne-holowanie-auta',
  },
  {
    title: 'Na czym polega wulkanizacja?',
    description:
      'Zobacz, jak wygląda naprawa opon i kiedy warto z niej skorzystać zamiast kupować nowe ogumienie.',
    image: '/tyre.jpg',
    tag: 'Wulkanizacja',
    slug: 'na-czym-polega-wulkanizacja',
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="bg-[#f3f7ff] py-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-500 mb-2">Porady, aktualności i ciekawostki</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-red-700 mb-10">
          Aktualności i Porady
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow hover:shadow-lg transition overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold text-white bg-red-700 w-fit px-3 py-1 uppercase mb-3 tracking-wide">
                  {item.tag}
                </span>
                <h3 className="text-lg text-gray-800 font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-1">{item.description}</p>
                <Link
                  href={`/blog/${item.slug}`}
                  className="text-sm font-semibold text-red-700 hover:underline self-start mt-auto"
                >
                  Czytaj więcej →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
