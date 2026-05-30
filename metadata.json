import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, Scale, BookOpen, ChevronRight } from "lucide-react";

const duvidas = [
  {
    pergunta: "O que é o BPC/LOAS?",
    resposta: "O Benefício de Prestação Continuada (BPC) é um direito garantido pela Lei Orgânica da Assistência Social (LOAS). Ele assegura um salário mínimo mensal às pessoas com deficiência, incluindo o TEA, que comprovem não possuir meios de prover a própria manutenção.",
    categoria: "Direitos"
  },
  {
    pergunta: "A criança com TEA tem direito ao INSS?",
    resposta: "Crianças com autismo podem ter direito ao BPC, que é pago pelo INSS. Não se trata de uma aposentadoria por contribuição, mas sim de um benefício assistencial. É necessário passar por perícia médica e social do INSS.",
    categoria: "Benefícios"
  },
  {
    pergunta: "Quais documentos são necessários para o pedido?",
    resposta: "Geralmente são solicitados: Laudo Médico atualizado com CID-10, documentos de identificação de todos os membros do grupo familiar, comprovante de residência e o Cadastro Único (CadÚnico) atualizado.",
    categoria: "Documentação"
  },
  {
    pergunta: "O plano de saúde deve cobrir as terapias?",
    resposta: "Sim. A Lei Berenice Piana estabelece que o autista é pessoa com deficiência para todos os efeitos legais, e a ANS determinou que não há limite de sessões para terapias como ABA, fonoterapia e terapia ocupacional.",
    categoria: "Direitos"
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="geometric-card">
        <div className="title-row">
          <h2>Leis e Direitos</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Info Side */}
          <div>
            <p className="text-text-main text-lg leading-relaxed mb-6">
              Muitas famílias desconhecem os direitos garantidos por lei. Entender o LOAS, INSS e a Lei Berenice Piana é o primeiro passo para garantir a assistência que seu filho(a) merece.
            </p>
            <p className="text-xs text-[#78909C] italic">
              Clique nas perguntas ao lado para ver as respostas interativas.
            </p>
          </div>

          {/* Accordion Side */}
          <div className="space-y-3">
            {duvidas.map((item, index) => (
              <div 
                key={index}
                className={`bg-gray-light p-4 rounded-lg border-l-4 transition-all cursor-pointer ${
                  activeIndex === index ? "border-primary shadow-sm" : "border-primary/20 hover:border-primary/50"
                }`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className={`font-bold text-sm transition-colors ${activeIndex === index ? "text-primary" : "text-text-main"}`}>
                    {item.pergunta}
                  </span>
                  <div className={`transition-transform duration-300 ${activeIndex === index ? "rotate-90 text-primary" : "text-slate-400"}`}>
                    <ChevronRight size={18} />
                  </div>
                </div>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="text-slate-600 text-xs leading-relaxed border-t border-slate-200 mt-3 pt-3">
                        {item.resposta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
