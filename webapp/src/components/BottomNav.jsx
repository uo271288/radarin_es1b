import React from 'react'
import { ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MapIcon from '@material-ui/icons/Map';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
 

import theme from "../theme";

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
        <BottomNavigation value={value} onChange={handleChange} className={classes.root} style={{width: 'auto', height: 'auto'}}>
            <BottomNavigationAction label="Mapa" value="map" icon={<MapIcon />} />
            <BottomNavigationAction label="Amigos" value="friends" icon={<EmojiPeopleIcon />} />
            <BottomNavigationAction label="Perfil" value="profile" icon={<AccountCircleIcon />} />
        </BottomNavigation>
    )
}

export default BottomNav
