import { MapPin } from "phosphor-react"
import { NavLink } from "react-router-dom"
import CoffeeDeliveryLogo from "../../assets/CoffeeDeliveryLogo.svg"
import { CartButton, HeaderContainer, StyledShoppingCartSimple } from "./styles"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Header() {
	const { cart } = useContext(CartContext)

	const hasItemInCart = cart.length ? true : false;

	const amountOfItemsInCart = cart.reduce((acc, item) => {
		return acc + item.quantity;
	}, 0)

	return (
		<HeaderContainer>
			<NavLink to="/">
				<img src={CoffeeDeliveryLogo} />
			</NavLink>
			<nav>
				<div>
					<MapPin size={22} weight="fill" />
					<span>Porto Alegre, RS</span>
				</div>
				<NavLink to="/checkout">
					<CartButton>
						<StyledShoppingCartSimple size={22} weight="fill" />
						{hasItemInCart &&
							<span>{amountOfItemsInCart}</span>
						}
					</CartButton>
				</NavLink>
			</nav>
		</HeaderContainer>
	)
}
