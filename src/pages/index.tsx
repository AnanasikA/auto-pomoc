import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import CertifiedBrands from '@/components/CertifiedBrands';
import Reviews from '@/components/Reviews';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Reviews />
        <CertifiedBrands />
        <NewsSection />
        <Footer />
        {/* Możesz tu dodać: Opinie, Kontakt, Stopkę */}
      </main>
    </>
  );
}
