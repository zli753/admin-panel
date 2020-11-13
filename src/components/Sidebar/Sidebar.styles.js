import styled from '@emotion/styled';

export const SidebarContainer =styled.div`
    width:${p => p.isSidebarOpen ? '250px':'80px'};
    height: 800px;
    color: white;
    background-image: linear-gradient(
    0deg,
    #434343,
    #000000);
    transition: .2s ease-in width;
    position: fixed
   `

export const SidebarHeader = styled.h3`
    padding: 10px 0px;
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 2px;
    color: white;
    font-family: ${p=>p.font};
    border-bottom: 1px solid #444;
   `

export const MenuItemContainer = styled.div`
 
`

export const MenuItem = styled.div`
    padding: 6px 30px;
    font weight: 600;
    color: #DCDCDC;
    background: ${p=>p.selected? '#707070':''};
    background-clip: ${p=>p.selected? 'border-box':''}; 
    border-radius: 10px;
    padding-bottom: 10px;
    margin: 6px;
    
    ${p => !p.isSidebarOpen &&`
       text-align: center;
       padding-left: 5px;
       padding-right: 5px
    `};
    
    ${p=> !p.selected && `
       &:hover{
       background: 	#404040;
       background-clip: border-box;
       transition: .1s ease-in all;
       }
    `};
`

export const Text=styled.p`
    display: ${p => p.isSidebarOpen ? 'inline-block':'none'};
    vertical-align: middle;
    font-family: ${p=>p.font};
    padding-top: 10px;
`

export const Icon=styled.img`
    height: 40px;
    width: 40px;
    padding-top: 10px;
    padding-left: 0px;
    
    ${p => p.isSidebarOpen &&`
       padding-right: 20px;
       transition: .2s ease-in paddling-right
    `};
`
