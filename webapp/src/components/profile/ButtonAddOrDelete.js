import React, { useState, useEffect } from 'react';


import { Button } from '@material-ui/core';


import solid from '@solid/query-ldflex';

import { useLDflexValue, useLDflexList } from '@solid/react';


function addFriend() {

}

function removeFriend() {

}

async function checkFriend(loggedUser, webId, friends) {
    console.log(friends)
    for(const friendWebID of friends){
        //console.log("Analysed: " +friendWebID +" and "+webId);
        if(friendWebID==webId){

            //console.log("Returned true: checkFriend")
            return true;
        }
    }


    //console.log("Returned false: checkFriend")

    return false;
}

async function getFriends(friends) {
    //await new Promise(r => setTimeout(r, 2000));  
    const friendsValue = await friends;
    return friendsValue;
}


export default function ButtonAddOrDelete(props) {
  

    const [userFriendsList, setUserFriendsList] = useState([]);

    const [webId] = useState(props.webId);
    const [loggedUser] = useState(props.loggedUser);


    const auxFriendsList = [];

    getFriends(useLDflexList("[" + loggedUser + "].friends")).then((friendsList) => { setUserFriendsList(friendsList) });
    
    
    userFriendsList.forEach(element => auxFriendsList.push(element.valueOf()));


    return  (
        ! checkFriend(loggedUser, webId, auxFriendsList) ?
            (<Button id="addFriend" onClick={addFriend}>Seguir</Button>)
            : (<Button id="remove Friend" onClick={removeFriend} >Dejar de seguir</Button>)
    )


}







