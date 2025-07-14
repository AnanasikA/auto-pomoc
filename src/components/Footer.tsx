'use client';

import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#111111] text-white text-sm pt-16 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="px-4 sm:px-10 pb-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {/* 🛠️ Logo + opis */}
        <div>
          <h2 className="text-2xl font-bold mb-3">MARECKI 24/7</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Profesjonalna pomoc drogowa, wulkanizacja i wymiana opon z dojazdem na miejsce. Działamy na terenie Kątów Wrocławskich, Wrocławia i okolic.
          </p>
          <p className="text-white font-bold mb-2">Zadzwoń:</p>
          <p className="text-lg text-red-600 font-bold mb-3">+48 721 291 739</p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/marek.pietraszewski.39" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-xl hover:text-red-600 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-xl hover:text-red-600 transition" />
            </a>
          </div>
        </div>

        {/* 🔧 Usługi */}
        <div>
          <h4 className="text-white font-bold mb-4">Nasze Usługi</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Wulkanizacja</li>
            <li>Wymiana opon</li>
            <li>Pomoc drogowa</li>
            <li>Laweta</li>
            <li>Dojazd do klienta</li>
          </ul>
        </div>

        {/* 🗺️ Mapa strony */}
        <div>
          <h4 className="text-white font-bold mb-4">Mapa Strony</h4>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#home" className="hover:text-white transition">Strona główna</a></li>
            <li><a href="#o-nas" className="hover:text-white transition">O nas</a></li>
            <li><a href="#uslugi" className="hover:text-white transition">Usługi</a></li>
            <li><a href="#kontakt" className="hover:text-white transition">Kontakt</a></li>
          </ul>
        </div>

        {/* 📍 Kontakt */}
        <div>
          <h4 className="text-white font-bold mb-4">Kontakt</h4>
          <ul className="text-gray-400 space-y-3">
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="text-red-600 mt-1" />+48 721 291 739
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="text-red-600 mt-1" />marecki795@o2.pl
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-red-600 mt-1" />55-080 Pełcznica, 19
            </li>
            <li className="flex items-start gap-2">
              <FaClock className="text-red-600 mt-1" />
              <div>
                <p className="text-white font-semibold">Działamy 24/7</p>
                <p>Całodobowa pomoc, także w weekendy i święta</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* 📄 Dolna belka */}
      <div className="border-t border-gray-800 text-center text-xs text-gray-500 py-6">
        © {new Date().getFullYear()} MARECKI 24/7. Wszelkie prawa zastrzeżone.
      </div>
    </motion.footer>
  );
}
