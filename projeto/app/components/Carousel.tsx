"use client";

import {useEffect, useRef, useState} from "react";
import {Button} from "@/app/components/details/button";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import {motion} from "framer-motion";

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
    const [margemCentro, setMargemCentro] = useState<number>(0);
    const [animando, setAnimando] = useState(false);
    const [direcao, setDirecao] = useState<0 | 1 | -1>(0);

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

        function calcMargemCentral() {
            const viewSize = Number.parseFloat(viewWidth.width);
            const cardSize = cardWidth.width;

            setMargemCentro(() => {
                return (viewSize - cardSize) / 2;
            })
        }

        calcDeslocamento();
        calcMargemCentral();

        const tamanhoTela = new ResizeObserver(() => {
            calcDeslocamento();
            calcMargemCentral();
        });

        tamanhoTela.observe(viewElemento);
        tamanhoTela.observe(cardElemento);

        return () => tamanhoTela.disconnect();
    }, []);

     //primeira ordem de cards gerados
    const [ordemVisivel, setOrdemVisivel] = useState<number[]>(
        () => atualizarCards(0)
    )

    function mover(novaDirecao: 1 | -1) {
        if (animando || deslocamento === 0 || cards.length === 0) return;

        setAnimando(true);
        setDirecao(novaDirecao);
    }

    return (
        <div className="relative">
            <div>
                <Button onClick={() => mover(-1)}>
                    <FaChevronLeft/>
                </Button>
            </div>
            <div ref={viewportRef}
            className="w-full overflow-hidden">
                <motion.div
                className="flex gap-20"
                animate={{x: deslocamento * (direcao - 2)}}
                initial={false}
                transition={{
                    duration: direcao === 0 ? 0 : 0.5,
                    ease: "easeInOut",
                }}
                onAnimationComplete={() => {
                    if (direcao === 0) return;

                    setOrdemVisivel((prev) => {
                        const proximoCard = (prev[2] + direcao + cards.length) % cards.length;
                        return atualizarCards(proximoCard);
                    });
                    setDirecao(0);
                    setAnimando(false);
                }}
                >
                    {
                        ordemVisivel.map((valor, index) => {
                            return (
                                <motion.div ref={index == 0 ? cardRef : undefined}
                                className="bg-[#F36804] w-[90vw] shrink-0"
                                key={`${cards[valor].id}-${index}`}
                                style={{marginLeft: index == 0 ? margemCentro : 0}}
                                >
                                    <p>{cards[valor].title}</p>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </div>
            <div>
                <Button onClick={() => mover(1)}>
                    <FaChevronRight/>
                </Button>
            </div>
        </div>
    )
}