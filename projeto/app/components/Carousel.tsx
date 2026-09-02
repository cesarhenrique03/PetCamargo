"use client";

import {useState} from "react";
import {Button} from "@/app/components/details/button";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function Carrossel() {
    const cards = [
        {id:0, title:"primeiro"},
        {id:1, title:"segundo"},
        {id:2, title:"terceiro"},
        {id:3, title:"quarto"}
    ]

    function criarOrdemVisivel(indiceCentral: number) {
        if (cards.length === 0) return []

        return Array.from({ length: 5 }, (_, posicao) => (
            (indiceCentral + posicao - 2 + cards.length) % cards.length
        ))
    }

    // Mantém dois cards antes, o card central e dois cards depois.
    const [ordemVisivel, setOrdemVisivel] = useState<number[]>(
        () => criarOrdemVisivel(2)
    )

    const current = ordemVisivel[2];

     function proximo() {
        setOrdemVisivel((prev) => {
            if (cards.length === 0) return prev

            const next = (prev[2] + 1) % cards.length
            return criarOrdemVisivel(next)
        })

     }
     return (
        <div className="relative h-130">
                <Button className={"absolute top-0"}>
                    <FaChevronLeft className="text-5xl"/>
                </Button>
        </div>
     )
}