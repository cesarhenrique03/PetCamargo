"use client"

import { useEffect, useRef, useState } from "react"; 
import {Button} from "@/app/components/details/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {motion} from "framer-motion";

export function Carrossel() {
    const cards = [
        { id: 0, title: "primeiro" },
        { id: 1, title: "Segundo" },
        { id: 2, title: "terceiro" },
        { id: 3, title: "quarto" },
    ];

    const cardRef = useRef<HTMLDivElement>(null);
    const viewRef = useRef<HTMLDivElement>(null);

    const [deslocamento, setDeslocamento] = useState<number>(0);
    const [margemCentral, setMargemCentral] = useState<number>(0);
    const [direcao, setDirecao] = useState<0 | 1 | -1>(0);
    const [animando, setAnimando] = useState(false);
    const [ordemVisivel, setOrdemVisivel] = useState<number[]>(() => ordemCards(0));

    useEffect(() => {
        const cardDom = cardRef.current;
        const viewDom = viewRef.current;

        if (!cardDom || !viewDom) return;

        const card = cardDom.getBoundingClientRect();
        const viewport = window.getComputedStyle(viewDom);

        const calcDeslocamento = () => {
            const gap = Number.parseFloat(viewport.gap || "0");
            setDeslocamento(gap + card.width);
        };

        const calcMargemCentral = () => {
            const viewWidth = Number.parseFloat(viewport.width || "0");
            setMargemCentral((viewWidth - card.width) / 2);
        };

        calcDeslocamento();
        calcMargemCentral();

        const resizeObserver = new ResizeObserver(() => {
            calcDeslocamento();
            calcMargemCentral();
        });

        resizeObserver.observe(cardDom);
        resizeObserver.observe(viewDom);

        return () => resizeObserver.disconnect();
    }, []);

    function ordemCards(central: number) {
        if (cards.length === 0) return [];

        return Array.from({ length: 5 }, (_, index) => {
            return (central + index - 2 + cards.length) % cards.length;
        });
    }

    function mover(novaDirecao: 1 | -1) {
        if (animando || cards.length === 0 || deslocamento === 0) return;

        const proximoCentral = (ordemVisivel[2] + novaDirecao + cards.length) % cards.length;

        setAnimando(true);
        setDirecao(novaDirecao);
        setOrdemVisivel(ordemCards(proximoCentral));
    }

    return (
        <div className="relative">
            <div className="relative h-20">
                <Button className="left-20" onClick={() => mover(-1)}>
                    <FaChevronLeft />
                </Button>

                <Button className="right-20" onClick={() => mover(1)}>
                    <FaChevronRight />
                </Button>
            </div>

            <div className="relative overflow-hidden">
                    <motion.div
                        style={{transform: `translateX(-${deslocamento * 2}px)`}}
                        ref={viewRef}
                        className="flex gap-10">
                        {ordemVisivel.map((dado, index) => {
                            return (
                                <motion.div style={{marginLeft: index == 0 ? margemCentral : 0}}
                                    key={`${cards[dado].id}-${index}`}
                                    ref={index === 0 ? cardRef : undefined}
                                    className="w-[85vw] shrink-0 bg-[#F36804]"
                                    initial={false}
                                    animate={{x: deslocamento * direcao}}
                                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                    onAnimationComplete={() => {
                                        setAnimando(false);
                                        setDirecao(0);
                                    }}
                                >
                                    <p>{cards[dado].title}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
            </div>
        </div>
    );
}