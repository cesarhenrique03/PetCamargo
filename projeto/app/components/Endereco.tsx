"use client"
import Image from "next/image";
import {motion} from "motion/react";

const recortePath = {
    normal: {
        d: "M 1 0 V 1 H 0 V .8 Q 0 .75, .02 .70 L .35 .02 Q .37 0, .38 0 Z",
    },
    hover: {
        d: "M 1 0 V 1 H 0 V .8 Q 0 .75, .00 .70 L .00 .02 Q .00 0, .00 0 Z",
    },
};


export default function Endereco() {
    return (
        <section className="relative">
            
                            {/* telas pequenas */}
            <div className="flex flex-col justify-center items-center text-center
                            // telas médias
                            md:items-start md:text-left md:relative md:inline-block md:left-[10vw]
                            // telas grandes
                            lg:left-[15vw]">
                <h1>Endereço:</h1>
                <h2>R. Júlia Martins Domingues, 308 – Vossoroca, Votorantim – SP, 18116-545</h2>
            </div> 
                            {/* telas pequenas */}
            <div className="w-full flex flex-col gap-5 justify-center items-center bg-[#F36804] py-5 drop-shadow-[0px_5px_8px_rgba(0,0,0,0.80)]
                            // telas médias
                            md:relative md:h-[50vh] md:py-0">
                                {/* telas pequenas */}
                <div className="relative w-[80vw] h-[45vh] rounded-[2vw] overflow-hidden drop-shadow-[6px_5px_4px_rgba(0,0,0,0.60)]
                                // telas médias
                                md:absolute md:w-[60vw] md:left-[10vw] md:drop-shadow-none
                                // telas grandes
                                lg:w-[45vw] lg:left-[15vw]">
                    <a href="https://maps.app.goo.gl/2W9YmX9yXdn33tJ49" target="_blank">
                        <Image src={"/fachada.png"}
                        alt="Fachada da loja 1"
                        fill
                        className="object-cover"/>
                    </a>
                </div>
                <motion.div
                    initial="normal"
                    whileHover="hover"
                    className="relative drop-shadow-[6px_5px_4px_rgba(0,0,0,0.60)]
                                // telas médias
                                md:drop-shadow-[-10px_0px_4px_rgba(0,0,0,0.60)] md:w-[55vw] md:h-[50vh] md:absolute md:right-[7.5vw]
                                // telas grandes
                                lg:w-[50vw] lg:right-[12.5vw]">
                                    {/* telas pequenas */}
                    <svg width={0} height={0} aria-hidden="true">
                        <defs>
                            <clipPath id="clipImagem" clipPathUnits={"objectBoundingBox"}>
                                <motion.path variants={recortePath}/>
                            </clipPath>
                        </defs>
                    </svg>
                    <motion.div className="relative w-[80vw] h-[45vh] bg-[#F36804] overflow-hidden rounded-[2vw] clipImagem
                                    // telas médias
                                    md:w-[55vw] md:h-[50vh] md:absolute
                                    // telas grandes
                                    lg:w-[50vw]">
                                        {/* telas pequenas */}
                        <motion.div className="absolute w-[100%] h-[100%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden rounded-[2vw] clipImagem 
                                        // telas médias
                                        md:w-[50vw] md:h-[45vh]
                                        // telas grandes
                                        lg:w-[45vw]">
                            <a href="https://maps.app.goo.gl/3TLmbDgW8a5Vo2GG7" target="_blank">
                                <Image src={"/fachada 2.png"}
                                alt="Fachada da loja 2"
                                fill
                                className="object-cover"/>
                            </a>
                            
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
            <div className="flex flex-col justify-center items-center text-center
                            // telas médias
                            md:relative md:items-end md:right-[10vw]
                            // telas grandes
                            lg:right-[15vw]">
                <h1>Av. São João, 620 – box A2 – Parque Bela Vista, Votorantim – SP, 18110-210</h1>
            </div>
        </section>
    )
}