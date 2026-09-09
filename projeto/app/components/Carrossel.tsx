"use client";

import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {Button} from "@/app/components/details/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function Carrossel() {
    //lista de objetos para os cards
    const lista = [
        {id:0, title:"Primeiro"},
        {id:1, title:"Segundo"},
        {id:2, title:"terceiro"},
        {id:3, title: "quarto"}
    ]

    //Ref para card e viewport
    const refCard = useRef<HTMLDivElement>(null);
    const refView = useRef<HTMLDivElement>(null);

    //deslocamento da animação e margem para centralizar
    const [deslocamento, setDeslocamento] = useState(0);
    const [margemCentro, setMargemCentro] = useState(0);

    //verificar animação e direção da animação
    const [animando, setAnimando] = useState(false);
    const [direcao, setDirecao] = useState<0|1|-1>(0);

    //ordem de cards visiveis na tela do usuário
    const [ordemVisivel, setOrdemVisivel] = useState<number[]>(() => {
        return atualizarArray(0);
    })

    //função após DOM ser carregado
    useEffect(() => {
        const domCard = refCard.current;
        const domView = refView.current;

        //se não existir nada dentro das ref, para o código
        if (!domCard || !domView) return;

        const card = domCard.getBoundingClientRect();
        const viewport = window.getComputedStyle(domView);

        //calculo do deslocamento horizontal na animação
        function calcDeslocamento() {
            const gap = Number.parseFloat(viewport.gap);
            setDeslocamento(card.width + gap);
        }

        //calculo para pegar a margem central
        function calcMargemCentral() {
            setMargemCentro((Number.parseFloat(viewport.width) - card.width) / 2);
        }

        // chama pela primeira vez para calcular o tamanho da tela;
        calcDeslocamento();
        calcMargemCentral();

        const tamanhoTela = new ResizeObserver(() => {
            calcDeslocamento();
            calcMargemCentral();
        });

        tamanhoTela.observe(domCard);
        tamanhoTela.observe(domView);

        return () => tamanhoTela.disconnect();
    },[])

    //função para organizar os cards visiveis para o carrossel
    function atualizarArray(central: number) {
        if (lista.length == 0) return [];

        return Array.from({length: 5}, (_,index) => {
            return (central + index - 2 + lista.length) % lista.length;
        })
    }

    //função para travar animação e direcionar a animação de rolagem
    function mover(novaDirecao: 1|-1) {
        if(animando||lista.length == 0|| deslocamento == 0) return;

        setAnimando(true);
        setDirecao(novaDirecao);

        
    }

    return(
        <div className="relative overflow-hidden">
            <div className="relative">
                <Button onClick={() => mover(1)}
                className={"left-20"}>
                    <FaChevronLeft/>
                </Button>

                <div className="flex gap-20 "
                style={{transform: `translate(-${deslocamento * 2}px)`}}
                ref={refView}
                >
                    {ordemVisivel.map((dado, index) => {
                        return(
                            <motion.div ref={index == 0 ? refCard : undefined}
                            className="mt-5 mb-5 w-[85vw] rounded-[1.8vw] h-[60vh] shrink-0 bg-[#F36804]"
                            key= {`${lista[dado].id}-${index}`}
                            style={{marginLeft: index == 0 ? margemCentro:0}}
                            initial={false}
                            animate={{x: deslocamento * direcao}}
                            transition={{type: "spring", bounce: 0.15, duration: 0.5}}
                            onAnimationComplete={() => {
                                if (index !== 2 || lista.length === 0 || direcao === 0) return;

                                setOrdemVisivel((prev) => {
                                    const next = (prev[2] - direcao + lista.length) % lista.length;
                                    return atualizarArray(next);
                                })

                                setAnimando(false);
                                setDirecao(0);
                            }}>
                                <p>{lista[dado].title}</p>
                            </motion.div>
                        )
                    })}
                </div>

                <Button onClick={() => mover(-1)}
                className={"right-20"}>
                    <FaChevronRight/>
                </Button>
            </div>

        </div>
    )
}