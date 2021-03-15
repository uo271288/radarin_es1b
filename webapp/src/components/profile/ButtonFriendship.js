import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';
import ButtonAddOrDelete from './ButtonAddOrDelete';



export default ({webId,loggedUser}) => webId!=loggedUser ?
    <ButtonAddOrDelete webId={webId} loggedUser={loggedUser} /> : null