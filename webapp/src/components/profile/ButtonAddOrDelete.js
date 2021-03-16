import React, { useState } from 'react';

import { useLDflexList } from '@solid/react';

import { Button } from '@material-ui/core';




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


    const [webId] = useState( props.webId );
    const [loggedUser] = useState( props.loggedUser );

    
    const friends =   getFriends(useLDflexList("["+webId+"]"+'.friends') ).then((item)=> {return item;});
    

    
    return (
        !checkFriend(loggedUser, webId, friends )?
            <Button id="addFriend" onClick={addFriend}>Seguir</Button> 
            : <Button id="remove Friend" onClick={removeFriend} >Dejar de seguir</Button>
    )

    
}







