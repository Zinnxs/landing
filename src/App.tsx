import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-hud-text selection:bg-hud-accent selection:text-hud-bg flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
