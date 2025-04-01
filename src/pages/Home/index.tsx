import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import pageCoffee from "../../assets/Page-coffee.svg"
import { Card } from "../../components/Cards/index.tsx"
import { Header } from "../../components/Header/index.tsx"
import { HeroIcon, HeroSection, HomeContainer, ProductList } from "./styles.ts"
export function Home() {
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
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</section>
				</ProductList>
			</HomeContainer>
		</>
	)
}
