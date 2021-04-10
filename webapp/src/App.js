import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/AppBar';
import { LocationsContextProvider } from './context/LocationsContext';

import * as qs from 'query-string';
import CssBaseline from '@material-ui/core/CssBaseline';
import Profile from './components/profile';
import NavBar from './components/NavBar';

import ReactNotifications from 'react-browser-notifications';

class App extends React.Component {
  constructor() {
    super()
    /* array para almacenar los usuarios conectados*/ 
    this.state = {
      users: []

    }
    this.showNotifications = this.showNotifications.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }



  
  render() {

    return (

      <div className="App">
        <LocationsContextProvider>
          <CssBaseline />
          <Router>
            {/*Router conjunto de componentes de navegación  */}
            {/* <header className="App-header">  */}
            {/* <AppHeader/> */}
            {/* </header>  */}
            <AppBar />
            <main>
              {/*Route, enlace a la ruta indica que en StartPage en la direcion / se vera el contenido de la clase StartPage  */}
              {/* <Route exact path="/" component={StartPage}/>  */}
              {/* location es la localizacion donde se encuentra la app y sirve para almacenar donde quieras ir, en este caso si queremos ir a /profile le tenemos que pasar lo que quiere mostrar mediante la llamada a la IU Profile*/}
              {/* En webId lo que le pasa en la direccion del perfil de solid */}
              <Route path="/profile/" render={({ location }) => {
                const params = qs.parse(location.search);
                //SaveWebId(params.webId)
                return <Profile webId={params.webId} />
              }} />
            </main>


            <NavBar />
          </Router>
        </LocationsContextProvider>


        <ReactNotifications
          onRef={ref => (this.n = ref)} // Required
          title="Some Title" // Required
          body="This is the body!"
          icon="favicon.ico"
          onClick={event => this.handleClick(event)}
        />

        <button onClick={this.showNotifications}>
          Notify Me!
        </button>



      </div>

    )
  }


  showNotifications() {
    if(this.n.supported()) this.n.show();
  }

  handleClick(event) {
    window.focus()
    this.n.close(event.target.tag);
  }



}

export default App;