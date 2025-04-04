import styled from "styled-components";

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