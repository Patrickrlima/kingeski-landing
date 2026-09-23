import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import About from './components/About';
import VisualBreak from './components/VisualBreak';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollTop from './components/ScrollTop';

export default function App() {
  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-brass-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Pular para o conteúdo
      </a>

      <Navbar />

      <main>
        <Hero />
        <Experience />
        <VisualBreak />
        <Gallery />
        <About />
        <Reviews />
        <Location />
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollTop />
    </>
  );
}
