import styled from 'styled-components';

export const Div = styled.div `
    & {
        position: relative;
    }
    & img {
        position: absolute;
        z-index: 1;
        top: 18px;
        width: 20px;
        height: 20px;
        left: 5px;
    }
`

export const MyInput = styled.input `
    &{
        position: relative;
        padding: 13px;
        padding-left: 30px;
        border-radius:30px;
    }
`
