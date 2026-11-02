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
    const refViewport = useRef<HTMLDivElement>(null);
    const refView = useRef<HTMLDivElement>(null);

    //deslocamento da animação e margem para centralizar
    const [deslocamento, setDeslocamento] = useState(0);
    const [margemCentro, setMargemCentro] = useState(0);

    //verificar animação e direção da animação
    const [animando, setAnimando] = useState(false);
    const [direcao, setDirecao] = useState<0|1|-1>(0);
    const inicioToque = useRef<number | null>(null);

    //ordem de cards visiveis na tela do usuário
    const [ordemVisivel, setOrdemVisivel] = useState<number[]>(() => {
        return atualizarArray(0);
    })

    //função após DOM ser carregado
    useEffect(() => {
        const domCard = refCard.current;
        const domViewport = refViewport.current;
        const domView = refView.current;

        //se não existir nada dentro das ref, para o código
        if (!domCard || !domViewport || !domView) return;
        const curCard = domCard;
        const curViewport = domViewport;
        const curView = domView;

        function calcDeslocEMargem() {

            const card = curCard.getBoundingClientRect().width;
            const viewport = curView;

            const margem = (curViewport.getBoundingClientRect().width - card) / 2;
        
            const gap = Number.parseFloat(window.getComputedStyle(viewport).gap);
            setDeslocamento(card + gap);
            setMargemCentro(margem);
        }

        // chama pela primeira vez para calcular o tamanho da tela;
        calcDeslocEMargem();

        const tamanhoTela = new ResizeObserver(() => {
            calcDeslocEMargem();
        });

        tamanhoTela.observe(domCard);
        tamanhoTela.observe(domView);
        tamanhoTela.observe(domViewport);

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

    function iniciarToque(event: React.PointerEvent<HTMLDivElement>) {
        inicioToque.current = event.clientX;
    }

    function encerrarToque(event: React.PointerEvent<HTMLDivElement>) {
        if (inicioToque.current === null) return;

        const distancia = event.clientX - inicioToque.current;
        inicioToque.current = null;

        if (Math.abs(distancia) < 40) return;
        mover(distancia < 0 ? -1 : 1);
    }

    return(
        <div className="relative overflow-hidden my-5">
            <div className="relative" ref={refViewport}>
                <Button onClick={() => mover(1)}
                className={"left-20"}>
                    <FaChevronLeft/>
                </Button>

                <div style={{transform: `translate(${margemCentro - (deslocamento*2)}px)`, touchAction: "pan-y"}}>
                    <motion.div className="flex gap-20 "
                    ref={refView}
                    
                    onPointerDown={iniciarToque}
                    onPointerUp={encerrarToque}
                    onPointerCancel={() => inicioToque.current = null}
                    initial={false}
                    animate={{x: deslocamento * direcao}}
                    transition={animando
                        ? {type: "spring", bounce: 0.15, duration: 0.5}
                        : {duration: 0}}
                    onAnimationComplete={() => {
                        if (!animando || direcao === 0) return;

                        setOrdemVisivel((prev) => {
                            const novoCentro = (prev[2] - direcao + lista.length) % lista.length;
                            return atualizarArray(novoCentro);
                        })
                        setAnimando(false);
                        setDirecao(0);
                    }}>
                        {ordemVisivel.map((dados, index) => {
                            return(
                                <div ref={index == 0 ? refCard : undefined }
                                key={index}
                                className="bg-[#F36804] shrink-0 w-[85vw] h-[60vh] rounded-[1vw] p-5">
                                    {lista[dados].title}
                                </div>
                            )
                        })}
                    </motion.div>
                </div>

                <Button onClick={() => mover(-1)}
                className={"right-20"}>
                    <FaChevronRight/>
                </Button>
            </div>

        </div>
    )
}