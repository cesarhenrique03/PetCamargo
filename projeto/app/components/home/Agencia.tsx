import Image from "next/image";

export default function Agencia() {
    return (
        <section>
            <div className="grid">
                <svg width={0} height={0} aria-hidden="true">
                    <defs>
                        <clipPath id="amarelo" clipPathUnits={"objectBoundingBox"}>
                            <path d="M 1 0 V 1 H 0 Z"/>
                        </clipPath>
                        <clipPath id="laranja" clipPathUnits={"objectBoundingBox"}>
                            <path d="M0 0 V1 H1 Z"/>
                        </clipPath>
                    </defs>
                </svg>
                <div className="col-start-1 row-start-1 z-1 bg-[#F36804] w-full h-[20vh] self-end"
                style={{clipPath: "url(#laranja)"}}></div>
                <div className="col-start-1 row-start-1 z-2 drop-shadow-[-5px_-5px_8px_rgba(0,0,0,0.5)]">
                    <div className="bg-[yellow] w-full self-end
                                    // telas médias
                                    md:w-[80vw] md:ml-auto"
                    style={{clipPath: "url(#amarelo)"}}>
                        <div className="flex flex-col justify-end items-end h-[30vh] p-3
                                        // telas médias
                                        md:p-5 md:justify-center
                                        // telas grandes
                                        lg:text-xl">
                            <h1 className="w-[40vw] text-end">Somos uma agência do Mercado Livre</h1>
                            <div className="flex flex-col items-end
                                            // telas médias
                                            md:flex-row md:gap-5 md:items-center">
                                <p className="font-bold">Na loja do Vossoroca!</p>
                                <Image src={"/svg/mercado-libre.svg"}
                                alt="icone do mercado livre"
                                width={50}
                                height={50}/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}