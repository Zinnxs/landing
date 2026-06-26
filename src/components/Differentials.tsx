import { useState } from 'react';
import { Timer, ShieldCheck, FileText, Star, X, Minus, Square, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const diffs = [
  {
    icon: Timer,
    title: 'Diag. 48h',
    desc: 'Avaliação e envio do orçamento completo em no máximo 48 horas após entrega. Sem latência.',
    details: 'Nosso processo de triagem avançada garante que seu equipamento seja analisado em tempo recorde. Assim que o dispositivo entra em nosso laboratório, iniciamos uma série de testes de stress e análises de componentes para identificar a raiz do problema, enviando um relatório completo em até 48 horas úteis.',
    id: 'D01'
  },
  {
    icon: ShieldCheck,
    title: '40 Dias Garantia',
    desc: 'Protocolo de segurança: Todos os serviços possuem 40 dias de cobertura integral.',
    details: 'Nós confiamos na qualidade do nosso trabalho. Diferente do mercado que costuma oferecer garantias curtas, nós asseguramos o funcionamento da peça reparada ou substituída por 40 dias corridos, sem custos adicionais de mão de obra caso o mesmo problema volte a ocorrer nesse período.',
    id: 'D02'
  },
  {
    icon: FileText,
    title: 'Sem Compromisso',
    desc: 'Orçamento pré-execução. Você aprova as diretrizes antes de inicializarmos os processos.',
    details: 'A transparência é o nosso principal pilar. O valor que você vê no orçamento é o valor final que irá pagar. Detalhamos peça por peça e o valor da mão de obra. Caso não aprove, você pode retirar o seu equipamento sem ter que pagar nenhuma taxa extra de avaliação.',
    id: 'D03'
  },
  {
    icon: Star,
    title: 'Verificado',
    desc: 'Alta confiabilidade atestada. Logs de avaliações públicas disponíveis no terminal Google.',
    details: 'Temos dezenas de avaliações reais de clientes satisfeitos em nossa página oficial do Google. Construímos nossa reputação resolvendo casos complexos e prestando um atendimento honesto e direto ao ponto.',
    id: 'D04',
    link: 'https://share.google/3nVBwqFTv3GrntRdT'
  }
];

export default function Differentials() {
  const [selectedDiffId, setSelectedDiffId] = useState<string | null>(null);

  const selectedDiff = diffs.find(d => d.id === selectedDiffId);

  return (
    <section id="diferenciais" className="py-24 border-b border-hud-border relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 border border-hud-border bg-hud-panel px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-hud-muted mb-4">
            <ShieldCheck size={12} className="text-hud-accent" />
            Parâmetros de Qualidade
          </div>
          <h2 className="font-orbitron font-bold text-4xl lg:text-5xl uppercase tracking-tighter text-hud-text">
            Por que <span className="text-hud-accent">Zinnxs Tech</span>?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {diffs.map((d, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedDiffId(d.id)}
              className="border border-hud-border bg-hud-panel hover:border-hud-accent transition-colors flex flex-col group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-2 font-mono text-[10px] text-hud-border group-hover:text-hud-accent/30 transition-colors">
                {d.id}
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 border border-hud-border bg-hud-bg flex items-center justify-center group-hover:border-hud-accent transition-colors">
                    <d.icon className="text-hud-accent" size={20} />
                  </div>
                  <ArrowRight size={16} className="text-hud-muted group-hover:text-hud-accent transition-colors mt-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0" />
                </div>
                
                <h3 className="font-orbitron font-bold text-lg uppercase tracking-wider text-hud-text mb-3">
                  {d.title}
                </h3>
                
                <p className="font-mono text-xs text-hud-muted leading-relaxed">
                  {d.desc}
                </p>

                {d.link && (
                  <div className="mt-4" onClick={e => e.stopPropagation()}>
                    <a href={d.link} target="_blank" rel="noreferrer" className="font-mono text-[10px] uppercase tracking-widest text-hud-accent hover:text-hud-accent-bright flex items-center gap-1 w-fit">
                      Acessar Logs <Star size={10} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedDiff && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-hud-bg/60"
            onClick={() => setSelectedDiffId(null)}
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
                  <selectedDiff.icon size={14} className="text-hud-accent" />
                  <span className="font-mono text-[10px] uppercase text-hud-muted">diff_detail.exe</span>
                </div>
                <div className="flex gap-2 items-center">
                  <button className="text-hud-muted hover:text-hud-text transition-colors"><Minus size={14} /></button>
                  <button className="text-hud-muted hover:text-hud-text transition-colors"><Square size={12} /></button>
                  <button onClick={() => setSelectedDiffId(null)} className="text-hud-muted hover:text-red-500 transition-colors ml-2"><X size={16} /></button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 flex items-center justify-center border border-hud-border bg-hud-bg">
                       <selectedDiff.icon size={24} className="text-hud-accent" />
                     </div>
                     <h3 className="font-orbitron font-bold text-lg text-hud-text uppercase tracking-wider">{selectedDiff.title}</h3>
                  </div>
                  <div className="font-mono text-[10px] text-hud-muted mt-2 border border-hud-border px-2 py-1">
                    {selectedDiff.id}
                  </div>
                </div>
                
                <p className="font-mono text-sm text-hud-muted leading-relaxed mb-6 border-l-2 border-hud-accent pl-4">
                  {selectedDiff.details}
                </p>

                <div className="flex justify-end mt-4">
                   <button onClick={() => setSelectedDiffId(null)} className="border border-hud-border px-6 py-2 font-mono text-xs uppercase text-hud-muted hover:text-hud-text hover:bg-hud-bg transition-colors">
                     Fechar
                   </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
