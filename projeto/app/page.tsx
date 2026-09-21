import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import {Carrossel} from "@/app/components/Carrossel";
import {Promocoes} from "@/app/components/Promocoes";
import Endereco from "@/app/components/Endereco";

export default function Home() {
  return (
      <div>
        <Header/>
        <Carrossel/>
        <Promocoes/>
        <Endereco/>
        <Footer/>
      </div>
  );
}
