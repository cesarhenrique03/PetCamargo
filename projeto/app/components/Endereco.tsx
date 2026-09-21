import Image from "next/image";

export default function Endereco() {
    return (
        <section className="w-full overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 py-3 md:px-8">
                <h2 className="text-xl font-bold">Endereço:</h2>
                <p className="text-lg font-semibold">
                    R. Júlia Martins Domingues, 308 - Vossoroca, Votorantim - SP, 18116-545
                </p>
            </div>

            <div className="bg-[#f36804] py-8">
                <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 md:block md:h-[360px] md:px-8">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl md:absolute md:left-8 md:top-1/2 md:h-[320px] md:w-[46%] md:-translate-y-1/2">
                        <Image
                            src="/fachada.png"
                            alt="Fachada da loja Pet Camargo"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl md:absolute md:right-8 md:top-1/2 md:h-[320px] md:w-[56%] md:-translate-y-1/2">
                        <Image
                            src="/fachada 2.png"
                            alt="Interior da loja Pet Camargo"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-y-0 left-0 w-1/3 bg-[#f36804] [clip-path:polygon(0_0,100%_0,35%_100%,0_100%)]" />
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-3 md:px-8">
                <p className="text-lg font-semibold">
                    Av. São João, 620 - box A2 - Parque Bela Vista, Votorantim - SP, 18110-210
                </p>
            </div>
        </section>
    );
}