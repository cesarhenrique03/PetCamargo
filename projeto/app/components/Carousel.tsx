"use client";

import {useEffect, useRef, useState} from "react";
import {Button} from "@/app/components/details/button";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import {motion} from "framer-motion";
import { html } from "framer-motion/client";

export default function Carrossel() {
    //lista que depois vai ser integrada com banco de dados
    const cards = [
        {id:0, title:"primeiro"},
        {id:1, title:"segundo"},
        {id:2, title:"terceiro"},
        {id:3, title:"quarto"}
    ]

    //função que deixa armazenado o tamanho do card
    const cardRef1 =  useRef<HTMLDivElement>(null);
    const cardRef2 = useRef<HTMLDivElement>(null);

    //criar sequência de cards na tela
    function atualizarCards(cardCentral: number) {
            if (cards.length == 0) return []

            return Array.from({length:5}, (_,index) => (
                (cardCentral + index - 2 + cards.length) % cards.length
            ))
        
    }

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
        <div>

        </div>
    )
}