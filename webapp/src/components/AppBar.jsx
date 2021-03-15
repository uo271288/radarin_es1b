import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Login from './login';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    flexGrow: 1
  },

  title: {
    flexGrow: 1
  }
}));

export default function RadarinAppBar() {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title} align="left">
            {/* Typography da formato al texto*/}
            <Typography align="left" className={classes.title} variant="h5" color="inherit" noWrap> Radarin </Typography>
          </div>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <Login />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
}