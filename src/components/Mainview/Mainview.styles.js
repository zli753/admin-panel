import styled from '@emotion/styled';

export const MainviewContainer =styled.div`
    width:100%;
    text-align;
    h1{
      font-size: 2rem
    }
    position: relative;
    min-height: 100vh;
    margin-left: ${p => p.isSidebarOpen ? '250px':'80px'};
    transition: .2s ease-in;
    `

export const contentWrap =styled.div`
    padding-bottom: 2.5rem; 
    `
