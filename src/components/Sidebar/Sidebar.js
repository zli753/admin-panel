import React, {useState, useEffect} from 'react';
import * as S from './Sidebar.styles';
import {Link} from 'react-router-dom';

const Sidebar = props =>{
    const {
        sidebarHeader={
            fullName: '',
            shortName: ''
        },
        menuItems=[],
        font={
            header: '',
            menu: ''
        }
    } =props;

    //state
    const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
    const [isSidebarOpen, setSidebarState] = useState(true);
    const [header, setHeader] = useState(sidebarHeader.fullName);

    //Effect
    //updates header state
    useEffect(()=>{
        isSidebarOpen? setTimeout(()=>setHeader(sidebarHeader.fullName), 200) : setHeader(sidebarHeader.shortName);
    },[isSidebarOpen, sidebarHeader])

    //update the width of the window
    useEffect(()=> {
        const updateWindowWidth= () =>{
            if (window.innerWidth < 1280) setSidebarState(false);
            else setSidebarState(true)
        }
        window.addEventListener('resize', updateWindowWidth);
        return ()=> window.removeEventListener('resize', updateWindowWidth);
    }, [isSidebarOpen])

    const handleMenuItemClick = name =>{
        setSelectedMenuItem(name)
    }
    const menuItemsJSX = menuItems.map((item, index)=>{
        const isItemSelected=selected === item.name;


        return (
            <Link to={item.to} style={{textDecoration: 'none'}}>
                <S.MenuItem
                    key={index}
                    font={font.menu}
                    selected={isItemSelected}
                    onClick = {() => handleMenuItemClick(item.name)}
                    isSidebarOpen={isSidebarOpen}
                >
                    <S.Icon src={item.icon} isSidebarOpen={isSidebarOpen}/>
                    <S.Text isSidebarOpen={isSidebarOpen}>{item.name}</S.Text>
                </S.MenuItem>
            </Link>
        )
    })


    return (
        <S.SidebarContainer isSidebarOpen={isSidebarOpen}>
            <S.SidebarHeader font={font.header}>{header}</S.SidebarHeader>
            <S.MenuItemContainer>{menuItemsJSX}</S.MenuItemContainer>
        </S.SidebarContainer>
    )
}

export default Sidebar