'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function BezpieczneHolowanie() {
  return (
    <section className="bg-white">
      <Head>
        <title>Na co zwrócić uwagę przy holowaniu auta? | Marecki</title>
        <meta
          name="description"
          content="Poznaj kluczowe zasady bezpiecznego holowania auta i uniknij nieprzyjemnych sytuacji na drodze."
        />
      </Head>

      <Header />

      <main className="max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 text-gray-800 leading-relaxed">
        <Link
          href="/#news"
          className="text-red-700 text-sm font-semibold underline hover:text-black transition"
        >
          ← Wróć
        </Link>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-700 mt-6 mb-8">
          Na co zwrócić uwagę przy holowaniu auta?
        </h1>

        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-10 rounded overflow-hidden">
          <Image
            src="/towing.jpg"
            alt="Holowanie auta"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 768px"
            className="object-cover rounded"
          />
        </div>

        <p className="mb-5">
          Holowanie auta to czynność, którą większość kierowców wykonuje rzadko, ale często w stresujących sytuacjach.
          Nieprawidłowe holowanie może doprowadzić do uszkodzenia pojazdu lub stworzenia zagrożenia na drodze.
        </p>

        <h2 className="text-lg sm:text-xl font-bold mt-6 mb-2">1. Sprawdź, czy można holować</h2>
        <p className="mb-5">
          Nie każdy pojazd nadaje się do holowania! Niektóre auta z automatyczną skrzynią biegów lub napędem hybrydowym mogą zostać uszkodzone.
          W razie wątpliwości – lepiej skorzystać z lawety.
        </p>

        <h2 className="text-lg sm:text-xl font-bold mt-6 mb-2">2. Używaj właściwego sprzętu</h2>
        <p className="mb-5">
          Hol powinien być odpowiednio długi (ok. 4-6 m) i elastyczny, z oznaczeniami w postaci chorągiewki. Upewnij się, że zaczepy są solidne i umieszczone w wyznaczonych punktach.
        </p>

        <h2 className="text-lg sm:text-xl font-bold mt-6 mb-2">3. Światła i oznaczenia</h2>
        <p className="mb-5">
          Holowane auto musi mieć włączone światła awaryjne, a jeśli są niedostępne – przynajmniej światła pozycyjne. Pojazd holujący również powinien sygnalizować manewry kierunkowskazami.
        </p>

        <h2 className="text-lg sm:text-xl font-bold mt-6 mb-2">4. Styl jazdy i komunikacja</h2>
        <p className="mb-5">
          Jazda podczas holowania powinna być spokojna, bez gwałtownych hamowań czy przyspieszeń. Warto wcześniej omówić trasę i sygnały porozumiewawcze między kierowcami.
        </p>

        <p className="mb-6">
          Jeśli masz wątpliwości lub nie czujesz się pewnie – zadzwoń po profesjonalną pomoc drogową. To bezpieczniejsze dla Ciebie i innych.
        </p>

        <a
          href="tel:+48721291739"
          className="inline-block bg-red-700 text-white px-6 py-3 rounded font-semibold hover:bg-black transition w-full sm:w-auto text-center"
        >
          Zadzwoń po pomoc drogową →
        </a>
      </main>

      <Footer />
    </section>
  );
}
