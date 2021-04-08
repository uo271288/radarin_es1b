import React from "react";

import FriendListContainer from  '../../friendList/Container'

import { evaluateList } from '@solid/react';

//EvaluateList sirve para construir listas de cosas, en este caso la lista de amigos
const FriendListEvaluation = evaluateList('friends', FriendListContainer);

export default ({list}) => {
    return <FriendListEvaluation friends={list}/>;
};