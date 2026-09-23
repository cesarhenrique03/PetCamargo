import Image from "next/image";

export default function Endereco() {
    return(
        <section className="w-full">
            <svg width="0" height="0" aria-hidden="true">
                <defs>
                    <clipPath id="imageClip" clipPathUnits="objectBoundingBox">
                        <path d="M 0.92,0
                        C 0.97,0 1,0.03 1,0.08
                        V 0.92
                        C 1,0.97 0.97,1 0.92,1
                        H 0.08
                        C 0.03,1 0,0.97 0,0.92
                        Q 0,0.89 0.03,0.86
                        L 0.86,0.03
                        Q 0.89,0 0.92,0
                        Z" />
                    </clipPath>
                </defs>
            </svg>
            <div className="mx-auto max-w-[80vw]">
                <h1 className="text-xl font-bold">Endereço</h1>
                <h2 className="font-semibold">R. Júlia Martins Domingues, 308 – Vossoroca, Votorantim – SP, 18116-545</h2>
            </div>
            <div className="w-full bg-[#F36804] flex justify-center items-center p-5">
                    <div className="relative h-[50vh] w-[40vw]" style={{ clipPath: "url(#imageClip)" }}>
                        <Image src={"/fachada.png"}
                        alt="Fachada da loja 1"
                        fill
                        sizes="40vw"
                        className="object-cover"/>
                    </div>
                    <div className="relative h-[50vh] w-[40vw]" style={{ clipPath: "url(#imageClip)" }}>
                        <Image src={"/fachada 2.png"}
                        alt="Fachada da loja 2"
                        fill
                        sizes="40vw"
                        className="object-cover"/>
                    </div>
            </div>
            <div className="mx-auto max-w-[80vw]">
                <h2 className="font-semibold">Av. São João, 620 – box A2 – Parque Bela Vista, Votorantim – SP, 18110-210</h2>
            </div>
        </section>
    )
}