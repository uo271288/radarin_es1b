import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomNav from './components/BottomNav';
//import AppBar  from './components/AppBar';
import {LocationsContextProvider } from './context/LocationsContext';
import UpdatePositionButton from './components/UpdatePositionButton';

import * as qs from 'query-string';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Login from './components/login';
import Profile from './components/profile';
import {StartPage} from './routing';


 const AppHeader = withStyles({
   root: {
     flexGrow: 1,
   },
   grow: {
     flexGrow: 1,
   },
   login: {
     flexGrow: 1
   }
 })(({classes}) => 
 <header className={classes.root}>
   {/*-AppBar muestra información y acciones relacionadas con la pantalla actual , el contenedor de la barra ("nav")*/}
   <AppBar position="static" color="default">
     {/* Toolbar es la barra, donde se incluyen los componentes ("botones") */}
     <Toolbar>
       <div className={classes.grow}>
         <Button
             component={Link} to={"/"}>
           {/* Typography da formato al texto*/}
           <Typography className={classes.grow} variant="h2" component="h2" color="inherit" align= "center"> RADARIN </Typography>
         </Button>
       </div>
       {/* Llama a login  */}
       <Login/>
     </Toolbar>
   </AppBar>
 </header>);

class App extends React.Component{
  constructor(){
    super()
    {/* array para almacenar los usuarios conectados*/}
    this.state = {
      users:[] 
      
    }
  }
  refreshUsers(users){
    {/* refresca los users al registrar uno nuevo*/}
    this.setState({users:users})
  };
  render(){

    return(

      <div className="App">
      {/* <AppBar /> */}
	  <CssBaseline />
	  <Router>
      {/*Router conjunto de componentes de navegación  */}
        <header className="App-header"> 
           <AppHeader/>
         </header> 
         <LocationsContextProvider>
        <BottomNav />
        </LocationsContextProvider>
		    <main>
              {/*Route, enlace a la ruta indica que en StartPage en la direcion / se vera el contenido de la clase StartPage  */}
              {/* <Route exact path="/" component={StartPage}/> */}
              {/* location es la localizacion donde se encuentra la app y sirve para almacenar donde quieras ir, en este caso si queremos ir a /profile le tenemos que pasar lo que quiere mostrar mediante la llamada a la IU Profile*/}
              {/* En webId lo que le pasa en la direccion del perfil de solid */}
              <Route path="/profile/" render={({location}) => {
                const params = qs.parse(location.search);
                return <Profile webId={params.webId}/>
              }}/>
        </main>
        
        
        
    {/*<LocationsContextProvider>
          <AppBar />
          <UpdatePositionButton />
          <div className="App-content">

          
          </div><BottomNav />

        </div>
      </LocationsContextProvider>*/}
	  </Router>
      </div>

    )
  }




}

export default App;