import React from 'react'
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import { getUsers } from '../../api/api';
import Image from '../profile/Image';
import List from './list'
class SearchFriends extends React.Component {

    constructor( webId) {
		super();
		this.webID = webId;
        this.friends=getUsers();
		this.state = {
			searchName: ""
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

    

    getLista(){
        <List friends={this.friends} />
    }

    async handleClick(e) {
            e.preventDefault();
            if (this.state.friendName !== "") {
                this.searchOneFriend(this.webID, this.state.searchName);            
            }
            else{
                this.friends=getUsers();
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