import styled, { css } from "styled-components"

export const CheckoutContainer = styled.div`
    margin: 3.75rem 10rem 0 10rem;
    box-sizing: border-box;
    display: flex;
    gap: 2rem;

    h2{
        ${props => props.theme.typography.titleXS}
        color: ${props => props.theme["base-subtitle"]};
    }

    >div {
        width: 100%;
    }
    
    
`

const BaseContainer = styled.div`
    width: 100%;
    background: ${props => props.theme["base-card"]};
    padding: 2.5rem;
    border-radius: 6px;
`

export const CheckoutFormContainer = styled(BaseContainer)`
    width: 40rem;
    margin-top: 0.875rem;
    svg {
        color: ${props => props.theme["yellow-dark"]};
    }
`

export const Info = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    p:first-child{
        ${props => css`
            ${props.theme.typography.textM};
            color: ${props.theme["base-subtitle"]};
        `}
    }

    p:last-child {
        ${props => css`
            ${props.theme.typography.textS};
        `}
    }
`

export const FormContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    /* flex-wrap: wrap; */

     p {
        display: flex;
        gap: 1rem;
        width: 100%;
    }
`

interface InputProps {
    width?: number
}

export const BaseInput = styled.input<InputProps>`
    padding: 0.875rem;
    border-radius: 4px;
    border: 1px solid ${props => props.theme["base-button"]};
    background: ${props => props.theme["base-input"]};
    width: ${props => (props.width ? `${props.width / 16}rem` : "100%")};
    flex-grow: 0;
    
    ${props => css`
        ${props.theme.typography.textS}
    `}

    &:focus {
        /* border: 1px solid ${props => props.theme["yellow-dark"]}; */
        outline: 1px solid ${props => props.theme["yellow-dark"]};
    }

    ::placeholder {
        color: ${props => props.theme["base-label"]};

    }
`

export const PaymentTypeContainer = styled(BaseContainer)`
    margin-top: 0.875rem;
    svg {
        color: ${props => props.theme["purple"]};
    }

    div {

    }

`

export const PaymentTypeMethod = styled.div`
    display: flex;
    gap: 0.875rem;
    
    div {
        display: flex;
        padding: 1rem;
        gap: 0.875rem;
        border-radius: 6px;
        background: ${props => props.theme["base-button"]};
        width: 100%;
        border: 1px solid transparent;
        span {
            ${props => css`
                ${props.theme.typography.buttonM}    
            `}
            text-transform: uppercase;
        }

        &:hover{
            background: ${props => props.theme["base-hover"]}

        }


        //Alterar depois para o estado de selecionado
        &:focus{
            border: 1px solid ${props => props.theme['purple']};
            background: ${props => props.theme['purple-light']}
        }
    }
`

export const CheckoutCartContainer = styled(BaseContainer)`

`

export const Cart = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 2.5rem;
    background: ${props => props.theme['base-card']};
    border-radius: 6px 44px 6px 44px;
    gap: 1.5rem;
    width: 100%;
    margin-top: 0.875rem;

    > button {
        border: none;
        padding: 0.875rem;
        background: ${props => props.theme['yellow']};
        color: ${props => props.theme['white']};
        ${props => css`
            ${props.theme.typography.buttonG};
        `}
        text-transform: uppercase;
        border-radius: 6px;
        transition: background 0.2s;

        &:hover {
            background: ${props => props.theme['yellow-dark']};
        }
    } 

`

export const Summary = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 0.875rem;

    p {
        display: flex;
        justify-content: space-between;
        ${props => css`
            ${props.theme.typography.textS}
        `}
        color: ${props => props.theme["base-text"]}
    }

    p:last-child {
       ${props => css`
            ${props.theme.typography.textLBold}
        `}
        color: ${props => props.theme["base-subtitle"]}     
    }
`

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    border-top: 1px solid ${props => props.theme['base-button']};
`;

export const Submitted = styled.div`
    box-sizing: border-box;
    width: 100%;
    

    h1 {
        ${props => props.theme.typography.titleL}
        color: ${props => props.theme['yellow-dark']};
    }

    h3 {
        ${props => props.theme.typography.textL}
        color: ${props => props.theme['base-subtitle']};
    }

    svg {
        /* padding: 10px; */
    }

    > div {
        position: relative;
        margin-top: 2.5rem;
        display: flex;
        flex-direction: column;
        padding: 2.5rem;
        border-radius: 6px 36px 6px 36px;
        z-index: 1;
        gap: 2rem 0.875rem;


        div {
            display: flex;
            
            span:first-child {
                display: flex;
                margin-right: 0.875rem;
            }

            span {
                display: flex;
                flex-direction: column;
            }

            div {
                    display: flex;
                    flex-direction: column;
                    ${props => props.theme.typography.textM}
                    span:last-child{
                        font-weight: bold;
                        
                    }
                }
            }
        }

    > div::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 1px;
        background: linear-gradient(to right, ${props => props.theme['purple']}, ${props => props.theme['yellow']});
        -webkit-mask: 
            linear-gradient(white 0 0) content-box, 
            linear-gradient(white 0 0);
        mask: 
            linear-gradient(white 0 0) content-box, 
            linear-gradient(white 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        z-index: -1;
    }


`