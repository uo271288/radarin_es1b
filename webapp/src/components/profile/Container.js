import React, {Component} from 'react';

import Profile from './Profile';
import styles from "./Profile.module.css";

const string = value => value ? value.toString() : undefined;

export default class ProfileContainer extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return !nextProps.pending; // si no esta cargando algo sale del metodo, es decir, es un proceso de carga
  }

  render() {
    //si se encuentra en proceso de carga no muestra nada, si no esta cargando muestra el profile al que le pasa como parametros el webId el nombre y la imagen
    return <div className={styles.profile}>
      {this.props.pending ? null : 
      <Profile
          webId={this.props.webId}
          fullName={string(this.props.fullName)}
          imageSrc={string(this.props.imageSrc)}
          loggedUser={string(this.props.loggedUserWebID)}
      />}
    </div>
  }
}