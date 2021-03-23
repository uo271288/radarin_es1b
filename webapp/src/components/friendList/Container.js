import React from 'react';

import FriendList from './FriendList';
import CircularProgress from "@material-ui/core/CircularProgress";

//CircularProgress hace que se mantenga cargando hasta que cargen los datos

const Container = ({pending, friends}) => {
    return (
        pending ? <CircularProgress/> :<FriendList friends={friends}/>
    )
}

export default Container
