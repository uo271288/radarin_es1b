import React from 'react';

import { evaluateList } from '@solid/react';

import FriendListContainer from './Container';

//EvaluateList sirve para construir listas de cosas, en este caso la lista de amigos
const FriendListEvaluation = evaluateList('friends', FriendListContainer);

export default ({webId}) => {
    return <FriendListEvaluation friends={`[${webId}].knows`}/>;
};