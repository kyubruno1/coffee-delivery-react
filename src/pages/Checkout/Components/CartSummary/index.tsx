import { Card } from "../../../../components/Cards";
import { CartItem } from "../../../../context/CartContext";
import { Cart, Separator, Summary } from "../../styles";


interface CartSummaryProps {
    cart: CartItem[];
    totalPriceItems: number;
    deliveryPrice: number;
    isFormComplete: boolean;
}

export function CartSummary({ cart, totalPriceItems, deliveryPrice, isFormComplete }: CartSummaryProps) {
    return <Cart>
        {cart.map((item) => (
            <div key={item.product.name}>
                <Card product={item.product} itemQuantity={item.quantity} />
                <Separator />
            </div>

        ))}
        <Summary>
            <p>Total de itens <span>R$ <span>{totalPriceItems.toFixed(2).replace('.', ',')}</span></span></p>
            <p>Entrega <span>R$ <span>{deliveryPrice.toFixed(2).replace('.', ',')}</span></span></p>
            <p>Total <span>R$ <span>{(totalPriceItems + deliveryPrice).toFixed(2).replace('.', ',')}</span></span></p>
        </Summary>


        <button type="submit" disabled={!isFormComplete}>Confirmar Pedido</button>
    </Cart>
}