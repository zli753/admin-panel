import styled from '@emotion/styled';

export const wrapper=styled.div `
    height: auto;
    width: auto;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    margin: 20px 10px;
    align-items: center;
`

export const formwrapper=styled.div `
    width: 100%;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    border-radius: 10px;
    background-color: #ffffff;
`

export const profilewrapper=styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #ffffff;
`

export const form=styled.div `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    
    @media (max-width: 1001px) { 
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(1, 1fr);
  }
`

export const h1=styled.h1 `
    font-family: ${p=>p.font} !important;
    font-size: 18px !important;
    text-align: left;
    font-weight: 200;
    color: #606060;
`

export const h2=styled.h1 `
    font-family: ${p=>p.font} !important;
    font-size: 18px !important;
    text-align: center;
    font-weight: 200;
    color: #606060;
    padding-top: 70px;
`

export const label=styled.h1 `
    font-family: ${p=>p.font} !important;
    font-size: 14px !important;
    text-align: left;
    padding-top: 20px;
    padding-bottom: 1px;
    color: #A9A9A9;
`
export const acount=styled.h1 `
    font-family: ${p=>p.font} !important;
    font-size: 14px !important;
    text-align: center;
    
    padding-bottom: 20px;
    color: #A9A9A9;
`


export const input=styled.input
    `
    font-size: 14px !important;
    text-align: left;
    color: #A9A9A9;
    border-radius: 5px;
    outline: none;
    border: 1px solid #cfcfcf;
    width: 100%;
    height: 40px;
    
    &::-webkit-input-placeholder {  
      vertical-align: middle;
      color: 	#D0D0D0;
      font-family: ${p=>p.font} !important;
      font-size: 14px !important;
      justify-content: center;
    }
    
    
`

export const button=styled.div`
     padding-top: 30px;
     padding-bottom: 15px
    `

export const img=styled.img`
        display: block;
        max-height:180px;
        max-width: 400px;
        overflow: hidden;
        width: auto;
        height: auto;
    `

export const imgRound=styled.img`
      position: absolute;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 3px solid #D0D0D0;
    `
export const imgContainer=styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    left: 50%;
    top: 40%;
    position: absolute;
    `

export const ImgC21=styled.img`
    width: 100%;
    height: 150px;
    overflow: hidden;
    
`