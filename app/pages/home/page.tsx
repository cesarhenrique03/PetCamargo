import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import {Carrossel} from "@/app/components/home/Carrossel";
import {Promocoes} from "@/app/components/home/Promocoes";
import Endereco from "@/app/components/home/Endereco";
import Agencia from "@/app/components/home/Agencia";

export default function App() {
  return (
      <div className="overflow-hidden">
        <Header/>
        <Carrossel/>
        <Promocoes/>
        <Endereco/>
        <Agencia/>
        <Footer/>
      </div>
  );
}
