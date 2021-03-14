import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomNav from './components/BottomNav';
import AppBar from './components/AppBar';
import { LocationsContextProvider } from './context/LocationsContext';
import UpdatePositionButton from './components/UpdatePositionButton';

import * as qs from 'query-string';
import CssBaseline from '@material-ui/core/CssBaseline';
import Profile from './components/profile';
import { StartPage } from './routing';



class App extends React.Component {
  constructor() {
    super()
    {/* array para almacenar los usuarios conectados*/ }
    this.state = {
      users: []

    }
  }
  refreshUsers(users) {
    {/* refresca los users al registrar uno nuevo*/ }
    this.setState({ users: users })
  };
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
                return <Profile webId={params.webId} />
              }} />
            </main>


            <BottomNav />
          </Router>
        </LocationsContextProvider>
      </div>

    )
  }




}

export default App;