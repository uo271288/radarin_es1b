import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomNav from './components/BottomNav';
import AppBar from './components/AppBar';
import {LocationsContextProvider } from './context/LocationsContext';
import UpdatePositionButton from './components/UpdatePositionButton';

class App extends React.Component{
  constructor(){
    super()
    this.state = {users:[]}
  }

  refreshUsers(users){
    this.setState({users:users})
  };


  

  render(){

    return(
      <LocationsContextProvider>
        <div className="App">
          <AppBar />
          <UpdatePositionButton />
          <div className="App-content">

          
          </div><BottomNav />

        </div>
      </LocationsContextProvider>
    )
  }




}

export default App;