import { ShoppingCartSimple } from "phosphor-react"
import styled, { css } from "styled-components"

interface ContainerProps {
    isCheckout?: boolean
}

export const CardDiv = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    background: ${props => props.theme["base-card"]};
    border-radius: 6px 36px 6px 36px ;

    >div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h5 {
        ${props => css`
            ${props.theme.typography.titleS}
        `}
        margin: 1rem 0 0.5rem 0;
    }

    p {
        ${props => css`
            ${props.theme.typography.textS}
            text-align: center;
            color: ${props.theme["base-label"]};
            
        `}       
    }


    //Checkout styling
    ${props =>
        props.isCheckout && css`
            flex-direction: row;  
            padding: 0;
            width: 100%;
    `}

    h5 {
        ${props => css`
            ${props.theme.typography.textM}
        `}
    }

    p:last-child {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: flex-end;
        ${props => props.theme.typography.textMBold};
        color: ${props => props.theme['base-text']};
        align-self: flex-start;
    }
`

export const Tags = styled.p`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;


    span {
        background: ${props => props.theme["yellow-light"]};
        padding: 0.25rem 0.5rem;
        color: ${props => props.theme["yellow-dark"]};
        text-transform: uppercase;
        border-radius: 6px;
        ${props => css`
            ${props.theme.typography.tag};
        `}

    }
`

export const CoffeeImageDiv = styled.div<ContainerProps>`
    margin: -2.5rem auto 0.875rem auto;

    img {
        width: 7.5rem;
    }
    
    ${props =>
        props.isCheckout &&
        css`
        margin: 0.31rem 1.25rem 0.31rem 0.31rem;
        img {
            width: 4rem;
        }
    `}    
`

export const PriceAndAction = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2rem;
    div {
        display:flex;
        align-items: center;
        gap: 4px;
        height: 100%;
        border-radius: 6px;
        background: ${props => props.theme["base-button"]};
    }

    p {
        ${props => css`
            ${props.theme.typography.textM};
            color: ${props.theme["base-text"]};
        `}

        span {
            ${props => css`
                ${props.theme.typography.titleM};    
            `}
        }
    }

     button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        background: ${props => props.theme["purple"]};
        border-radius: 6px;
        border: none;
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
            background: ${props => props.theme["purple-dark"]};
        }

        svg {
            color: ${props => props.theme["white"]};
        }


        //Checkout styling button
        ${props =>
        props.isCheckout && css`
           background: ${props.theme["base-button"]};  
            svg {
                color: ${props.theme['purple']};
                margin-top: -2px;

             }
            ${props.theme.typography.buttonM}
            text-transform: uppercase;
            display: flex;
            gap: 0.25rem;
        `}
    }


    //Checkout Styling
    p {
        ${props => css`
            ${props.theme.typography.textM};
            color: ${props.theme["base-text"]};
        `}

        span {
            ${props => css`
                ${props.theme.typography.titleM};    
            `}
        }
    }

    ${props => props.isCheckout && css`
        margin-top: 0;
    
    `}

`

export const StyledActions = styled.div`
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 0.5rem;
    
    span {
        ${props => css`
            ${props.theme.typography.textM}
        `}
    }

    svg {
        color: ${props => props.theme["purple"]};
        cursor: pointer;
        transition: color 0.3s;

        &:hover{
            color: ${props => props.theme["purple-dark"]}
        }



    }
`

export const StyledShoppingCartSimple = styled(ShoppingCartSimple)`
    /* color: ${props => props.theme["white"]}; */

    /* &:hover{
        color: ${props => props.theme["base-text"]};
    } */

`