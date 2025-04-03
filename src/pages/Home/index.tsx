import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import pageCoffee from "../../assets/Page-coffee.svg"
import { Card } from "../../components/Cards/index.tsx"
import { Header } from "../../components/Header/index.tsx"
import { HeroIcon, HeroSection, HomeContainer, ProductList } from "./styles.ts"

import { images } from "../../assets/imageImports.ts";

interface Product {
	image: string,
	name: string,
	tags: string[],
	description: string,
	price: string
}

export function Home() {
	const products: Product[] = [
		{
			image: images.Expresso,
			name: "Expresso Tradicional",
			tags: ["Tradicional"],
			description: "O tradicional café feito com água quente e grãos moídos",
			price: "9,90",
		},
		{
			image: images.Americano,
			name: "Café Americano",
			tags: ["Tradicional"],
			description: "Expresso diluído, menos intenso que o tradicional",
			price: "9,90",
		},
		{
			image: images.ExpressoCremoso,
			name: "Expresso Cremoso",
			tags: ["Tradicional"],
			description: "Café expresso tradicional com espuma cremosa",
			price: "9,90",
		},
		{
			image: images.ExpressoGelado,
			name: "Expresso Gelado",
			tags: ["Tradicional", "Gelado"],
			description: "Bebida preparada com café expresso e cubos de gelo",
			price: "9,90",
		},
		{
			image: images.CafeComLeite,
			name: "Café com Leite",
			tags: ["Tradicional", "Com Leite"],
			description: "Meio a meio de expresso tradicional com leite vaporizado",
			price: "9,90",
		},
		{
			image: images.Latte,
			name: "Latte",
			tags: ["Tradicional", "Com Leite"],
			description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
			price: "9,90",
		},
		{
			image: images.Capuccino,
			name: "Capuccino",
			tags: ["Tradicional", "Com Leite"],
			description: "Bebida com canela feita de doses iguais de café, leite e espuma",
			price: "9,90",
		},
		{
			image: images.Macchiato,
			name: "Macchiato",
			tags: ["Tradicional", "Com Leite"],
			description: "Café expresso misturado com um pouco de leite quente e espuma",
			price: "9,90",
		},
		{
			image: images.Mocaccino,
			name: "Mocaccino",
			tags: ["Tradicional", "Com Leite"],
			description: "Café expresso com calda de chocolate, pouco leite e espuma",
			price: "9,90",
		},
		{
			image: images.ChocolateQuente,
			name: "Chocolate Quente",
			tags: ["Especial", "Com Leite"],
			description: "Bebida feita com chocolate dissolvido no leite quente e café",
			price: "9,90",
		},
		{
			image: images.Cubano,
			name: "Cubano",
			tags: ["Especial", "Com Leite", "Gelado"],
			description: "Drink Gelado de café expresso com rum, creme de leite e hortelã",
			price: "9,90",
		},
		{
			image: images.Havaiano,
			name: "Havaiano",
			tags: ["Especial"],
			description: "Bebida adocidada preparada com café e leite de coco",
			price: "9,90",
		},
		{
			image: images.Arabe,
			name: "Arabe",
			tags: ["Especial"],
			description: "Bebida preparada com grãos de café árabe e especiarias",
			price: "9,90",
		},
		{
			image: images.Irlandes,
			name: "Irlandês",
			tags: ["Especial", "Alcoólico"],
			description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
			price: "9,90",
		},
	]



	return (
		<>
			<Header />

			<HomeContainer>
				<HeroSection>
					<div>
						<h1>Encontre o café perfeito para qualquer hora do dia</h1>
						<h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
						<article>
							<p>
								<HeroIcon color="yellow-dark">
									<ShoppingCart size={16} weight="fill" color="white" />
								</HeroIcon>{" "}
								Compra simples e segura
							</p>
							<p>
								<HeroIcon color="base-text">
									<Package size={16} weight="fill" color="white" />
								</HeroIcon>{" "}
								Embalagem mantém o café intacto
							</p>
							<p>
								<HeroIcon>
									<Timer size={16} weight="fill" color="white" />
								</HeroIcon>{" "}
								Entrega rápida e rastreada
							</p>
							<p>
								<HeroIcon color="purple">
									<Coffee size={16} weight="fill" color="white" />
								</HeroIcon>{" "}
								O café chega fresquinho até você
							</p>
						</article>
					</div>
					<img src={pageCoffee} />
				</HeroSection>
				<ProductList>
					<h3>Nossos cafés</h3>
					<section>
						{
							products.map((product, index) => (
								<Card
									key={index}
									product={product}
								/>
							))
						}

					</section>
				</ProductList>
			</HomeContainer>
		</>
	)
}
