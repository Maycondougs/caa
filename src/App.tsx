/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import FAQ from "./components/FAQ";
import AppSection from "./components/AppSection";
import Contact from "./components/Contact";
import { motion } from "motion/react";

const teaCarouselItems = [
  {
    id: 1,
    title: "O que é o TEA?",
    image: "/img/tea_o_que_e.png",
    text: "O Transtorno do Espectro Autista (TEA) é uma condição do desenvolvimento neurológico caracterizada por dificuldades na comunicação e interação social.",
  },
  {
    id: 2,
    title: "Características Comuns",
    image: "/img/tea_caracteristicas.png",
    text: "Cada indivíduo é único, mas padrões de comportamento repetitivos e interesses restritos são comuns no espectro.",
  },
  {
    id: 3,
    title: "Importância do Diagnóstico",
    image: "/img/tea_diagnostico.png",
    text: "O diagnóstico precoce e a intervenção adequada são fundamentais para o desenvolvimento e autonomia da criança.",
  },
];

const projetoCarouselItems = [
  {
    id: 1,
    title: "Nossa Origem",
    image: "/img/projeto_origem.png",
    text: "O projeto CAA nasceu da necessidade de encontrar formas mais eficientes e humanas de conectar crianças não-verbais ao mundo ao seu redor.",
  },
  {
    id: 2,
    title: "Metodologia Aplicada",
    image: "/img/projeto_metodologia.png",
    text: "Utilizamos as melhores práticas de Comunicação Alternativa e Aumentativa, adaptadas para o contexto digital interativo.",
  },
  {
    id: 3,
    title: "Futuro do Projeto",
    image: "/img/projeto_futuro.png",
    text: "Estamos expandindo nossas ferramentas para incluir suporte a famílias e educadores de todo o país.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary-light selection:text-primary">
      <Navbar />
      
      <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        {/* Geometric Grid Layout for Desktop */}
        <div className="grid lg:grid-cols-3 lg:grid-rows-[auto_1fr] gap-6">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-1 lg:row-span-2">
            <Hero />
          </div>

          {/* Secondary Column: Sliders & App */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <section id="sobre-tea">
              <div className="title-row px-5 pt-5 bg-white rounded-t-[20px] border-x border-t border-primary-accent mb-0">
                <h2>Sobre o TEA</h2>
              </div>
              <Carousel items={teaCarouselItems} />
            </section>

            <section id="app">
              <AppSection />
            </section>
          </div>

          {/* Tertiary Column: FAQ & Proyecto */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <section id="duvidas">
              <FAQ />
            </section>

            <section id="sobre-projeto">
              <div className="title-row px-5 pt-5 bg-white rounded-t-[20px] border-x border-t border-primary-accent mb-0">
                <h2>O Projeto</h2>
              </div>
              <Carousel items={projetoCarouselItems} />
            </section>
          </div>

        </div>
      </main>

      <Contact />
    </div>
  );
}

