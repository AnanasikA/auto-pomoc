'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-sm sticky top-0 z-50 bg-black shadow-sm">
      {/* 🔷 Górny pasek */}
      <div className="relative w-full text-white font-medium">
        <div className="flex flex-col md:flex-row h-auto md:h-12 w-full overflow-hidden">
          <div className="w-full md:w-2/3 h-12 bg-blue-900 clip-left flex items-center pl-4">
            Pomoc drogowa, wymiana opon i naprawy
          </div>
          <div className="w-full md:w-2/3 h-12 bg-red-700 clip-right flex items-center justify-end pr-4 gap-4">
            <div className="px-2 py-1 border-r">Dostępność: 24h / 7 dni</div>
            <a
              href="https://www.facebook.com/marek.pietraszewski.39"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* ⚪️ Środkowy pasek */}
      <div className="flex bg-white relative overflow-hidden">
        {/* 🔴 Lewa kolumna: Logo */}
        <div className="w-full md:w-1/3 flex items-center justify-between md:justify-center px-4 py-3 md:px-0 relative bg-white z-10">
          <div className="text-3xl font-extrabold text-red-700">
            Marecki <span className="text-black">24/7</span>
          </div>

          {/* 🍔 Hamburger tylko na mobile */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* 🔺 Pionowa pochylona linia na desktop */}
          <div className="hidden md:block absolute right-[-10px] top-[-20px] h-[160%] w-[1px] bg-gray-300 transform rotate-[30deg] origin-top" />
        </div>

        {/* 🔲 Prawa kolumna: kontakt + menu */}
        <div className="hidden md:flex w-2/3 flex-col justify-center px-6 py-4 md:pl-10 md:ml-[-1px] border-l border-gray-200">
          {/* 📞 Telefon + Adres */}
          <div className="flex flex-wrap sm:flex-nowrap justify-center gap-10 pb-3 text-[15px] text-gray-800">
            <div className="flex flex-col items-center group relative">
              <span className="text-xs text-gray-500 mb-1">Zadzwoń o każdej porze</span>
              <a href="tel:+48721291739" className="flex items-center gap-2 relative group">
                <span className="p-2 border border-gray-300 text-red-700">
                  <FaPhoneAlt />
                </span>
                <span className="relative">
                  +48 721 291 739
                  <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-red-700 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </div>

            <div className="flex flex-col items-center group relative">
              <span className="text-xs text-gray-500 mb-1">Nasza lokalizacja</span>
              <div className="flex items-center gap-2 relative group">
                <span className="p-2 border border-gray-300 text-red-700">
                  <FaMapMarkerAlt />
                </span>
                <span className="relative">
                  <a
  href="https://www.google.com/maps?q=55-080+Pełcznica,+19"
  target="_blank"
  rel="noopener noreferrer"
>
  55-080 Pełcznica, 19
</a>
                  <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-red-700 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </div>
            </div>
          </div>

          {/* 🔻 Pozioma linia */}
          <div className="border-t border-gray-200 w-[160%] -ml-[52%] mb-3" />

          {/* 📄 Menu i CTA */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <nav className="flex flex-wrap justify-center gap-6 font-medium text-gray-700">
              {[
                { label: 'Strona główna', href: '/' },
                { label: 'O nas', href: '#o-nas' },
                { label: 'Usługi', href: '#uslugi' },
                { label: 'Opinie', href: '#opinie' },
                { label: 'Kontakt', href: '#kontakt' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="relative group">
                  <span className="hover:text-black transition">{item.label}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

           <Link
  href="#kontakt"
  className="inline-block bg-black text-white px-5 py-2 mt-2 hover:bg-red-700 transition"
  onClick={() => setMenuOpen(false)}
>
  Potrzebujesz pomocy?
</Link>

          </div>
        </div>
      </div>

      {/* 📱 Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200 text-center px-4 py-6 space-y-4">
          <a href="tel:+48721291739" className="block text-red-700 font-medium">
            <FaPhoneAlt className="inline mr-2" /> +48 721 291 739
          </a>
          <div className="text-gray-700">
            <FaMapMarkerAlt className="inline mr-2 text-red-700" />
            55-080 Pełcznica, ul. 19
          </div>
          <nav className="flex flex-col gap-4 text-gray-700 font-medium">
            {[
              { label: 'Strona główna', href: '/' },
              { label: 'O nas', href: '#o-nas' },
              { label: 'Usługi', href: '#uslugi' },
              { label: 'Opinie', href: '#opinie' },
              { label: 'Kontakt', href: '#kontakt' },
            ].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
         <Link
  href="#kontakt"
  className="inline-block bg-black text-white px-5 py-2 mt-2 hover:bg-red-700 transition"
  onClick={() => setMenuOpen(false)}
>
  Potrzebujesz pomocy?
</Link>

        </div>
      )}
    </header>
  );
}
