"use client";

import {useState} from "react";

export default function Carrossel() {
    const cards = [ 
        {id:0, title:"primeiro"},
        {id:1, title:"segundo"},
        {id:2, title:"terceiro"},
        {id:3, title:"quarto"}
    ]

    //inicio do carrossel com 5 itens
    const [ordemVisivel, setOrdemVisivel] = useState<number[]>([
        (cards.length - 2)%cards.length,
        (cards.length - 1)%cards.length,
        cards[0].id,
        (cards[1].id)%cards.length,
        (cards[2].id)%cards.length
    ])

    const current = ordemVisivel[2];

     function proximo() {
        setOrdemVisivel((prev) => {
            const next = (prev[1]+1)%cards.length;
            return([
                prev[1],
                next,
                (next+1)%cards.length
            ])
        })

     }
}