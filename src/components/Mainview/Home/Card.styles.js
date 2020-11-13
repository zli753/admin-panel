import styled from '@emotion/styled';

export const Icon=styled.img`
    height: 50px;
    width: 50px;
`

export const ImgC21=styled.img`
    width: auto;
    height: auto;
    object-fit: cover;
    max-width:100%;
    max-height: 100%;
`

export const eachCard=styled.div`
    margin-top: 10px;
`

export const Card=styled.div`
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    
    @media (max-width: 1000px) and (min-width: 650px){
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
    }
    
    
    @media (min-width: 1001px) { 
      display: grid;
      gap: 1rem;
      grid-auto-flow: column;
      grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`

export const Card2=styled.div`
    margin-top: 20px;
    margin-left: 6px;
    margin-right: 6px;
    padding-bottom: 10px
`

export const status=styled.h1`
    padding-top: 10px;
    color: #A9A9A9;
    font-family: ${p=>p.font} !important;
    font-size: 15px !important;
    
`

export const result=styled.h1`
    border-bottom: 1px solid #A9A9A9;
    padding-bottom: 5px;
`



export const Header1=styled.h1`
    font-family: ${p=>p.font} !important;
    font-size: 18px !important;
    text-align: right;
`

export const Header2=styled.h1`
    font-family: ${p=>p.font} !important;
    font-size: 25px !important;
    text-align: right;
    font-weight: bold !important;
`