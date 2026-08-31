import Image from "next/image";
import { Search, ShoppingBasket } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#F36804]">
      <div className="mx-auto flex h-16 items-center gap-6 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <Image
            src="/logo.jpg"
            alt="Logo da loja"
            width={44}
            height={44}
            className="rounded-full border-2 border-white/70 object-cover"
          />
        </a>

        {/* Barra de pesquisa */}
        <div className="mx-auto w-full max-w-md flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquise o produto"
              className="h-9 w-full rounded-full border-0 bg-white px-4 pr-10 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60"
            />
            <button
              type="button"
              aria-label="Pesquisar"
              className="absolute right-1 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center text-gray-500 hover:text-gray-700"
            >
              <Search size={18} strokeWidth={2.25} />
            </button>
          </div>
        </div>

        {/* Ícones e links */}
        <div className="flex shrink-0 items-center gap-6">
          <button
            type="button"
            aria-label="Carrinho de compras"
            className="text-white hover:opacity-80"
          >
            <ShoppingBasket size={24} strokeWidth={1.75} />
          </button>

          <nav className="flex items-center gap-4 text-sm font-medium text-white">
            <a href="/login" className="hover:opacity-80">
              login
            </a>
            <a href="/cadastrar" className="hover:opacity-80">
              cadastrar
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
