import React, {Component} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import List from "@material-ui/core/List";

import Friend from "../../friendsList/friend";
import Typography from "@material-ui/core/Typography";

export default class FriendList extends Component {

  static defaultProps = {
    friends: [], // Lista de todas los amigos que se mostrarán.
    height: 300,
    showInitially: 10, // Número de amigos para mostrar inicialmente
    fetchCount: 5 // número de amigos para buscar a la vez, al desplazarse por la lista
  };

  state = {
    items: this.props.friends.slice (0, this.props.showInitially), //crea un array de amigos de 0 a el valor de showInitially
    hasMore: this.props.friends.length > this.props.showInitially // Indica que tenemos mas amigos de los que se pueden monstrar inicialmente
  };

  //funcion que aumenta la lista de amigos para la gente popular
  fetchMoreData = () => {
    const allFriends = this.props.friends; //almacena en una constante la lista de amigos
    const shownFriends = allFriends.slice(0, this.state.items.length + this.props.fetchCount); //un array con aun mas amigos
    this.setState({
      items: shownFriends, //lista de amigos mas larga
      hasMore: shownFriends.length < allFriends.length //amigos de mas incluidos
    });
  };

  render() {
    return (
        <List dense>
          {/* Scroll con la lista de amigos  */}
          <InfiniteScroll
              dataLength={this.state.items.length} //tamaño de la lista de amigos
              next={this.fetchMoreData} //aumenta la lista 
              hasMore={this.state.hasMore} //amigos de mas incluidos
              loader={<h4>Cargando...</h4>} //loader
              height={this.props.height}
          >
            {/* Parte mas importante, accede a los amigos de solid y los añade al array de amigos */}
            {this.state.items.map((webId) => (
                <Friend key={webId.toString()} webId={webId}/>
            ))}
          </InfiniteScroll>
          {/* Si tiene mas amigos indica un mensaje si no , el otro */}
          <Typography variant="caption" style={{margin: 10}}>
            {this.state.items.length} / {this.props.friends.length} shown. {this.state.hasMore ? 'Desplazate para abajo para cargar mas amigos.' : "Estos son todos tus amigos."} 
          </Typography>
        </List>
    );
  }
}