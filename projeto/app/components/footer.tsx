import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#F36804] text-white z-10 drop-shadow-[0_-8px_10px_rgba(0,0,0,0.5)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-6 text-sm sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Logo + Telas */}
        <div className="flex items-start gap-3">
          <Image
            src="/logo.jpg"
            alt="Logo da loja"
            width={44}
            height={44}
            className="shrink-0 rounded-full border-2 border-white/70 object-cover"
          />
          <div>
            <p className="font-semibold">TELAS:</p>
            <ul className="mt-1 space-y-0.5">
              <li>
                <a href="/" className="hover:opacity-80">
                  home
                </a>
              </li>
              <li>
                <a href="/login" className="hover:opacity-80">
                  login
                </a>
              </li>
              <li>
                <a href="/cadastro" className="hover:opacity-80">
                  cadastro
                </a>
              </li>
              <li>
                <a href="/carrinho" className="hover:opacity-80">
                  carrinho
                </a>
              </li>
              <li>
                <a href="/perfil" className="hover:opacity-80">
                  perfil
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Fale conosco */}
        <div>
          <p className="font-semibold">Fale conosco:</p>
          <p className="mt-2">(15) contato-da-loja</p>
          <div className="mt-2 flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://wa.me/5515000000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:opacity-80"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>

        {/* Endereços */}
        <div>
          <p className="text-center font-semibold sm:text-left">Endereços:</p>
          <div className="mt-2 space-y-3">
            <p className="border-b border-white/60 pb-3 leading-relaxed">
              R. Júlia Martins Domingues, 308 – Vossoroca,
              <br />
              Votorantim – SP, 18116-545
            </p>
            <p className="leading-relaxed">
              Av. São João, 620 – box A2 – Parque Bela Vista,
              <br />
              Votorantim – SP, 18110-210
            </p>
          </div>
        </div>

        {/* Horários */}
        <div>
          <p className="text-center font-semibold sm:text-left">Horários:</p>
          <div className="mt-2 space-y-3">
            <div className="space-y-1 border-b border-white/60 pb-3">
              <p>seg – sex 8h às 19h</p>
              <p>sáb 8h às 18h</p>
              <p>dom 8h às 12h30</p>
            </div>
            <div className="space-y-1">
              <p>seg – sáb 9h às 20h30</p>
              <p>dom 9h à 13h</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
