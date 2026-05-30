import { Play } from "lucide-react";

export default function AppSection() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="geometric-card min-h-[400px]">
        <div className="title-row">
          <h2>Nosso Aplicativo</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 mt-6">
          {/* Info Side */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="text-[#546E7A] text-lg leading-relaxed mb-8">
              Em desenvolvimento: Uma interface intuitiva de Comunicação Alternativa (CAA) 
              totalmente personalizável para atender as necessidades específicas de cada criança, 
              utilizando troca de figuras para facilitar a expressão.
            </p>
            <div className="space-y-4">
              {["Personalização de Ícones", "Feedback Sonoro", "Rastreamento de Progresso"].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-text-main">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="font-semibold text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Video Side */}
          <div className="lg:w-1/2 relative bg-[#263238] rounded-xl flex items-center justify-center min-h-[300px] overflow-hidden group">
            {/* Embedded Video Placeholder */}
            <div className="absolute inset-0 z-0">
               <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&controls=0&loop=1" 
                title="Demonstração do Aplicativo"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full object-cover opacity-80"
              ></iframe>
            </div>
            
            <button className="relative z-10 w-20 h-20 bg-primary/20 backdrop-blur rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform group border border-white/20">
              <Play fill="white" size={32} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
