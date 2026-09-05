"use client";

import {useEffect, useRef, useState} from "react";
import {Button} from "@/app/components/details/button";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import {AnimatePresence, motion} from "framer-motion";
import { html } from "framer-motion/client";
import { MdViewWeek } from "react-icons/md";

export default function Carrossel() {
    //lista que depois vai ser integrada com banco de dados
    const cards = [
        {id:0, title:"primeiro"},
        {id:1, title:"segundo"},
        {id:2, title:"terceiro"},
        {id:3, title:"quarto"}
    ]

    //função que deixa armazenado o tamanho do card
    const viewportRef =  useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [deslocamento, setDeslocamento] = useState<number>(0);

    //criar sequência de cards na tela
    function atualizarCards(cardCentral: number) {
            if (cards.length == 0) return []

            return Array.from({length:5}, (_,index) => (
                (cardCentral + index - 2 + cards.length) % cards.length
            ))
        
    }

    useEffect(() => {
        const viewElemento = viewportRef.current;
        const cardElemento = cardRef.current;

        if (!viewElemento || !cardElemento) return;

        const viewWidth = window.getComputedStyle(viewElemento);
        const cardWidth = cardElemento.getBoundingClientRect();

        function calcDeslocamento() {
            const gap = Number.parseFloat(viewWidth.gap || "0");
            const deslocamento = cardWidth.width + gap;

            setDeslocamento(deslocamento);
        };

        calcDeslocamento();

        const tamanhoTela = new ResizeObserver(() => {
            calcDeslocamento();
        });

        tamanhoTela.observe(viewElemento);
        tamanhoTela.observe(cardElemento);

        return () => tamanhoTela.disconnect();
    }, []);

     //primeira ordem de cards gerados
    const [ordemVisivel, setOrdemVisivel] = useState<number[]>(
        () => atualizarCards(0)
    )

    //card central
    let cardCentral = ordemVisivel[2]

    //função próximo card
    function proximo() {
        setOrdemVisivel((prev) => {
            if (cards.length == 0) return prev

            const next = (prev[2] + 1) % cards.length;
            return atualizarCards(next);
        })
    }

    //função card anterior
    function anterior() {
        setOrdemVisivel((prev) => {
            if (cards.length == 0) return prev

            const next = (prev[2] - 1 + cards.length) % cards.length;
            return atualizarCards(next);
        })
    }

    return (
        <div className="relative">
            <div>
                <Button onClick={anterior}>
                    <FaChevronLeft/>
                </Button>
            </div>
            <div ref={viewportRef}
            className="overflow-hidden w-full flex gap-4">
                    {
                        ordemVisivel.map((valor, index) => {
                            const posição = index - 2;
                            return (
                                <motion.div ref={index == 0 ? cardRef : undefined}
                                className="bg-[#F36804] w-[85vw] shrink-0"
                                key={`${cards[valor].id}-${index}`}
                                animate={{x: deslocamento * posição}}
                                exit={{x: deslocamento * index}}
                                >
                                    <p>{cards[valor].title}</p>
                                </motion.div>
                            )
                        })
                    }
            </div>
        </div>
    )
}