import React, { useEffect, useState } from 'react';

import { useLDflexValue, useLDflexList } from '@solid/react';
import { Component } from 'react';

import { Button, ListItemSecondaryAction } from '@material-ui/core';

import { Value, Image, List } from '@solid/react';



function addFriend   ()  {
        
}

function removeFriend   ()  {
    
}

/* async function getFriends(webId){
    const friends= await solid.data[webId].friends;
    return friends;
}
 */

async function checkFriend(loggedUser , webId, friends)  {

    
    console.log("Logged: " + loggedUser);
    //console.log(typeof(friends))
    console.log("Lista de amigos: ");
    console.log(friends);  
    


    console.log("------------")

    
    return false;
}

async function getFriends(friends){ 
    const friendsValue=  await friends;
    return friendsValue;
}


export default  function ButtonAddOrDelete (props) {


    const [webId, setWebID] = useState( props.webId );
    const [loggedUser, setLoggedUser] = useState( props.loggedUser );

    
    const friends =   getFriends(useLDflexList("["+webId+"]"+'.friends') ).then((item)=> {return item;});
    

    
    return (
        !checkFriend(loggedUser, webId, friends )?
            <Button id="addFriend" onClick={addFriend}>Seguir</Button> 
            : <Button id="remove Friend" onClick={removeFriend} >Dejar de seguir</Button>
    )

    
}







