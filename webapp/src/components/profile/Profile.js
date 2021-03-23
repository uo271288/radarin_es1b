import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import FriendList from '../friendList';
import Image from './Image';
import ButtonFriendship from './ButtonFriendship'
import Paper from "@material-ui/core/Paper";

import styles from "./Profile.module.css";


//default inicializa a default los valores de los parametros si no se los has pasado explicitamente
// Este componente corresponde a la parte de la interfaz grafica del perfil
export default ({ webId, fullName, imageSrc, loggedUser }) =>
  <Grid container
    spacing={2}
    direction="row"
    justify="flex-start"
    alignItems="center">
    <Grid item xs={12} md={2}>
      <Image name={fullName} src={imageSrc} />
    </Grid>
    <Grid item xs={12} md={10}>
      <Paper className={styles.header} elevation={1}>
        <Typography variant="h4" component="h3">
          Perfil de {fullName}
        </Typography>
        <Typography variant="caption">
          Perfil de solid : {webId}
        </Typography>
        
      </Paper>
       
      <ButtonFriendship webId={webId} loggedUser={loggedUser}/>
       
    </Grid>
    <Grid item xs={12} md={12}>
      <Typography variant="h6" component="h4">
        Lista de amigos de {fullName} :
          </Typography>
      {/* Muestra la lista de amigos del usuario accediendo al index.js de /friendlist*/}
      <Paper className={styles.friendList} elevation={1}>
        <FriendList webId={webId} />
      </Paper>
    </Grid>
  </Grid>
