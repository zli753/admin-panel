import React from 'react';
import * as S from './App.styles';

//comments
import Sidebar from './components/Sidebar/Sidebar';
import Mainview from './components/Mainview/Mainview';

const App = () =>{

    const card1Items=[
        {name: 'Capacity', status: '1050G', icon: 'icons/capacity.svg', info: 'Updated Now'},
        {name: 'Revenue', status: '$1,345', icon: 'icons/folder.svg', info: 'Last Day'},
        {name: 'Error', status: '23', icon: 'icons/error.svg', info: 'In the Last Hour'},
        {name: 'Followers', status: '+45', icon: 'icons/twitter.svg', info: 'Updated Now'}
    ];

    const userBehavior= {name: 'User Bahavior', status: '24 Hours Performance', img: 'Images/UserBehavior.JPG', info: 'Updated 3 minutes ago'};
    const emailStat= {name: 'Email Statistics', status: 'Last Campaign Performance', img: 'Images/EmailStat.JPG', info: 'Campaign sent 2 days ago'};


    const sidebarHeader={
        fullName: 'StealthRever',
        shortName: 'SR'
    };
    const menuItems=[
        {name: 'Dashboard', to: '/', icon: 'icons/dashboard.svg', subMenuItems: []},
        {name: 'User Profile', to: '/UserProfile', icon: 'icons/user.svg', subMenuItems: []},
        {name: 'Table List', to: '/TableList', icon: 'icons/tablelist.svg', subMenuItems: []},
        {name: 'Typography', to: '/Typography', icon: 'icons/typography.svg', subMenuItems: []},
        {name: 'Icons', to: '/Icons', icon: 'icons/icons.svg', subMenuItems: []},
        {name: 'Maps', to: '/Maps', icon: 'icons/maps.svg', subMenuItems: []},
        {name: 'Notifications', to: '/Notifications', icon: 'icons/notifications.svg', subMenuItems: []}
    ];

    const font={
        header: 'Syne Mono',
        menu: 'sans-serif'
    }

    return (
        <S.App>

            <Sidebar
                sidebarHeader={sidebarHeader}
                menuItems={menuItems}
                font={font}
            />

            <Mainview
                font={font}
                card1Items={card1Items}
                userBehavior={userBehavior}
                emailStat={emailStat}

            />
        </S.App>
    );
}

export default App;
