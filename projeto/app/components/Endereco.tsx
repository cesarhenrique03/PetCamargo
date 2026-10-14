import Image from "next/image";

export default function Endereco() {
    return (
        <section>
            <svg width={0} height={0} aria-hidden="true">
                <defs>
                    <clipPath id="clipImagem" clipPathUnits={"objectBoundingBox"}>
                        <path d="M 1 0 V 1 H 0 V .8 Q 0 .75, .02 .70 L .35 .02 Q .37 0, .38 0  Z"/>
                    </clipPath>
                </defs>
            </svg>
            <div>
                <h1>Endereço:</h1>
                <h2>R. Júlia Martins Domingues, 308 – Vossoroca, Votorantim – SP, 18116-545</h2>
            </div> 
                            {/* Estilização padrão mobile */}
            <div className="w-full flex flex-col gap-5 justify-center items-center bg-[#F36804] py-5
                            // Estilização para tablet e descktop
                            md:relative md:h-[50vh] md:py-0">
                                {/* Estilização para mobile */}
                <div className="relative w-[80vw] h-[45vh] rounded-[2vw] overflow-hidden
                                // Estilização para tablet e desktop
                                md:absolute md:w-[60vw] md:left-[10vw]">
                    <Image src={"/fachada.png"}
                    alt="Fachada da loja 1"
                    fill
                    className="object-cover"/>
                </div>
                                {/* Estilização para mobile */}
                <div className="relative w-[80vw] h-[45vh] bg-[#F36804] overflow-hidden rounded-[2vw] clipImagem
                                // Estilização para tablet e desktop
                                md:h-[50vh] md:w-[65vw] md:absolute md:right-[7.5vw]">
                                    {/* Estilização para mobile */}
                    <div className="absolute w-[100%] h-[100%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden rounded-[2vw] clipImagem
                                    // Estilização para tablet e desktop
                                    md:w-[60vw] md:h-[45vh]">
                        <Image src={"/fachada 2.png"}
                        alt="Fachada da loja 2"
                        fill
                        className="object-cover"/>
                    </div>
                </div>
            </div>
            <div>
                <h1>Av. São João, 620 – box A2 – Parque Bela Vista, Votorantim – SP, 18110-210</h1>
            </div>
        </section>
    )
}