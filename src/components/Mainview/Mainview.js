import React, {useState, useEffect} from 'react';
import * as S from './Mainview.styles';
import Routes from '../../Routes';
import Navigationbar from './Navigationbar';
import Footer from './Footer'

const Mainview = props =>{

    const {
        font={
            header: '',
            menu: ''
        },

        card1Items=[],
        userBehavior={},
        emailStat={}
    } =props;
    //state
    const [isSidebarOpen, setSidebarState] = useState(true);
    //Effect
    //update the width of the window
    useEffect(()=> {
        const updateWindowWidth= () =>{
            if (window.innerWidth < 1280) setSidebarState(false);
            else setSidebarState(true)
        }
        window.addEventListener('resize', updateWindowWidth);
        return ()=> window.removeEventListener('resize', updateWindowWidth);
    }, [isSidebarOpen])


    return (
        <S.MainviewContainer isSidebarOpen={isSidebarOpen}>
            <S.contentWrap>
                <Navigationbar />
                <Routes
                    font={font}
                    card1Items={card1Items}
                    userBehavior={userBehavior}
                    emailStat={emailStat}
                />
                <Footer font={font}/>
            </S.contentWrap>
        </S.MainviewContainer>
    )
}

export default Mainview