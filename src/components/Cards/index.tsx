import { Minus, Plus, ShoppingCartSimple, Trash } from "phosphor-react"
import { useLocation } from "react-router-dom"
import { CardDiv, CoffeeImageDiv, PriceAndAction, StyledActions, Tags } from "./styles"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"

export interface Product {
	image: string,
	name: string,
	tags: string[],
	description: string,
	price: string
}

interface CardProps {
	product: Product,
	itemQuantity?: number
}



export function Card({ product, itemQuantity = 1 }: CardProps) {
	const location = useLocation()
	const isCheckout = location.pathname === "/checkout"

	const { addToCart, updateQuantity, removeFromCart } = useContext(CartContext);

	const [quantity, setQuantity] = useState(itemQuantity ?? 1);



	function plusButtonHandler() {
		//Atualiza o estado e na linha debaixo atualiza o estado no contexto
		setQuantity((prevQuantity) => prevQuantity + 1);
		updateQuantity(product.name, quantity + 1);

	}

	function minusButtonHandler() {
		//Atualiza o estado e na linha debaixo atualiza o estado no contexto
		setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
		updateQuantity(product.name, Math.max(quantity - 1, 1));
	}

	const productTotalPrice = parseFloat(product.price.replace(",", ".")) * itemQuantity

	return (
		<CardDiv isCheckout={isCheckout}>
			<CoffeeImageDiv isCheckout={isCheckout}>
				<img src={product.image} />
			</CoffeeImageDiv>
			<Tags>
				{!isCheckout &&
					product.tags.map((tag, index) => (
						<span key={index}>{tag}</span>
					))
				}
			</Tags>
			<div>
				<h5>{product.name}</h5>

				{!isCheckout && <p>{product.description}</p>}
				<PriceAndAction isCheckout={isCheckout}>
					{
						!isCheckout &&
						<p>R$ <span>{productTotalPrice.toFixed(2).replace(".", ",")}</span></p>
					}
					<StyledActions>
						<Minus size={isCheckout ? 14 : 22} onClick={minusButtonHandler} />
						<span>{quantity}</span>
						<Plus size={isCheckout ? 14 : 22} onClick={plusButtonHandler} />
					</StyledActions>
					{!isCheckout &&
						<button>
							<ShoppingCartSimple weight="fill" size={22} onClick={() => addToCart(product, quantity)} />
						</button>
					}

					{isCheckout &&
						<button onClick={() => removeFromCart(product.name)}>
							<Trash size={16} />
							Remover
						</button>
					}
				</PriceAndAction>
			</div>
			{isCheckout && <p>R$ <span>{productTotalPrice.toFixed(2).replace(".", ",")}</span></p>}
		</CardDiv>
	)
}
