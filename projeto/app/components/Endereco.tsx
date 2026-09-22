import Image from "next/image";

export default function Endereco() {
    return (
        <section className="w-full overflow-hidden">
            <div>
                <h1>Endereços:</h1>
                <h2>R. Júlia Martins Domingues, 308 – Vossoroca, Votorantim – SP, 18116-545</h2>
            </div>
            <div className="w-full bg-[#F36804] flex justify-center items-center p-5">
                <div className="relative h-[50vh] w-[40vw]">
                    <Image src={"/fachada.png"}
                    alt="Fachada da loja 1"
                    fill
                    className="object-cover"></Image>
                </div>
                <div className="px-5 [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)]">
                    <div className="relative h-[50vh] w-[40vw]">
                        <Image src={"/fachada 2.png"}
                        alt="Fachada da loja 1"
                        fill
                        className="object-cover [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)]"></Image>
                    </div>
                </div>
            </div>
            <div>
                <h2>Av. São João, 620 – box A2 – Parque Bela Vista, Votorantim – SP, 18110-210</h2>
            </div>
        </section>
    );
}