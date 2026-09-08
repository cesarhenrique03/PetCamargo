import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import {Carrossel} from "@/app/components/Carrossel";
import  {motion} from "framer-motion";
import { builtinModules } from "module";
import { body } from "framer-motion/client";

export default function Home() {
  return (
      <div>
        <Header/>
        <Carrossel/>
        <Footer/>
      </div>
  );
}
