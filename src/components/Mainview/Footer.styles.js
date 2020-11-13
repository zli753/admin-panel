import styled from '@emotion/styled';

export const footer = styled.div`
    background: border-box;
    background: white;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem; 
    `

export const status=styled.h1`
    padding-top: 10px;
    color: #A9A9A9;
    font-family: ${p=>p.font} !important;
    font-size: 15px !important;
    &:hover{
             color:black;
          }   
`

export const status2=styled.h1`
    padding-top: 10px;
    color: #A9A9A9;
    font-family: ${p=>p.font} !important;
    font-size: 15px !important;
    text-align: right
`