import { Bank, CreditCard, CurrencyDollar, CurrencyDollarSimple, MapPin, MapPinLine, Money, Timer } from "phosphor-react"
import { Card } from "../../components/Cards"
import { Header } from "../../components/Header"
import { BaseInput, Cart, CheckoutContainer, CheckoutFormContainer, FormContainer, Info, PaymentTypeContainer, PaymentTypeMethod, Separator, Submitted, Summary } from "./styles"
import illustrationSubsmitted from '../../assets/IllustrationSubmitted.svg'
import { HeroIcon } from "../Home/styles"

export function Checkout() {
	const submitted = true;

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
							<Card />
							<Separator />
							<Card />
							<Separator />

							<Summary>
								<p>Total de itens <span>R$ 29,70</span></p>
								<p>Entrega <span>R$ 3,50</span></p>
								<p>Total <span>R$ 33,20</span></p>
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
