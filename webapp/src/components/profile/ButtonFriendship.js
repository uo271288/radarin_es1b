import React from 'react';

import ButtonAddOrDelete from './ButtonAddOrDelete';



export default ({webId,loggedUser}) => webId!=loggedUser ?
    <ButtonAddOrDelete webId={webId} loggedUser={loggedUser} /> : null