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

export const BaseContainer = styled.div`
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


`

export const PaymentTypeMethod = styled.div`
    display: flex;
    gap: 0.875rem;
`

interface PaymentLabelProps {
    selected: boolean;
}

export const PaymentLabel = styled.label<PaymentLabelProps>`
    display: flex;
    padding: 1rem;
    gap: 0.875rem;
    border-radius: 6px;
    background: ${(props) => (props.selected ? props.theme["purple-light"] : props.theme["base-button"])};
    width: 100%;
    border: ${(props) => (props.selected ? `1px solid ${props.theme["purple"]}` : '1px solid transparent')};
    
    span {
        ${props => css`
            ${props.theme.typography.buttonM}    
        `}
        text-transform: uppercase;
    }

    &:hover{
        background: ${props => props.theme["base-hover"]}

    }

    input[type="radio"] {
        appearance: none;  
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 0;
        height: 0;
        margin: 0;
        position: absolute;
    }

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

        &:disabled {
            background:rgb(139, 109, 27);
            color: #9f9f9f;
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

