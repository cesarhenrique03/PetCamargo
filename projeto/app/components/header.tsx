import { Playwrite_CA } from "next/font/google";
import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-[#F36804] h-18 flex justify-between items-center">
            <div className="basis-1/7 ml-5">
             <Image className="rounded-[70px]" src="/logo.jpg" alt="Logo da Empresa" width={60} height={0}/>
            </div>
            <div className="bg-[#FFFFFF] rounded-[50] basis-2/8 h-2/4 items-center flex justify-end">
                <Image className="mr-3" src="/svg/lupa.svg" alt="Ícone de Lupa" width={30} height={30}/>
            </div>
            <div className="flex justify-end basis-1/7 mr-5">
                <div className="basis-2/3">
                    <Image src="/svg/cesta.svg" alt="Ícone de cesta" width={50} height={50}/>
                </div>
                <div className="items-center text-white flex gap-2 basis-1/3">
                    <p>Login</p>
                    <p>Cadastrar</p>
                </div>
            </div>
        </header>
    );
}