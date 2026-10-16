"use client"

import {useState, useRef, useEffect} from "react";
import {motion} from "framer-motion";
import { Button } from "@/app/components/details/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

//tipo de objeto dentro da lista
type promocao = {
	id: number,
	title: string,
	preco: string
}

//lista de itens para os cards
const lista: promocao[] = [
	{id: 0, title: "Promoção 1", preco: "R$39,99"},
	{id: 1, title: "Promoção 2", preco: "R$19,50"},
	{id: 2, title: "Promoção 3", preco: "R$129,90"},
	{id: 3, title: "Promoção 4", preco: "R$59,99"},
	{id: 4, title: "Promoção 5", preco: "R$9,70"},
	{id: 5, title: "Promoção 6", preco: "R$209,99"}
]

function ordenarCards(primeiro:number) {
	if (lista.length == 0) return [];

	return Array.from({length: 7}, (_, index) => {
		return (primeiro + index - 1 + lista.length) % lista.length
	})
}

//tamanho para largura do width, implementado com tipo vw = viewWidth
const flexGap = 16;

export function Promocoes() {
	//referencia para largura do viewport
	const refViewport = useRef<HTMLDivElement>(null);
	const refView = useRef<HTMLDivElement>(null);

	//variáveis para verificar animação, direção, deslocamento e gap entre cards
	const [animando, setAnimando] = useState<true | false>(false);
	const [direcao, setDirecao] = useState<0 | 1 | -1>(0);
	const [deslocamento, setDeslocamento] = useState<number>(0);
	const [largura, setLargura] = useState<number>(0);
	const inicioToque = useRef<number | null>(null);

	//variável para armazenar ordem atual de cards visiveis
	const [ordemAtual, setOrdemAtual] = useState<number[]>(() => {
		return ordenarCards(0);
	})

	useEffect(() => {
		//variável armazena elemento dom do viewport
		const domViewport = refViewport.current;

		//Verificação para garantir que não está nulo o elemento dom
		if (!domViewport) return;
		const viewport = domViewport;

		//função para calcular espaçamento necessário entre os cards
		function calcDeslocELarg() {
			//armazena o width renderizado na tela do usuario
			const widthView = viewport.getBoundingClientRect().width;
			const quantidadeVisivel = widthView < 768 ? 1 : 5;
			const novaLargura = (widthView - flexGap * (quantidadeVisivel - 1)) / quantidadeVisivel;

			setLargura(novaLargura);
			setDeslocamento(-(novaLargura + flexGap));
		}

		//chama a primeira vez para calcular o gap
		calcDeslocELarg();

		//objeto que vai verificar a mudança do tamanho da tela
		const tamanhoTela = new ResizeObserver(() => {
			calcDeslocELarg();
		})

		//elemento que é observado, precisa ter elemento DOM nele
		tamanhoTela.observe(domViewport);

		//desconecta o observador
		return () => tamanhoTela.disconnect();
	}, [])

	function encerrarAnimacao() {
		if (lista.length == 0 || !animando || direcao == 0) return;

		setOrdemAtual((prev) => {
			const proximo = prev[1 + direcao];
			return ordenarCards(proximo);
		})

		setAnimando(false)
		setDirecao(0)
	}

	function mover(novaDirecao: 1 | -1) {
		if (animando || lista.length == 0 || deslocamento == 0) return;

		setAnimando(true);
		setDirecao(novaDirecao);
	}

	function iniciarToque(event: React.PointerEvent<HTMLDivElement>) {
		inicioToque.current = event.clientX;
	}

	function encerrarToque(event: React.PointerEvent<HTMLDivElement>) {
		if (inicioToque.current === null) return;

		const distancia = event.clientX - inicioToque.current;
		inicioToque.current = null;

		if (Math.abs(distancia) < 40) return;
		mover(distancia < 0 ? 1 : -1);
	}

	return(
		<div>
			<div className="relative">
				<Button onClick={() => mover(-1)}
					className={"left-20"}>
					<FaChevronLeft/>
				</Button>
				<div className="overflow-hidden mx-12 md:mx-20 lg:mx-35 mb-5" ref={refViewport}>
					<motion.div className="flex"
					ref={refView}
					onPointerDown={iniciarToque}
					onPointerUp={encerrarToque}
					onPointerCancel={() => { inicioToque.current = null; }}
					style={{gap: `${flexGap}px`, touchAction: "pan-y"}}
					initial={false}
					animate={{x: deslocamento * (1 + direcao)}}
					transition={animando ? 
						{type: "spring", bounce: 0.15, duration: 0.5} :
						{duration: 0}}
					onAnimationComplete={encerrarAnimacao}>
						{ordemAtual.map((dado,index) => {
							return(
								<div className="bg-[#F36804] shrink-0 h-[20vw] rounded-[1vw] p-5"
								key={`${lista[dado].id}-${index}`}
								style={{width: `${largura}px`}}>
									<p>{lista[dado].title}</p>
									<p>{lista[dado].preco}</p>

								</div>
							)
						})}
					</motion.div>
				</div>
				<Button onClick={() => mover(1)}
					className={"right-20"}>
					<FaChevronRight/>
				</Button>
			</div>
		</div>
	)
}