import { ShieldCheck, Clock, Star, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import DiagnosticPanel from './DiagnosticPanel';

export default function Hero() {
  const [typed, setTyped] = useState("");
  const fullText = "Precisa de um reparo?";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, ++i));
      if (i >= fullText.length) clearInterval(interval);
    }, 65);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden border-b border-hud-border">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      
      {/* Brutalist accents */}
      <div className="absolute top-1/4 -left-4 w-8 h-px bg-hud-accent" />
      <div className="absolute bottom-1/4 -right-4 w-8 h-px bg-hud-accent" />
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-0">
        
        {/* Left Col */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 border border-hud-border bg-hud-panel px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-hud-accent">
            <span className="w-1.5 h-1.5 bg-hud-accent animate-pulse" />
            Assistência Técnica // VR-RJ
          </div>
          
          <div className="space-y-4">
            <h1 className="font-orbitron font-bold text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter text-hud-text leading-none">
              {typed}<span className="text-hud-accent animate-pulse">_</span>
            </h1>
            <p className="font-mono text-sm md:text-base text-hud-muted max-w-lg leading-relaxed border-l-2 border-hud-accent pl-4">
              Especialista em serviços de <span className="text-hud-text">Hardware</span> e <span className="text-hud-text">Software</span>.<br/>
              Deixe sua máquina nova de novo com a Zinnxs Tech.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.link/y99gon" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-hud-accent text-hud-bg font-mono font-bold uppercase tracking-widest text-sm px-6 py-4 hover:bg-hud-accent-bright transition-colors relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">Execute_Orçamento <ArrowRight size={16} /></span>
              <div className="absolute inset-0 bg-hud-text opacity-0 group-hover:opacity-10 transition-opacity" />
            </a>
            <a href="#servicos" className="inline-flex items-center justify-center gap-3 border border-hud-border bg-hud-panel text-hud-muted font-mono uppercase tracking-widest text-sm px-6 py-4 hover:text-hud-text hover:border-hud-accent transition-colors">
              Read_Docs
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-hud-border">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-hud-accent" />
              <span className="font-mono text-[10px] uppercase text-hud-muted">Diag. 48h</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-hud-accent" />
              <span className="font-mono text-[10px] uppercase text-hud-muted">40d Garantia</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={14} className="text-hud-accent" />
              <span className="font-mono text-[10px] uppercase text-hud-muted">Google 5.0</span>
            </div>
          </div>
        </div>

        {/* Right Col - Interactive Diagnostic Panel */}
        <div className="w-full">
          <DiagnosticPanel />
        </div>
      </div>
    </section>
  );
}
