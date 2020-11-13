import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Mainview/Home/Home';
import Userprofile from './components/Mainview/Userprofile/Userprofile';

const Routes = props=>{
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
        <Switch>
            <Route exact path='/' component={() => <Home
                card1Items={card1Items}
                userBehavior={userBehavior}
                emailStat={emailStat}
                font={font} />}
            />
            <Route path='/Userprofile' component={()=><Userprofile font={font}/>} />
        </Switch>
    )
}

export default Routes;
