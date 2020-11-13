import React from 'react';
import Card1 from './Cards/Card1';
import Card2 from './Cards/Card2';

const Home=props=>{
    const {
        font={
            header: '',
            menu: ''
        },

        card1Items=[],
        userBehavior={},
        emailStat={}
    } =props;

    return (
        <h1>
            <Card1 font={font} card1Items={card1Items} />
            <Card2
                font={font}
                userBehavior={userBehavior}
                emailStat={emailStat}
            />
        </h1>
    )
}

export default Home;