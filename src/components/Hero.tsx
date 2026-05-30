import { motion } from "motion/react";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  const scrollToApp = () => {
    const element = document.getElementById("app");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-24 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="geometric-card min-h-[500px] flex flex-col justify-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <div className="title-row">
              <h2>Inovação & Acolhimento</h2>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.2] mb-6">
              Como a tecnologia transforma a comunicação no autismo
            </h1>
            <p className="text-[#546E7A] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              A Comunicação Alternativa Para Crianças com TEA (CAA) é uma ponte vital para crianças com TEA. 
              Nossa missão é utilizar recursos tecnológicos táteis e visuais para garantir que cada criança 
              encontre sua própria voz, promovendo autonomia e inclusão social em todos os ambientes.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToApp}
                className="btn-primary flex items-center gap-2 group px-10 py-4 shadow-lg shadow-primary/20 cursor-pointer"
              >
                Conheça Nossas Ferramentas
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
