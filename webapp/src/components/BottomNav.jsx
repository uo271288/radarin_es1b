import React from 'react'
import { ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MapIcon from '@material-ui/icons/Map';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Map from '../routes/Map';
import Friends from '../routes/Friends';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = async (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/friends">
            <Friends />
          </Route>
        </Switch>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root} style={{ width: 'auto', height: 'auto' }}>
        <BottomNavigationAction component={Link} to="/map" label="Mapa" value="map" icon={<MapIcon />} />
        <BottomNavigationAction component={Link} to="/friends" label="Amigos" value="friends" icon={<EmojiPeopleIcon />} />
        <BottomNavigationAction component={Link} label="Perfil" value="profile" icon={<AccountCircleIcon />} />
      </BottomNavigation>
      </Router>
    </div>
  );
};

export default BottomNav
