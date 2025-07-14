'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function JakPrzygotowacAuto() {
  return (
    <section className="bg-white">
      <Head>
        <title>Jak przygotować auto do sezonu zimowego | Marecki</title>
        <meta
          name="description"
          content="Praktyczne porady, jak zadbać o auto przed zimą — wymiana opon, akumulator, uszczelki i więcej."
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
          Jak przygotować auto do sezonu zimowego?
        </h1>

        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-10 rounded overflow-hidden">
          <Image
            src="/winter.jpg"
            alt="Zimowy samochód"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 768px"
            className="object-cover rounded"
          />
        </div>

        <p className="mb-5">
          Zima to jedno z najbardziej wymagających wyzwań dla samochodu i kierowcy. Spadek temperatury, śnieg, lód i wilgoć mają wpływ na bezpieczeństwo, komfort jazdy i kondycję techniczną pojazdu.
          Dlatego warto wcześniej przygotować auto i uniknąć stresujących sytuacji w najmniej odpowiednim momencie.
        </p>

        <h2 className="text-lg sm:text-xl font-bold mt-6 mb-2">1. Zmień opony na zimowe</h2>
        <p className="mb-5">
          Opony zimowe mają inną mieszankę gumy i bieżnik, który lepiej trzyma się drogi w niskich temperaturach.
          Jazda na letnich oponach w śniegu to ogromne ryzyko dla Ciebie i innych.
        </p>

        <h2 className="text-lg sm:text-xl font-bold mt-6 mb-2">2. Sprawdź akumulator</h2>
        <p className="mb-5">
          W niskich temperaturach akumulatory szybko tracą moc. Jeśli Twój ma więcej niż 3 lata – warto go sprawdzić i ewentualnie wymienić.
          Objawy słabego akumulatora to trudne odpalanie lub gasnące kontrolki.
        </p>

        <h2 className="text-lg sm:text-xl font-bold mt-6 mb-2">3. Uzupełnij płyny i filtry</h2>
        <p className="mb-5">
          Płyn do spryskiwaczy powinien być zimowy (do -20°C), a płyn chłodniczy mieć odpowiedni poziom ochrony. Warto też wymienić filtr kabinowy, który zimą często ulega zapchaniu.
        </p>

        <h2 className="text-lg sm:text-xl font-bold mt-6 mb-2">4. Zabezpiecz uszczelki i zamki</h2>
        <p className="mb-5">
          Mróz może unieruchomić auto, gdy przymarzną drzwi lub zamek. Posmaruj uszczelki sylikonem i miej w schowku odmrażacz do szyb i zamków.
        </p>

        <h2 className="text-lg sm:text-xl font-bold mt-6 mb-2">5. Zestaw zimowy w bagażniku</h2>
        <p className="mb-5">
          Nigdy nie wiadomo, kiedy ugrzęźniesz w zaspie lub korek zatrzyma Cię na kilka godzin.
          Zawsze miej przy sobie:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Skrobaczkę i szczotkę do śniegu</li>
          <li>Kable rozruchowe i latarkę</li>
          <li>Koc, rękawiczki i wodę</li>
          <li>Łopatkę do śniegu</li>
          <li>Powerbank do telefonu</li>
        </ul>

        <p className="mb-6">
          Regularna kontrola samochodu i przygotowanie do zimy to nie tylko kwestia wygody, ale przede wszystkim bezpieczeństwa.
          Zadbaj o swoje auto już dziś i uniknij problemów na drodze!
        </p>

        <a
          href="tel:+48721291739"
          className="inline-block bg-red-700 text-white px-6 py-3 rounded font-semibold hover:bg-black transition w-full sm:w-auto text-center"
        >
          Umów szybki przegląd zimowy →
        </a>
      </main>

      <Footer />
    </section>
  );
}
