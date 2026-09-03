"use client";

import {useEffect, useRef, useState} from "react";
import {Button} from "@/app/components/details/button";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import {motion} from "framer-motion";

export default function Carrossel() {
    const cards = [
        {id:0, title:"primeiro"},
        {id:1, title:"segundo"},
        {id:2, title:"terceiro"},
        {id:3, title:"quarto"}
    ]

    const viewportRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [indiceCentral, setIndiceCentral] = useState(0);
    const [deslocamento, setDeslocamento] = useState(0);

    useEffect(() => {
        function atualizarDeslocamento() {
            const viewport = viewportRef.current;
            const card = cardRef.current;

            if (!viewport || !card) return;

            const margemCentral = (viewport.clientWidth - card.offsetWidth) / 2;
            setDeslocamento(
                margemCentral - indiceCentral * (card.offsetWidth + 16)
            );
        }

        atualizarDeslocamento();
        const observer = new ResizeObserver(atualizarDeslocamento);
        if (viewportRef.current) observer.observe(viewportRef.current);
        if (cardRef.current) observer.observe(cardRef.current);

        return () => observer.disconnect();
    }, [indiceCentral]);

     function proximo() {
        if (cards.length === 0) return;
        setIndiceCentral((prev) => (prev + 1) % cards.length);
     }

    function anterior() {
        if (cards.length === 0) return;
        setIndiceCentral((prev) => (prev - 1 + cards.length) % cards.length);
     }
     return (
        <div className="relative w-full overflow-hidden">
            <div ref={viewportRef} className="relative h-[32rem] w-full">
                <motion.div
                    className="absolute left-0 top-0 flex gap-4"
                    animate={{x: deslocamento}}
                    transition={{duration: 0.4, ease: "easeInOut"}}
                >
                {cards.map((card, index) => {
                    return (
                        <motion.div
                            key={card.id}
                            ref={index === 0 ? cardRef : undefined}
                            className="h-[28rem] w-[85vw] max-w-6xl shrink-0 bg-[#F36804] p-8"
                        >
                            <span className="text-2xl font-bold text-white">
                                {cards[card.id].title}
                            </span>
                        </motion.div>
                    )
                })}
                </motion.div>
            </div>

            <Button
                aria-label="Card anterior"
                className="absolute left-[2vw] top-1/2 z-10 -translate-y-1/2"
                onClick={anterior}
            >
                <FaChevronLeft className="text-3xl" />
            </Button>
            <Button
                aria-label="Próximo card"
                className="absolute right-[2vw] top-1/2 z-10 -translate-y-1/2"
                onClick={proximo}
            >
                <FaChevronRight className="text-3xl" />
            </Button>
        </div>
     )
}