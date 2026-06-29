import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Cpu, Sun, Moon } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLightMode(true);
      document.documentElement.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    if (!isLightMode) {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (clickCount > 0 && clickCount < 5) {
      const timer = setTimeout(() => setClickCount(0), 2000);
      return () => clearTimeout(timer);
    }
    if (clickCount >= 5) {
      // Trigger flash and open URL
      const flash = document.createElement('div');
      flash.className = 'fixed inset-0 z-[9999] bg-hud-accent/20 pointer-events-none transition-opacity duration-150';
      document.body.appendChild(flash);
      setTimeout(() => {
        flash.remove();
        window.open('https://zinnxs-os.vercel.app', '_blank', 'noopener,noreferrer');
        setClickCount(0);
      }, 200);
    }
  }, [clickCount]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-hud-bg/90 backdrop-blur-md border-hud-border' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); setClickCount(c => c + 1); }}
            className="flex items-center gap-2 relative group"
          >
            <div className="w-8 h-8 flex items-center justify-center bg-hud-panel border border-hud-accent text-hud-text group-hover:bg-hud-accent/20 transition-colors">
              <Cpu size={18} />
            </div>
            <span className="font-orbitron font-bold text-lg tracking-widest text-hud-text uppercase">
              Zinnxs<span className="text-hud-accent">Tech</span>
            </span>
            {/* Secret Dots */}
            {clickCount > 0 && (
              <div className="absolute -bottom-3 left-0 flex gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-none border border-hud-accent ${i <= clickCount ? 'bg-hud-accent' : 'bg-transparent'}`} />
                ))}
              </div>
            )}
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="font-mono text-xs uppercase tracking-widest text-hud-muted hover:text-hud-text transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-hud-accent group-hover:w-full transition-all" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="flex items-center justify-center w-8 h-8 border border-hud-border bg-hud-panel text-hud-muted hover:text-hud-text hover:border-hud-accent transition-colors"
              title="Alternar Tema"
            >
              {isLightMode ? <Moon size={14} /> : <Sun size={14} />}
            </button>
            <a href="https://share.google/3nVBwqFTv3GrntRdT" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-hud-muted hover:text-hud-text transition-colors border border-hud-border px-3 py-1.5 hover:bg-hud-panel">
              Google <ArrowUpRight size={12} />
            </a>
            <a href="https://wa.link/y99gon" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest bg-hud-accent text-hud-bg px-4 py-2 hover:bg-hud-accent-bright transition-colors font-bold">
              Orçamento
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <button 
              onClick={toggleTheme} 
              className="flex items-center justify-center w-8 h-8 border border-hud-border bg-hud-panel text-hud-muted hover:text-hud-text transition-colors"
            >
              {isLightMode ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button className="text-hud-muted hover:text-hud-text" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-hud-bg/95 backdrop-blur-sm border-b border-hud-border flex flex-col pt-20 px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-6 p-4 border border-hud-border bg-hud-panel">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="font-mono text-sm uppercase tracking-widest text-hud-muted hover:text-hud-text transition-colors border-b border-hud-border pb-2">
                {link.name}
              </a>
            ))}
            <a href="https://share.google/3nVBwqFTv3GrntRdT" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-hud-muted border border-hud-border p-3 justify-center">
              Google Negócios <ArrowUpRight size={14} />
            </a>
            <a href="https://wa.link/y99gon" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest bg-hud-accent text-hud-bg p-3 font-bold">
              Fazer Orçamento
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
