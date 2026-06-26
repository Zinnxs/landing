import { useState, useEffect } from 'react';
import { Terminal, Cpu, HardDrive, Monitor, AlertTriangle, ArrowRight, CheckSquare, Square, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Step = 'device' | 'symptom' | 'result';

const devices = [
  { id: 'desktop', label: 'Desktop / PC Gamer', icon: Cpu },
  { id: 'notebook', label: 'Notebook / Laptop', icon: Monitor },
  { id: 'other', label: 'Periféricos / Outros', icon: HardDrive },
];

const symptoms: Record<string, { id: string; label: string; action: string }[]> = {
  desktop: [
    { id: 'no-power', label: 'Não liga / Sem sinal', action: 'Diagnóstico de Hardware (Fonte/Placa Mãe)' },
    { id: 'slow', label: 'Lento / Travando', action: 'Formatação Limpa / Upgrade de SSD ou RAM' },
    { id: 'hot', label: 'Aquecendo muito / Desligando', action: 'Limpeza Preventiva Completa + Pasta Térmica' },
    { id: 'bsod', label: 'Tela Azul / Erros constantes', action: 'Otimização de Sistema / Check de Memória' },
  ],
  notebook: [
    { id: 'no-power', label: 'Não liga / Bateria viciada', action: 'Diagnóstico de Hardware / Troca de Bateria' },
    { id: 'slow', label: 'Lento / Travando', action: 'Formatação Limpa / Upgrade de SSD ou RAM' },
    { id: 'hot', label: 'Esquentando muito / Barulho', action: 'Limpeza Preventiva Completa + Pasta Térmica' },
    { id: 'screen', label: 'Problema na Tela / Dobradiça', action: 'Manutenção Física (Tela/Carcaça)' },
  ],
  other: [
    { id: 'dirty', label: 'Teclado/Mouse sujos', action: 'Limpeza de Periféricos' },
    { id: 'software', label: 'Problemas de Software/Drivers', action: 'Instalação de Drivers / Pacotes' },
  ]
};

export default function DiagnosticPanel() {
  const [step, setStep] = useState<Step>('device');
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [selectedSymptom, setSelectedSymptom] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const handleDeviceSelect = (id: string) => {
    setSelectedDevice(id);
    setStep('symptom');
  };

  const handleSymptomSelect = (id: string) => {
    setSelectedSymptom(id);
    setAnalyzing(true);
    setStep('result');
  };

  useEffect(() => {
    if (analyzing) {
      const timer = setTimeout(() => {
        setAnalyzing(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [analyzing]);

  const reset = () => {
    setStep('device');
    setSelectedDevice(null);
    setSelectedSymptom(null);
    setAnalyzing(false);
  };

  const currentSymptoms = selectedDevice ? symptoms[selectedDevice] : [];
  const recommendation = currentSymptoms.find(s => s.id === selectedSymptom)?.action;

  return (
    <motion.div layout className="w-full border border-hud-border bg-hud-panel p-4 overflow-hidden relative flex flex-col group">
      <div className="absolute inset-0 scanline pointer-events-none opacity-20 z-0" />
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-hud-border pb-2 mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-hud-accent" />
          <span className="font-mono text-[10px] uppercase text-hud-muted">Pré-Diagnóstico BETA</span>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 border border-hud-border bg-hud-bg" />
          <div className="w-2 h-2 border border-hud-border bg-hud-accent animate-pulse" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-[220px]">
        <AnimatePresence mode="wait">
          {step === 'device' && (
            <motion.div 
              key="device"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col"
            >
              <div className="font-mono text-xs text-hud-accent mb-4 flex items-center gap-2">
                <AlertTriangle size={14} />
                Selecione o equipamento alvo:
              </div>
              <div className="grid gap-3">
                {devices.map(dev => (
                  <button 
                    key={dev.id}
                    onClick={() => handleDeviceSelect(dev.id)}
                    className="flex items-center gap-4 p-3 border border-hud-border bg-hud-bg hover:border-hud-accent hover:bg-hud-accent/10 transition-colors text-left"
                  >
                    <dev.icon size={20} className="text-hud-muted" />
                    <span className="font-mono text-sm text-hud-text uppercase tracking-wider">{dev.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'symptom' && (
            <motion.div 
              key="symptom"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col"
            >
              <div className="font-mono text-xs text-hud-accent mb-4 flex items-center gap-2">
                <AlertTriangle size={14} />
                Identifique o sintoma principal:
              </div>
              <div className="grid gap-2">
                {currentSymptoms.map(sym => (
                  <button 
                    key={sym.id}
                    onClick={() => handleSymptomSelect(sym.id)}
                    className="flex items-center gap-3 p-3 border border-hud-border bg-hud-bg hover:border-hud-accent hover:bg-hud-accent/10 transition-colors text-left"
                  >
                    <Square size={14} className="text-hud-muted" />
                    <span className="font-mono text-xs text-hud-text uppercase">{sym.label}</span>
                  </button>
                ))}
              </div>
              <button onClick={reset} className="mt-6 font-mono text-[10px] text-hud-muted hover:text-hud-accent uppercase tracking-widest flex items-center gap-2 w-fit">
                <RefreshCcw size={10} /> Voltar
              </button>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col h-full"
            >
              {analyzing ? (
                <div className="flex-1 flex flex-col items-center justify-center gap-4 py-8">
                  <div className="w-12 h-12 border-2 border-hud-border border-t-hud-accent rounded-full animate-spin" />
                  <div className="font-mono text-xs text-hud-accent uppercase tracking-widest animate-pulse">
                    Analisando matriz de dados...
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <div className="font-mono text-[10px] text-hud-muted uppercase tracking-widest mb-1">
                    Resultado do Diagnóstico
                  </div>
                  <div className="border border-hud-accent bg-hud-accent/10 p-4 mb-4">
                    <div className="font-mono text-xs text-hud-accent mb-2">Ação Recomendada:</div>
                    <div className="font-orbitron font-bold text-lg text-hud-text uppercase tracking-wider">
                      {recommendation}
                    </div>
                  </div>
                  
                  <p className="font-mono text-[10px] text-hud-muted mb-6 leading-relaxed">
                    * Este é um diagnóstico preliminar. O orçamento exato será confirmado em até 48h após a entrada do equipamento no laboratório.
                  </p>

                  <div className="mt-auto grid gap-3">
                    <a href={`https://wa.link/y99gon?text=Ol%C3%A1!%20Fiz%20o%20pr%C3%A9-diagn%C3%B3stico%20no%20site.%20Meu%20aparelho%20%C3%A9%20um%20${devices.find(d => d.id === selectedDevice)?.label}%20e%20o%20sintoma%20%C3%A9:%20${currentSymptoms.find(s => s.id === selectedSymptom)?.label}.`} 
                      target="_blank" rel="noreferrer" 
                      className="flex items-center justify-center gap-2 bg-hud-accent text-hud-bg font-mono font-bold uppercase tracking-widest text-xs py-3 hover:bg-hud-accent-bright transition-colors"
                    >
                      Solicitar Orçamento <ArrowRight size={14} />
                    </a>
                    <button onClick={reset} className="flex items-center justify-center gap-2 border border-hud-border bg-hud-bg text-hud-muted font-mono uppercase tracking-widest text-xs py-3 hover:text-hud-text hover:border-hud-accent transition-colors">
                      <RefreshCcw size={14} /> Novo Teste
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
