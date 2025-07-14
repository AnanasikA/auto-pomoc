'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Wulkanizacja() {
  return (
    <section className="bg-white">
      <Head>
        <title>Na czym polega wulkanizacja? | Marecki</title>
        <meta
          name="description"
          content="Dowiedz się, czym jest wulkanizacja, kiedy warto z niej skorzystać i jak wygląda proces naprawy opony."
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
          Na czym polega wulkanizacja i kiedy warto ją wykonać?
        </h1>

        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-10 rounded overflow-hidden">
          <Image
            src="/tyre.jpg"
            alt="Wulkanizacja opony"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 768px"
            className="object-cover rounded"
          />
        </div>

        <p className="mb-5">
          Wulkanizacja to proces naprawy uszkodzonej opony, dzięki któremu nie musisz od razu kupować nowego ogumienia.
          Jeśli złapałeś „kapcia” albo zauważyłeś spadek ciśnienia w kole – warto sprawdzić, czy uszkodzenie można naprawić.
        </p>

        <h2 className="text-lg sm:text-xl font-bold mt-6 mb-2">Jakie uszkodzenia można naprawić?</h2>
        <p className="mb-5">
          Najczęściej naprawiamy przebicia powstałe przez gwoździe, śruby, szkło lub inne ostre przedmioty.
          Jeśli uszkodzenie znajduje się na bieżniku i nie jest zbyt duże – oponę można uratować.
        </p>

        <h2 className="text-lg sm:text-xl font-bold mt-6 mb-2">Na czym polega proces wulkanizacji?</h2>
        <p className="mb-5">
          Opona jest zdejmowana z felgi, dokładnie czyszczona i sprawdzana. Następnie uszkodzenie jest uszczelniane od wewnątrz (np. łatką lub kołkiem),
          a całość poddawana jest testowi ciśnienia. Wszystko po to, byś mógł wrócić bezpiecznie na drogę.
        </p>

        <h2 className="text-lg sm:text-xl font-bold mt-6 mb-2">Czy każdą oponę da się naprawić?</h2>
        <p className="mb-5">
          Niestety nie. Jeśli uszkodzenie znajduje się na boku opony lub opona jest stara i zużyta – może być konieczna wymiana.
          Zawsze doradzimy uczciwie – czy naprawa ma sens, czy lepiej kupić nową oponę.
        </p>

        <h2 className="text-lg sm:text-xl font-bold mt-6 mb-2">Dlaczego warto wybrać firmę Marecki?</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Szybka diagnoza i uczciwa wycena</li>
          <li>Profesjonalny sprzęt do montażu i wyważania opon</li>
          <li>Wulkanizacja w warsztacie (Pełcznica)</li>
          <li>Możliwość umówienia się na konkretną godzinę</li>
        </ul>

        <p className="mb-6">
          Nie każda usterka to powód do paniki – sprawdzimy Twoją oponę i powiemy szczerze, co dalej.
          Naszym celem jest Twoje bezpieczeństwo i spokojna głowa.
        </p>

        <a
          href="tel:+48721291739"
          className="inline-block bg-red-700 text-white px-6 py-3 rounded font-semibold hover:bg-black transition w-full sm:w-auto text-center"
        >
          Umów szybką naprawę opony →
        </a>
      </main>

      <Footer />
    </section>
  );
}
