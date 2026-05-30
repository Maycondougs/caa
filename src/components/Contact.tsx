import { Instagram, Phone, Info, ExternalLink, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-bg-soft pt-10">
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="geometric-card grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="title-row">
              <h2>Fale Conosco</h2>
            </div>
            
            <a 
              href="https://instagram.com/caa_comunicacao" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-lg mb-6"
            >
              <Instagram size={18} />
              📸 @caa_comunicacao
            </a>

            <div className="space-y-4">
               <div className="flex items-center gap-3 text-sm text-text-main">
                <Mail size={18} className="text-primary" />
                <span>contato@caa-projeto.com.br</span>
              </div>
            </div>
          </div>

          {/* Gov Contacts */}
          <div>
            <div className="title-row">
              <h2>Apoio Governamental</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-primary"><Phone size={18} /></div>
                <div>
                  <p className="text-sm font-bold text-text-main">Disque 100</p>
                  <p className="text-xs text-[#546E7A]">Direitos Humanos</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-primary"><MapPin size={18} /></div>
                <div>
                  <p className="text-sm font-bold text-text-main">CAPS i</p>
                  <p className="text-xs text-[#546E7A]">Atendimento Infantil Especializado</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <div className="title-row">
              <h2>Recursos</h2>
            </div>
            <ul className="space-y-3">
              {[
                { name: "Ministério da Saúde", url: "#" },
                { name: "Lei Berenice Piana", url: "#" },
                { name: "Cadastro Único (Gov)", url: "#" }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.url} className="text-text-main hover:text-primary transition-colors flex items-center gap-2 font-semibold text-sm">
                    {link.name}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[#78909C] text-xs font-semibold uppercase tracking-wider">
          <p>© {currentYear} CAA Comunicação - Inovação & Acolhimento</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
