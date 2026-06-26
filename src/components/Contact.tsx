import { MapPin, MessageSquare, Instagram, Globe, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="localizacao" className="py-24 border-b border-hud-border relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12" id="contato">
          
          <div>
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 border border-hud-border bg-hud-panel px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-hud-muted mb-4">
                <MapPin size={12} className="text-hud-accent" />
                Coordenadas
              </div>
              <h2 className="font-orbitron font-bold text-4xl lg:text-5xl uppercase tracking-tighter text-hud-text">
                Terminal de <span className="text-hud-accent">Contato</span>
              </h2>
            </div>

            <div className="space-y-4">
              <a href="https://www.google.com/maps/place/?q=place_id:ChIJt59xDlOZngARijuI8ndLErY" target="_blank" rel="noreferrer" className="flex items-start gap-4 p-4 border border-hud-border bg-hud-panel hover:border-hud-accent group transition-colors">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-hud-border bg-hud-bg group-hover:border-hud-accent">
                  <MapPin size={18} className="text-hud-accent" />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-hud-muted mb-1">Loc_ID</div>
                  <div className="font-sans text-sm text-hud-text">
                    Av. General Euclides de Figueiredo, 57<br/>
                    Retiro, Volta Redonda - RJ
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-hud-muted group-hover:text-hud-accent" />
              </a>

              <a href="https://wa.link/y99gon" target="_blank" rel="noreferrer" className="flex items-start gap-4 p-4 border border-hud-border bg-hud-panel hover:border-hud-accent group transition-colors">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-hud-border bg-hud-bg group-hover:border-hud-accent">
                  <MessageSquare size={18} className="text-hud-accent" />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-hud-muted mb-1">Comm_Channel</div>
                  <div className="font-sans text-sm text-hud-text font-bold">
                    (24) 99922-5630
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-hud-muted group-hover:text-hud-accent" />
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a href="https://instagram.com/Zinnxs.tech" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 border border-hud-border bg-hud-panel hover:border-hud-accent group transition-colors">
                  <Instagram size={16} className="text-hud-muted group-hover:text-hud-accent" />
                  <span className="font-mono text-xs uppercase text-hud-text">@Zinnxs.tech</span>
                </a>
                <a href="https://share.google/3nVBwqFTv3GrntRdT" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 border border-hud-border bg-hud-panel hover:border-hud-accent group transition-colors">
                  <Globe size={16} className="text-hud-muted group-hover:text-hud-accent" />
                  <span className="font-mono text-xs uppercase text-hud-text">Avaliações</span>
                </a>
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col gap-4">
             {/* Map Embed - Styled with Cyber/HUD feel using CSS filters */}
             <div className="flex-1 min-h-[300px] border border-hud-border bg-hud-panel relative overflow-hidden">
                <div className="absolute top-0 left-0 bg-hud-bg border-r border-b border-hud-border px-3 py-1 z-10 font-mono text-[10px] text-hud-accent flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-hud-accent rounded-full animate-pulse" />
                  SAT_UPLINK
                </div>
                <iframe
                  src="https://maps.google.com/maps?q=-22.501645,-44.1261517&z=17&output=embed"
                  className="w-full h-full grayscale invert opacity-70 contrast-125 hover:opacity-90 transition-opacity duration-500"
                  title="Localização Zinnxs Tech"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* HUD Overlay for Map */}
                <div className="absolute inset-0 border-[4px] border-hud-border pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 w-8 h-8 border border-hud-accent -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none flex items-center justify-center">
                  <div className="w-1 h-1 bg-hud-accent rounded-full animate-pulse" />
                </div>
                <div className="absolute top-1/2 left-0 w-full h-px bg-hud-accent/20 pointer-events-none" />
                <div className="absolute top-0 left-1/2 w-px h-full bg-hud-accent/20 pointer-events-none" />
             </div>
             
             {/* CTA Block */}
             <div className="border border-hud-border bg-hud-panel p-6">
                <h3 className="font-orbitron font-bold text-xl uppercase tracking-wider text-hud-text mb-2">
                  Pronto para melhorar<br/>seu setup?
                </h3>
                <p className="font-mono text-xs text-hud-muted mb-6">
                  Fale agora pelo WhatsApp. Orçamento em até 24 horas, com 40 dias de garantia no serviço.
                </p>
                <a href="https://wa.link/y99gon" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-hud-accent text-hud-bg font-mono font-bold uppercase tracking-widest text-sm py-4 hover:bg-hud-accent-bright transition-colors">
                  <MessageSquare size={16} /> Enviar_Sinal
                </a>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
