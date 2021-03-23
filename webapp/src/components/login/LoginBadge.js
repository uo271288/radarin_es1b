import React from "react";
import {Link} from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';

import Image from '../profile/Image';

import styles from './Login.module.css';
import {toProfile} from "../../routing";

//Cuando se activa, Tooltips muestran una etiqueta de texto que identifica un elemento, como una descripción de su función.ToolTip etiqueta le pasa la url o ...
//Los Chips le permiten a los usuarios introducir información, hacer selecciones, filtrar contenido, o activar acciones.
export default ({fullName, imageSrc, webId}) =>
  <Tooltip title={webId || '...'}>
    <Chip
        className={styles.badge} //añade un margen a la etiqueta 
        label={fullName ? `${fullName}` : 'Conectado'} //mensaje del boton de acceso al perfil una vez 
        avatar={<Image name={fullName || webId} src={imageSrc}/>} //imagen del avatar del boton
        component={Link} to={toProfile(webId)} clickable // indica que al pulsar en el boton nos redirigue a el perfil del usuario
    />
  </Tooltip>


