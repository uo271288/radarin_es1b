import React  from 'react';
import './App.css';
import logo from './logo.svg';
import Welcome from './components/Welcome';
import EmailForm from "./components/EmailForm";
import UserList from "./components/UserList";
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomNav from './components/BottomNav';
import AppBar from './components/AppBar';
import { LocationsContextProvider } from './context/LocationsContext';

class App extends React.Component{
  constructor(){
    super()
    this.state = {users:[]}
  }

  refreshUsers(users){
    this.setState({users:users})
  }



  render(){
    return(
      <LocationsContextProvider>
        <div className="App">
          <AppBar />
          <div className="App-content">

          
          </div><BottomNav />

        </div>
      </LocationsContextProvider>
    )
  }




}

export default App;