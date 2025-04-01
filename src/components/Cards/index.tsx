// import { ShoppingCartSimple  } from 'phosphor-react'
import { Minus, Plus, Trash } from "phosphor-react"
import { useLocation } from "react-router-dom"
import expresso from "../../assets/Type=Expresso.svg"
import { CardDiv, CoffeeImageDiv, PriceAndAction, StyledActions, StyledShoppingCartSimple, Tags } from "./styles"

export function Card() {
	const location = useLocation()

	const isCheckout = location.pathname === "/checkout"


	return (
		<CardDiv isCheckout={isCheckout}>
			<CoffeeImageDiv isCheckout={isCheckout}>
				<img src={expresso} />
			</CoffeeImageDiv>
			{!isCheckout && <Tags>Tradicional</Tags>}
			<div>
				<h5>Expresso Tradicional</h5>

				{!isCheckout && <p>O tradicional café feito com água quente e grãos moídos</p>}
				<PriceAndAction isCheckout={isCheckout}>
					{
						!isCheckout &&
						<p>R$ <span>9,90</span></p>
					}
					<StyledActions>
						{!isCheckout ? (
							<>
								<Minus size={22} />
								<span>1</span>
								<Plus size={22} />
							</>
						) : (
							<>
								<Minus size={14} />
								<span>1</span>
								<Plus size={14} />
							</>
						)}
					</StyledActions>
					{!isCheckout &&
						<button>
							<StyledShoppingCartSimple weight="fill" size={22} />
						</button>
					}

					{isCheckout &&
						<button>
							<Trash size={16} />
							Remover
						</button>
					}
				</PriceAndAction>
			</div>
			{isCheckout && <p>R$ <span>9,90</span></p>}
		</CardDiv>
	)
}
