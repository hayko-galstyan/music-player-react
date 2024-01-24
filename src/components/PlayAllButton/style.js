import styled from 'styled-components';

export const DivItem = styled.div `
    & {
        display:flex;
        flex-wrap:nowrap;
        gap:0;
        border:1px solid;
        border-radius:5px;
        background:#ffffff;
    }
`

export const MySelect = styled.select `
    & {
       background:transparent;
       border:none;
    }
`

export const MyButton  = styled.button`
    & {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        gap:6px;
        padding:12px;
        background:transparent; 
        border:none;
        border-right:1px solid;
    }

    & img {
        width:20px;
        height:20px;
    }
`