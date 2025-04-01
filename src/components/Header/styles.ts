import { ShoppingCartSimple } from "phosphor-react"
import styled, { css } from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 10rem;

    height: 6.5rem;

    nav {
        display: flex;
        gap: 0.875rem;
        align-items: center;
        box-sizing: border-box;

        div {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            padding: 8px;
            color: ${props => props.theme["purple"]};
            background: ${props => props.theme["purple-light"]};
            border-radius: 6px;
            
            span {
                ${props => props.theme.typography.textS}
            }
        }
    }
`

export const CartButton = styled.button`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        background: ${props => props.theme["yellow-light"]};
        border-radius: 6px;
        border: none;
        cursor: pointer;
        transition: background 0.3s;

        span {
            position: absolute;
            top: -6px;
            right: -6px;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            text-align: center;
            background: ${props => props.theme["yellow-dark"]};
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${props => props.theme.white};
            /* ${props => css`
                ${props.theme.typography.buttonM}
            `} */
            ${props => css`
                ${props.theme.typography.textSBold}    
            `}
        }

        &:hover {
            background: ${props => props.theme["yellow"]};
        }
`



export const StyledShoppingCartSimple = styled(ShoppingCartSimple)`
    color: ${props => props.theme["yellow-dark"]};
`
