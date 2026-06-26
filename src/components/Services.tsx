import { useState } from 'react';
import { Cpu, HardDrive, Wrench, Settings, Search, ArrowRight, Zap, Monitor, Activity, ShieldAlert, Package, Layers, X, Minus, Square } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const hwServices = [
  { icon: Search, label: 'Limpeza Preventiva Completa', desc: 'Desmontagem, remoção de poeira, troca de pasta térmica de alta performance e organização de cabos. Aumenta a vida útil e reduz o aquecimento.' },
  { icon: Cpu, label: 'Montagem de PC Standard/Office', desc: 'Montagem profissional de componentes voltados para produtividade e escritório, com cable management básico e testes de estabilidade.' },
  { icon: Monitor, label: 'Montagem de PC Gamer', desc: 'Montagem avançada com foco em refrigeração, cable management premium, configuração de RGB e testes de stress de alta carga.' },
  { icon: Wrench, label: 'Limpeza de Periféricos', desc: 'Higienização profunda de teclados mecânicos/membrana, mouses e headsets, removendo resíduos e restaurando a aparência original.' },
  { icon: Zap, label: 'Upgrade de peças', desc: 'Consultoria, instalação e configuração de novos componentes (RAM, SSD, GPU, etc) para maximizar o desempenho do seu setup atual.' },
];

const swServices = [
  { icon: HardDrive, label: 'Formatação com Backup', desc: 'Salvamento seguro de seus arquivos, formatação completa do sistema operacional e restauração dos dados. Windows/Linux.' },
  { icon: Activity, label: 'Formatação "Limpa"', desc: 'Instalação do sistema operacional do zero, sem preservação de dados. Ideal para quem já fez backup ou para computadores recém-montados.' },
  { icon: Settings, label: 'Instalação de Drivers', desc: 'Busca, instalação e atualização dos drivers mais recentes e adequados para garantir o pleno funcionamento do seu hardware.' },
  { icon: ShieldAlert, label: 'Otimização de Sistema', desc: 'Ajustes finos no sistema operacional, remoção de bloatwares, desativação de serviços desnecessários para máxima performance.' },
  { icon: Package, label: 'Instalação de Pacotes Essenciais', desc: 'Instalação de navegadores, visualizadores de PDF, pacotes Office, descompactadores e codecs necessários para uso diário.' },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<{ icon: any, label: string, desc: string } | null>(null);

  return (
    <section id="servicos" className="py-24 border-b border-hud-border relative">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 border border-hud-border bg-hud-panel px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-hud-muted mb-4">
            <Layers size={12} className="text-hud-accent" />
            Catálogo de Serviços
          </div>
          <h2 className="font-orbitron font-bold text-4xl lg:text-5xl uppercase tracking-tighter text-hud-text">
            Nossos <span className="text-hud-accent">Protocolos</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Hardware */}
          <div className="border border-hud-border bg-hud-panel">
            <div className="border-b border-hud-border p-4 bg-hud-bg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cpu className="text-hud-accent" />
                <span className="font-orbitron font-bold uppercase tracking-widest text-hud-text">Hardware</span>
              </div>
              <span className="font-mono text-[10px] text-hud-muted">MOD_01</span>
            </div>
            <div className="p-4 grid gap-3">
              {hwServices.map((srv, i) => (
                <button 
                  key={i} 
                  onClick={() => setSelectedService(srv)}
                  className="flex w-full items-center gap-4 p-3 border border-hud-border bg-hud-bg hover:border-hud-accent hover:bg-hud-accent/5 transition-colors group text-left cursor-pointer"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-hud-border bg-hud-panel group-hover:border-hud-accent transition-colors">
                    <srv.icon size={14} className="text-hud-muted group-hover:text-hud-accent" />
                  </div>
                  <span className="font-mono text-xs text-hud-text uppercase">{srv.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Software */}
          <div className="border border-hud-border bg-hud-panel">
            <div className="border-b border-hud-border p-4 bg-hud-bg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <HardDrive className="text-hud-accent" />
                <span className="font-orbitron font-bold uppercase tracking-widest text-hud-text">Software</span>
              </div>
              <span className="font-mono text-[10px] text-hud-muted">MOD_02</span>
            </div>
            <div className="p-4 grid gap-3">
              {swServices.map((srv, i) => (
                <button 
                  key={i} 
                  onClick={() => setSelectedService(srv)}
                  className="flex w-full items-center gap-4 p-3 border border-hud-border bg-hud-bg hover:border-hud-accent hover:bg-hud-accent/5 transition-colors group text-left cursor-pointer"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-hud-border bg-hud-panel group-hover:border-hud-accent transition-colors">
                    <srv.icon size={14} className="text-hud-muted group-hover:text-hud-accent" />
                  </div>
                  <span className="font-mono text-xs text-hud-text uppercase">{srv.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="https://wa.link/y99gon" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-dashed border-hud-accent bg-hud-accent/5 text-hud-accent font-mono text-xs uppercase px-6 py-3 hover:bg-hud-accent hover:text-hud-bg transition-colors">
            Serviço não listado? Nos envie uma mensagem, temos muito mais! <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-hud-bg/60"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg border border-hud-border bg-hud-panel/80 backdrop-blur-xl shadow-2xl flex flex-col relative overflow-hidden"
            >
              <div className="absolute inset-0 scanline pointer-events-none opacity-20 z-0" />
              
              {/* Header */}
              <div className="flex justify-between items-center border-b border-hud-border p-3 bg-hud-bg/80 backdrop-blur-sm relative z-10">
                <div className="flex items-center gap-2">
                  <selectedService.icon size={14} className="text-hud-accent" />
                  <span className="font-mono text-[10px] uppercase text-hud-muted">sys_info.exe</span>
                </div>
                <div className="flex gap-2 items-center">
                  <button className="text-hud-muted hover:text-hud-text transition-colors"><Minus size={14} /></button>
                  <button className="text-hud-muted hover:text-hud-text transition-colors"><Square size={12} /></button>
                  <button onClick={() => setSelectedService(null)} className="text-hud-muted hover:text-red-500 transition-colors ml-2"><X size={16} /></button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 flex items-center justify-center border border-hud-border bg-hud-bg">
                     <selectedService.icon size={24} className="text-hud-accent" />
                   </div>
                   <h3 className="font-orbitron font-bold text-lg text-hud-text uppercase tracking-wider">{selectedService.label}</h3>
                </div>
                
                <p className="font-mono text-sm text-hud-muted leading-relaxed mb-6 border-l-2 border-hud-accent pl-4">
                  {selectedService.desc}
                </p>

                <div className="flex justify-end gap-3 mt-8">
                   <button onClick={() => setSelectedService(null)} className="border border-hud-border px-4 py-2 font-mono text-xs uppercase text-hud-muted hover:text-hud-text hover:bg-hud-bg transition-colors">
                     Cancelar
                   </button>
                   <a href={`https://wa.link/y99gon?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20${selectedService.label}.`} target="_blank" rel="noreferrer" className="bg-hud-accent text-hud-bg px-4 py-2 font-mono text-xs uppercase font-bold hover:bg-hud-accent-bright transition-colors flex items-center gap-2">
                     Solicitar <ArrowRight size={14} />
                   </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
