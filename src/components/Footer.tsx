import { Cpu, Instagram, MessageSquare, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-hud-border bg-hud-bg py-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center border border-hud-border bg-hud-panel">
            <Cpu size={12} className="text-hud-accent" />
          </div>
          <span className="font-orbitron font-bold text-sm tracking-widest text-hud-text uppercase">
            Zinnxs<span className="text-hud-accent">Tech</span>
          </span>
        </div>

        <div className="font-mono text-[10px] uppercase tracking-widest text-hud-muted">
          &copy; 2026 Zinnxs Tech. Todos os direitos reservados.
        </div>

        <div className="flex items-center gap-2">
          <a href="https://wa.link/y99gon" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center border border-hud-border bg-hud-panel hover:border-hud-accent hover:text-hud-accent transition-colors text-hud-muted">
            <MessageSquare size={14} />
          </a>
          <a href="https://instagram.com/Zinnxs.tech" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center border border-hud-border bg-hud-panel hover:border-hud-accent hover:text-hud-accent transition-colors text-hud-muted">
            <Instagram size={14} />
          </a>
          <a href="https://share.google/3nVBwqFTv3GrntRdT" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center border border-hud-border bg-hud-panel hover:border-hud-accent hover:text-hud-accent transition-colors text-hud-muted">
            <Globe size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
