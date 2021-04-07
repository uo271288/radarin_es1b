import React from 'react'
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";

import Image from '../profile/Image';
class SearchFriends extends React.Component {

    constructor( webId) {
		super();
		this.webID = webId;
		this.state = {
			friendName: ""
		};
		this.handleChange = this.handleChange.bind(this);
	}

    handleChange(event) {
		this.setState({ friendWebID: event.target.value });
	}

    searchFriends() {
		return (
			<div>
				<form>
					<label>
                        Busca un amigo:
						<input
							id="friendID"
							type="text"
							name="friendId"
							onChange={this.handleChange}
						/>

						<Button id="searchFriends" type="button" onClick={(e) => this.handleClick(e)}>
							Buscar
						</Button>
					</label>
				</form>
            </div>
		);
    }

    searchOneFriend(webId, friendsearch) {
        //Metodo que busque 
        //si devuelve algo que no sea null muestra el perfil
        //obteniendo el webId y la inagen de solid
        /**
          */
    }

    mostrarPersona(nombre, AjenawebId,webId,imageSrc){
        return(
            <Grid container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="center">
            <Grid item xs={12} md={2}>
            <Image name={nombre} src={imageSrc} />
            </Grid>
            <Grid item xs={12} md={10}>
            <Paper elevation={1}>
                <Typography variant="h4" component="h3">
                Perfil de {nombre}
                </Typography>
                <Typography variant="caption">
                Perfil de solid : {AjenawebId}
                </Typography>
                <Typography>
                <Button id="addFriends" type="button" onClick={(e) => this.añadir(e)}>
							Añadir
						</Button>
                </Typography>
            </Paper>
            </Grid>
            </Grid>
        );
    }

    async añadir(e) {
        //comprobación de que no es ya tu amigo
            //amadir como amigo a loa base de datos
    }
    getLista(){
        //obtener la lista de todos las personas de la base de datos y que sea tipo 
        //botón  para que cuando se pulse aparece lo de arriba
        //Intentar reutilizar el codigo de friendlist
    }

    async handleClick(e) {
            e.preventDefault();
            if (this.state.friendName !== "") {
                this.searchOneFriend(this.webID, this.state.friendName);            
            }
    }

    render() {
		return (
			<div>
				<h1>BuscarAmigos</h1>
			      {this.searchFriends()}
			    <hr />
                    {this.getLista()}
            </div> 
		);
	}



}
export default SearchFriends;