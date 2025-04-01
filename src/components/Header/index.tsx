import { MapPin } from "phosphor-react"
import { NavLink } from "react-router-dom"
import CoffeeDeliveryLogo from "../../assets/CoffeeDeliveryLogo.svg"
import { CartButton, HeaderContainer, StyledShoppingCartSimple } from "./styles"

export function Header() {
	const hasItemInCart = false;
	return (
		<HeaderContainer>
			<img src={CoffeeDeliveryLogo} />
			<nav>
				<div>
					<MapPin size={22} weight="fill" />
					<span>Porto Alegre, RS</span>
				</div>
				<NavLink to="/checkout">
					<CartButton>
						<StyledShoppingCartSimple size={22} weight="fill" />
						{hasItemInCart &&
							<span>3</span>
						}
					</CartButton>
				</NavLink>
			</nav>
		</HeaderContainer>
	)
}
