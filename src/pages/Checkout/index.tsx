import { Bank, CreditCard, CurrencyDollar, CurrencyDollarSimple, MapPin, MapPinLine, Money, Timer } from "phosphor-react"
import { Card } from "../../components/Cards"
import { Header } from "../../components/Header"
import { BaseInput, Cart, CheckoutContainer, CheckoutFormContainer, FormContainer, Info, PaymentTypeContainer, PaymentTypeMethod, Separator, Submitted, Summary } from "./styles"
import illustrationSubsmitted from '../../assets/IllustrationSubmitted.svg'
import { HeroIcon } from "../Home/styles"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"

export function Checkout() {
	const submitted = false;
	const { cart } = useContext(CartContext)

	const deliveryPrice = 3.5

	const [totalPriceItems, setTotalPriceItems] = useState(0);

	useEffect(() => {
		const newTotal = cart.reduce((acc, item) => acc + parseFloat(item.product.price.replace(",", ".")) * item.quantity, 0);
		setTotalPriceItems(newTotal);
	}, [cart]);

	return (
		<>
			<Header />

			{!submitted &&
				<CheckoutContainer>
					<div>
						<h2>Complete seu pedido</h2>
						<CheckoutFormContainer>
							<Info>
								<span>
									<MapPinLine size={22} />
								</span>
								<div>
									<p>Endereço de entrega</p>
									<p>Informe o endereço onde deseja receber seu pedido</p>
								</div>
							</Info>
							<FormContainer>
								<p>
									<BaseInput width={200} placeholder="CEP" />
								</p>
								<BaseInput placeholder="Rua" />
								<p>
									<BaseInput width={200} placeholder="Número" />
									<BaseInput placeholder="Complemento" />
								</p>
								<p>
									<BaseInput width={200} placeholder="Bairro" />
									<BaseInput width={300} placeholder="Cidade" />
									<BaseInput placeholder="UF" />
								</p>
							</FormContainer>
						</CheckoutFormContainer>

						<PaymentTypeContainer>
							<Info>
								<span>
									<CurrencyDollar size={22} />
								</span>
								<div>
									<p>Pagamento</p>
									<p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
								</div>
							</Info>
							<PaymentTypeMethod>
								<div>
									<CreditCard />
									<span>Cartão de crédito</span>
								</div>
								<div>
									<Bank />
									<span>Cartão de débito</span>
								</div>
								<div>
									<Money />
									<span>Dinheiro</span>
								</div>
							</PaymentTypeMethod>
						</PaymentTypeContainer>
					</div>
					<div>
						<h2>Cafés selecionados</h2>
						<Cart>
							{cart.map((item) => (
								<>
									<Card product={item.product} itemQuantity={item.quantity} />
									<Separator />
								</>

							))}
							<Summary>
								<p>Total de itens <span>R$ <span>{totalPriceItems.toFixed(2).replace('.', ',')}</span></span></p>
								<p>Entrega <span>R$ <span>{deliveryPrice.toFixed(2).replace('.', ',')}</span></span></p>
								<p>Total <span>R$ <span>{(totalPriceItems + deliveryPrice).toFixed(2).replace('.', ',')}</span></span></p>
							</Summary>


							<button>Confirmar Pedido</button>
						</Cart>
					</div>
				</CheckoutContainer>
			}

			{submitted &&
				<CheckoutContainer>
					<Submitted>
						<h1>Pedido confirmado</h1>
						<h3>Agora é só aguardar que logo o café chegará até você</h3>

						<div>
							<div><HeroIcon color="purple"><MapPin size={16} weight="fill" /></HeroIcon><div><span>Entrega em Rua João Daniel Martinelli, 102</span><span>Farrapos - Porto Alegre, RS</span></div></div>
							<div><HeroIcon color="yellow"><Timer size={16} weight="fill" /></HeroIcon><div><span>Previsão de entrega</span><span>20 min - 30 min</span></div></div>
							<div><HeroIcon color="yellow-dark"><CurrencyDollarSimple size={16} weight="fill" /></HeroIcon><div><span>Pagamento na entrega</span><span>Cartão de crédito</span></div></div>
						</div>
					</Submitted>
					<img src={illustrationSubsmitted} />
				</CheckoutContainer>}
		</>
	)
}
