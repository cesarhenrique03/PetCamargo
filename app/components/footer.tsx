import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-10 flex flex-col gap-5 justify-center items-center text-center p-5 text-white bg-[#F36804] drop-shadow-[0_-5px_8px_rgba(0,0,0,0.5)]
                      // telas médias
                      md:flex-row md:gap-5">
      <div className="pb-3 border-b
                    // telas médias
                    md:pb-0 md:pr-2 md:border-b-0 md:flex md:justify-center md:items-center md:gap-2 md:border-r">
        <Link href={"/pages/home"}
        className="relative inline-block mx-auto">
          <Image src={"/PetCamargo/logo.jpg"}
          alt="Logo da loja"
          width={50}
          height={50}
          className="rounded-[50vh]"/>
        </Link>
        <div className="flex h-5 gap-2
                      // telas médias
                      md:flex-col md:h-auto">
          <Link href={"/pages/home"}
          className="hover:border-b
                    // telas médias
                    md:h-5">
            <h1>Home</h1>
          </Link>
          <Link href={"/pages/login"}
          className="hover:border-b
                    // telas médias
                    md:h-5">
            <h1>Login</h1>
          </Link>
          <Link href={"/pages/cadastro"}
          className="hover:border-b
                    // telas médias
                    md:h-5">
            <h1>Cadastro</h1>
          </Link>
          <Link href={"/pages/carrinho"}
          className="hover:border-b
                    // telas médias
                    md:h-5">
            <h1>Carrinho</h1>
          </Link>
        </div>
      </div>
      <div className="pb-2 border-b
                    //telas médias
                    md:pb-0 md:pr-2 md:border-b-0 md:border-r">
        <h1 className="mb-2">Endereços:</h1>
        <div className="mb-5">
          <h1>Loja 1:</h1>
          <h1>R. Júlia Martins Domingues, 308 – Vossoroca,<br className="hidden md:inline-block"/> Votorantim – SP, 18116-545</h1>
        </div>
        <div>
          <h1>Loja 2:</h1>
          <h1>Av. São João, 620 – box A2 – Parque Bela Vista,<br className="hidden md:inline-block"/> Votorantim – SP, 18110-210</h1>
        </div>
      </div>
      <div className="pb-2 border-b
                    //telas médias
                    md:pb-0 md:pr-2 md:border-b-0 md:border-r">
        <h1 className="mb-2">Horarios de funcionamento:</h1>
        <div className="mb-5 ">
          <p>seg – sex 8h às 19h</p>
          <p>sáb 8h às 18h</p>
          <p>dom 8h às 12h30</p>
        </div>
        <div>
          <p>seg – sáb 9h às 20h30</p>
          <p>dom 9h à 13h</p>
        </div>
      </div>
      <div>
        <h1 className="mb-2">Redes sociais:</h1>
        <div className="flex justify-center item-center gap-5">
          <Link href={"https://www.instagram.com/petcamargo/"} target="_blank">
            <FaInstagram size={50}/>
          </Link>
          <Link href={""}>
            <FaWhatsapp size={50}/>
          </Link>
        </div>
      </div>
    </footer>
           
  );
}
