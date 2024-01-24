import styled from 'styled-components';

export const Row = styled.div `
    & {
        display:flex;
        gap:3px;
        flex-wrap:nowrap;
        width:100%;
    }

    & div {
        width:100%;
        padding:10px;
        color:#898787;
    }

    &:hover {
        opacity:0.5;
    }
`

export const Action = styled.button `
    & {
        background:transparent;
        border:none;
    }
`

export const Icon = styled.button  `
    & {
        background:transparent;
        border:none;
    }
    & img {
        width:20px;
        height:20px;
        object-fit:content;
    }
`