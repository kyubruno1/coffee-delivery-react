/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useState } from "react";
import { Product } from "../components/Cards";

//Crio uma interface pro produto
export interface CartItem {
    product: Product,
    quantity: number
}

//Aqui crio outra interface porque quero enviar mais informações
//como removeFromCart, updatequantity etc
interface CartContextType {
    cart: CartItem[],
    addToCart: (product: Product, quantity: number) => void,
    removeFromCart: (productName: string) => void,
    updateQuantity: (productName: string, quantity: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    //Inicio um estado para o carrinho com um array vazio
    const [cart, setCart] = useState<CartItem[]>([]);


    function removeFromCart(productName: string) {
        setCart(prevCart => prevCart.filter((item) => item.product.name !== productName))
    }

    function addToCart(product: Product, quantity: number) {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.product.name === product.name);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.product.name === product.name ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...prevCart, { product, quantity }];
        });
    }


    function updateQuantity(productName: string, newQuantity: number) {
        setCart((prevCart) => {
            const newCart = prevCart.map((item) =>
                item.product.name === productName ? { ...item, quantity: newQuantity } : item
            );
            return [...newCart];
        });
    }

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateQuantity }}
        >
            {children}
        </CartContext.Provider>

    )
}
