import React from 'react';
import ResetPass from './ResetPass';

const UserProfile=props=>{

    const {
        font={
            header: '',
            menu: ''
        },
    } =props;

    return (
        <h1>
            <ResetPass font={font}/>
        </h1>
    );
}

export default UserProfile;