import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuShoppingBasket } from "react-icons/lu";

export default function Header() {
  return (
    <header className="relative flex w-full items-center justify-between bg-[#F36804] p-2
                      // telas médias
                      md:px-5">
      <div>
        <Link href="/pages/home">
          <div>
            <Image src={"/logo.jpg"}
            alt="Logo da loja"
            width={50}
            height={50}
            className="rounded-[50%]"/>
          </div>
        </Link>
      </div>
      <div className="flex items-center px-2 rounded-[50vw] bg-white
                      // telas médias
                      md:left-1/2 md:-translate-x-1/2 md:absolute md:z-10">
        <input type="text" 
        className="w-[30vw] h-[5vh]
                    // telas médias
                    md:w-[40vw]"/>
        <button>
          <CiSearch size={20} strokeWidth="1" className="text-gray-400"/>
        </button>
      </div>
      <div className="flex gap-5 items-center">
        <Link href={"/pages/carrinho"}>
          <LuShoppingBasket size="35"
          className="text-white"/>
        </Link>
        <RxHamburgerMenu size="35" strokeWidth={.5}
        className="text-white
                    // telas médias
                    md:hidden"/>
        <Link href="/pages/login" 
        className="hidden
                  // telas médias
                  md:inline-block">
          <h1 className="text-white font-bold">
            Login
          </h1>
        </Link>
        <Link href={"/pages/cadastro"}
        className="hidden
                  // telas médias
                  md:inline-block">
          <h1 className="text-white font-bold">
            Cadastrar
          </h1>
        </Link>
      </div>
    </header>
  );
}
