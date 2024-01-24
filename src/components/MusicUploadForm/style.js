import styled from 'styled-components';

export const MusicForm = styled.form `
    & {
        max-width:50%;
        width:100%;
        margin:30px auto;
        border:.5px solid #e8e8e8;
        padding:10px;
        box-shadow:10px 10px 9px #e8e8e8;
    }

    & button {
        width:max-content;
        margin-left:10px;
    }
`

export const UploadMusic = styled.input `
    & {
       display:none;
    }
`

export const UploadDiv = styled.label `
    & {
        width: 100%;
        border: 1px solid;
        padding: 10px;
        min-height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        position: relative;
        box-shadow: 10px 10px 9px #806c6c;
    }
`

export const ProgressBar = styled.progress`
  & {
    position: absolute;
    width: 100%;
    height:7px;
    top: 0;
    border-radius: inherit;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ value }) => (value === 100 ? '100%' : '0%')};
    height: 100%;
    background-color: ${({ value }) => (value === 100 ? '#e9e5be' : '#00ff2d')};
    border-radius: inherit;
    transition: width 0.9s ease-in-out;
  }
`;


