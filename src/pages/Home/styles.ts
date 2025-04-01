import styled, { css } from "styled-components"
import type { defaultTheme } from "../../styles/themes/default"

export const HomeContainer = styled.main`
    margin: 3.75rem 10rem 0 10rem;
`

interface HeroIconProps {
    color?: keyof typeof defaultTheme
}

export const HeroIcon = styled.span<HeroIconProps>`
    display: flex;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    padding: 0.5rem;
    background: ${props => props.theme[props.color || "yellow"]};
    color: ${props => props.theme['white']};
`

export const HeroSection = styled.section`
    display: flex;
    justify-content: center;
    position: relative; 
    div {
        margin-right: 3.5rem;

        &::before {
            content: "";
            position: absolute;
            right: 70%;
            top: 65%;
            transform: translateY(-50%);
            width: 12rem;
            height: 12rem;
            background: ${props => props.theme["yellow-light"]};
            border-radius: 50%;
            z-index: -1;
            filter: blur(80px);
        }

        &::after {
            content: "";
            position: absolute;
            right: 90%;
            top: 30%;
            transform: translateY(-50%);
            width: 12rem;
            height: 12rem;
            background: ${props => props.theme["yellow-light"]};
            border-radius: 50%;
            z-index: -1;
            filter: blur(80px);
        }
    }

    h1 {
        ${props => css`
            ${props.theme.typography.titleXL};
            margin-bottom: 1rem;
            color: ${props.theme["base-title"]};
        `}
        
        
        &::before {
            content: "";
            position: absolute;
            right: 50%;
            top: 40%;
            width: 14rem;
            height: 14rem;
            background: ${props => props.theme["purple-light"]};
            border-radius: 50%;
            transform: rotate(-25deg);
            z-index: -1;
            filter: blur(70px);
        }

        &::after {
            content: "";
            position: absolute;
            right: 95%;
            top: 30%;
            width: 14rem;
            height: 14rem;
            background: ${props => props.theme["purple-light"]};
            border-radius: 50%;
            transform: rotate(-25deg);
            z-index: -1;
            filter: blur(70px);
        }
    } 

    h3 {
        ${props => css`
            ${props.theme.typography.textL};
            margin-bottom: 4.125rem;
            color: ${props.theme["base-subtitle"]};
        `}

        &::before {
            content: "";
            position: absolute;
            right: -9%;
            top: 40%;
            width: 14rem;
            height: 14rem;
            background: ${props => props.theme["purple-light"]};
            border-radius: 50%;
            transform: rotate(-25deg);
            z-index: -1;
            filter: blur(30px);
        }

        &::after {
            content: "";
            position: absolute;
            right: -9%;
            top: 5%;
            width: 14rem;
            height: 14rem;
            background: ${props => props.theme["purple-light"]};
            border-radius: 50%;
            transform: rotate(-25deg);
            z-index: -1;
            filter: blur(30px);
        }
    } 

    article {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.25rem;

            p {
                display: flex;
                align-items: center;
                gap: 12px;
                ${props => css`
                    ${props.theme.typography.textM};
                    /* margin-bottom: 3.375rem; */
                    color: ${props.theme["base-subtitle"]};
                `}
            }
        &::after {
            content: "";
            position: absolute;
            right: 40%;
            top: 20%;
            width: 10rem;
            height: 10rem;
            background: ${props => props.theme["yellow-light"]};
            border-radius: 50%;
            transform: rotate(-25deg);
            z-index: -1;
            filter: blur(80px);
        }

         &::after {
            content: "";
            position: absolute;
            right: 70%;
            top: 0%;
            width: 14rem;
            height: 14rem;
            background: ${props => props.theme["purple-light"]};
            border-radius: 50%;
            transform: rotate(-25deg);
            z-index: -1;
            filter: blur(80px);
        }
    }

    img {
        margin-bottom: 5.75rem;
    }

    &::before {
        content: "";
        position: absolute;
        right: 10%;
        top: 40%;
        transform: translateY(-50%);
        width: 26rem;
        height: 27rem;
        background: ${props => props.theme["yellow-light"]};
        border-radius: 50%;
        z-index: -1;
        filter: blur(100px);
    }

    &::after {
        content: "";
        position: absolute;
        right: 2%;
        top: 35%;
        width: 14rem;
        height: 14rem;
        background: ${props => props.theme["yellow-light"]};
        border-radius: 50%;
        transform: rotate(-25deg);
        z-index: -1;
        filter: blur(70px);
    }

`

export const ProductList = styled.div`
   h3 {
        ${props => css`
            ${props.theme.typography.titleL};
            margin-bottom: 3.375rem;
            margin-top: 2rem;
            color: ${props.theme["base-subtitle"]};
        `}
   }     

    section {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2.5rem 2rem;
    }

`
