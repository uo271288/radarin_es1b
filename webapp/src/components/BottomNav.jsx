import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MapIcon from '@material-ui/icons/Map';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Map from '../routes/Map';
import Friends from '../routes/Friends';
import Me from '../routes/Me';
import Start from '../routes/StartPage';
import Home from '@material-ui/icons/Home'
import Profile from './profile';


const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
});

const BottomNav = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = async (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Switch>
        <Route path="/map">
          <Map />
        </Route>
        <Route path="/friends">
          <Friends />
        </Route>
        <Route path="/me">
          <Profile webId={props.webId} />
        </Route>
        <Route path="/">
          <Start />
        </Route>
      </Switch>
      <BottomNavigation value={value} onChange={handleChange} showLabels className={classes.root} style={{ width: '100%', height: 'auto' }}>
        <BottomNavigationAction component={Link} to="/" label="Inicio" value="" icon={<Home/>}/>
        <BottomNavigationAction component={Link} to="/map" label="Mapa" value="map" icon={<MapIcon />} />
        <BottomNavigationAction component={Link} to="/friends" label="Amigos" value="friends" icon={<EmojiPeopleIcon />} />
        <BottomNavigationAction component={Link} to="/me" label="Perfil" value="profile" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default BottomNav
