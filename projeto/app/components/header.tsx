"use client"

import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuShoppingBasket } from "react-icons/lu";
import {useState} from "react";
import {motion, spring} from "framer-motion";
import MenuHeader from "@/app/components/menuHeader";

export default function Header() {
  const [menuHeader, setMenuHeader] = useState<0 | 1>(0);
  const [animando, setAnimando] = useState<boolean>(false);
  
  function abrirMenu() {
    if (animando) return;

    if (menuHeader == 0) {
      setMenuHeader(1);
      setAnimando(true);
    } else {
      setMenuHeader(0);
      setAnimando(true);
    }
  }

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
        <button onClick={abrirMenu}
        className="md:hidden">
          <RxHamburgerMenu size="35" strokeWidth={.5}
          className="text-white"/>
        </button>
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
      <motion.div className="absolute right-0 top-0 z-50"
      initial = {false}
      animate = {{x: menuHeader ? 0 : "100%"}}
      transition={{type: "spring", bounce: 0.15, duration: 0.5}}
      onAnimationComplete={() => {
        setAnimando(false);
      }}>
        <MenuHeader onClose={abrirMenu}/>
      </motion.div>
    </header>
  );
}
