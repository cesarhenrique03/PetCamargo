"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Promocao = {
	id: number;
	title: string;
	valor: string;
};

const listaPromocoes: Promocao[] = [
	{ id: 0, title: "Promocao 1", valor: "R$ 9,99" },
	{ id: 1, title: "Promocao 2", valor: "R$ 19,38" },
	{ id: 2, title: "Promocao 3", valor: "R$ 29,67" },
	{ id: 3, title: "Promocao 4", valor: "R$ 39,16" },
];

const quantidadeDeCards = 7;
const espacamento = 16;

function ordenarCards(primeiro: number, quantidade: number) {
	return Array.from({ length: quantidadeDeCards }, (_, indice) => (
		(primeiro + indice - 1 + quantidade) % quantidade
	));
}

export function Promocoes() {
	const viewportRef = useRef<HTMLDivElement>(null);
	const [ordemVisivel, setOrdemVisivel] = useState(() =>
		ordenarCards(0, listaPromocoes.length),
	);
	const [larguraDoCard, setLarguraDoCard] = useState(0);
	const [posicao, setPosicao] = useState(0);
	const [direcao, setDirecao] = useState<1 | -1 | 0>(0);
	const [animando, setAnimando] = useState(false);

	const passo = larguraDoCard + espacamento;

	useEffect(() => {
		const viewport = viewportRef.current;
		if (!viewport) return;
		const elementoViewport = viewport;

		function recalcularLargura() {
			const largura = elementoViewport.getBoundingClientRect().width;
			const novaLargura = Math.max(
				0,
				(largura - espacamento * 4) / 5,
			);

			setLarguraDoCard(novaLargura);
			setPosicao(-(novaLargura + espacamento));
		}

		recalcularLargura();

		const observador = new ResizeObserver(recalcularLargura);
		observador.observe(elementoViewport);

		return () => observador.disconnect();
	}, []);

	function mover(novaDirecao: 1 | -1) {
		if (animando || passo === 0 || listaPromocoes.length === 0) return;

		setAnimando(true);
		setDirecao(novaDirecao);
		setPosicao(-(passo * (1 + novaDirecao)));
	}

	function finalizarAnimacao() {
		if (!animando || direcao === 0) return;

		setOrdemVisivel((ordemAtual) => {
			const primeiroAtual = ordemAtual[1];
			const proximoPrimeiro =
				(primeiroAtual + direcao + listaPromocoes.length) %
				listaPromocoes.length;

			return ordenarCards(proximoPrimeiro, listaPromocoes.length);
		});
		setPosicao(-passo);
		setDirecao(0);
		setAnimando(false);
	}

	return (
		<section className="w-full py-8" aria-label="Promocoes">
			<div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 sm:px-8">
				<button
					type="button"
					aria-label="Promocao anterior"
					onClick={() => mover(-1)}
					className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F36804] text-white shadow-md transition hover:brightness-95 disabled:opacity-50"
					disabled={animando || larguraDoCard === 0}
				>
					<FaChevronLeft />
				</button>

				<div
					ref={viewportRef}
					className="min-w-0 flex-1 overflow-hidden"
				>
					<motion.div
						className="flex"
						style={{ gap: `${espacamento}px` }}
						initial={false}
						animate={{ x: posicao }}
						transition={animando ? {
							type: "spring",
							bounce: 0.12,
							duration: 0.55,
						} : { duration: 0 }}
						onAnimationComplete={finalizarAnimacao}
					>
						{ordemVisivel.map((indice, posicaoDoCard) => {
							const promocao = listaPromocoes[indice];

							return (
								<article
									key={`${promocao.id}-${posicaoDoCard}`}
									className="flex h-48 shrink-0 flex-col justify-between rounded-xl bg-[#F36804] p-5 text-white shadow-lg sm:h-56"
									style={{ width: `${larguraDoCard}px` }}
								>
									<span className="text-sm font-medium uppercase tracking-wide text-white/75">
										Oferta especial
									</span>
									<div>
										<h3 className="text-lg font-bold sm:text-xl">
											{promocao.title}
										</h3>
										<p className="mt-2 text-2xl font-black">
											{promocao.valor}
										</p>
									</div>
								</article>
							);
						})}
					</motion.div>
				</div>

				<button
					type="button"
					aria-label="Proxima promocao"
					onClick={() => mover(1)}
					className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F36804] text-white shadow-md transition hover:brightness-95 disabled:opacity-50"
					disabled={animando || larguraDoCard === 0}
				>
					<FaChevronRight />
				</button>
			</div>
		</section>
	);
}
