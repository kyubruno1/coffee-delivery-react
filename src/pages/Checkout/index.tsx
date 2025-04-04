import { useContext, useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import { Header } from "../../components/Header"
import { CartContext } from "../../context/CartContext"
import { CheckoutContainer } from "./styles"
import { zodResolver } from '@hookform/resolvers/zod'
import { OrderConfirmation } from "./Components/OrderConfirmation"
import { OrderForm } from "./Components/OrderForm"
import { newOrderValidationSchema, OrderFormInputs } from '../../schemas/orderSchema';
import { CartSummary } from "./Components/CartSummary"


export function Checkout() {
	const { cart } = useContext(CartContext)

	const { register, handleSubmit, watch } = useForm<OrderFormInputs>({
		resolver: zodResolver(newOrderValidationSchema),
	})

	const { cep, rua, numero, complemento, bairro, cidade, uf, paymentMethod } = watch();
	const isFormComplete = !!(cep && rua && numero && complemento && bairro && cidade && uf && paymentMethod && cart.length > 0); /* Estava dando erro no desacoplamento do carrinho, então adicionei este !!() que transforma o valor em truthy ou falsy para poder ser enviado com boolean */


	const deliveryPrice = 3.5
	const [totalPriceItems, setTotalPriceItems] = useState(0);

	const [submitted, setSubmitted] = useState(false);
	function handleCreateNewOrder() {
		setSubmitted(true)
	}

	useEffect(() => {
		const newTotal = cart.reduce((acc, item) => acc + parseFloat(item.product.price.replace(",", ".")) * item.quantity, 0);
		setTotalPriceItems(newTotal);
	}, [cart]);

	return (
		<>
			<Header />
			{!submitted &&
				<form onSubmit={handleSubmit(handleCreateNewOrder)}>
					<CheckoutContainer>
						<div>
							<h2>Complete seu pedido</h2>
							<OrderForm register={register} paymentMethod={paymentMethod} />
						</div>
						<div>
							<h2>Cafés selecionados</h2>
							<CartSummary
								cart={cart}
								totalPriceItems={totalPriceItems}
								deliveryPrice={deliveryPrice}
								isFormComplete={isFormComplete}
							/>
						</div>
					</CheckoutContainer>
				</form>
			}


			{
				submitted &&
				<OrderConfirmation
					address={{ rua, numero, bairro, cidade, uf }}
					paymentMethod={paymentMethod}
				/>
			}
		</>
	)
}
