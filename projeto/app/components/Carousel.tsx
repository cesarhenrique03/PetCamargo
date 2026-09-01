"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/app/components/details/button";

// Criação da array para slides.
const slides = [
  { id: 1, title: "40 ANOS" },
  { id: 2, title: "10 ANOS" },
  { id: 3, title: "20 ANOS" },
  { id: 4, title: "30 ANOS" }
];

export default function Carousel() {
  // Estado inicial dos cards do carrossel.
  const [visibleOrder, setVisibleOrder] = useState<number[]>([
    0, //primeiro da esquerda
    1, //central
    2, //Direita
  ]);

  //esse é o primeiro da esquerda, o card central sempre vai ser o current + 1;
  const current = visibleOrder[0];

  //Função para ir pro próximo
  const goToNext = () => {
    // variável que atualiza os cards visualizados em tela
    setVisibleOrder((prev) => { // prev é o current, card que está a esquerda da tela
      const next = (prev[0] + 1) % slides.length; //se estivermos em current = 0 e tamanho da lista = 4 fica... 0+1%4 = 1%4=1(resto).
      return[
        next, //passa a ser, pelo calculo acima, 1
        (next + 1) % slides.length, //1+1%4 = 2%4=2(resto)
        (next + 2) % slides.length //1+2%4 = 3%4=3(resto)
      ];
    });
  }

  //Função que volta o card
  const goToPrev = () => {
    setVisibleOrder((prev) => { //mesma situação
      const next = (prev[0] - 1 + slides.length) % slides.length; //current=0 array.length=4... 0-1+4%4= 3%4=3(ultimo array da lista)
      return[
        next, //3 = ultimo array
        (next + 1) % slides.length, //3+1%4= 4%4=0(primeiro array)
        (next + 2) % slides.length //3+2%4= 5%4=1(segundo array)
      ]
    });
  };
  // inicio da estrutura do UI.
  return (
    <div className="mx-auto w-full px-4 py-8">
      <div className="relative flex items-center justify-center gap-3">
        {/* Seta esquerda */}
        <Button
          onClick={goToPrev}
          aria-label="Slide anterior"
          className={""}
        >
          <ChevronLeft className="text-white" size={40} strokeWidth={4} />
        </Button>

        {/* Card do carrossel */}
        <AnimatePresence mode="wait">
          {visibleOrder.map((slideIndex, index) => {
            const slide = slides[slideIndex];

            return (
              <motion.div
                key={`${slide.id}-${index}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ x: -30 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="relative w-full overflow-hidden rounded-2xl bg-[#F36804] shadow-xl"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                <div className="flex items-center justify-center bg-yellow-300 py-6">
                  <div className="flex w-full items-center justify-between px-6 sm:px-10">
                    <PetCamargoBadge />
                    <h2 className="select-none text-3xl font-extrabold text-[#F36804] [text-shadow:2px_2px_0_#000] sm:text-5xl">
                      {slide.title}
                    </h2>
                    <PetCamargoBadge />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Seta direita */}
        <Button
          onClick={goToNext}
          aria-label="Próximo slide"
          className={""}
        >
          <ChevronRight className="text-white" size={40} strokeWidth={4} />
        </Button>
      </div>

      {/* Indicadores (dots) */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setVisibleOrder([index, (index + 1) % slides.length, (index + 2) % slides.length])}
            aria-label={`Ir para o slide ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === current ? "bg-[#F36804]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function PetCamargoBadge() {
  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-black sm:h-20 sm:w-20">
      <span className="text-[10px] font-bold text-white sm:text-xs">
        LOGO
      </span>
    </div>
  );
}
