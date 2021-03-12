import React from 'react';
import Button from "@material-ui/core/Button";

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {Link} from "react-router-dom";

import toProfile from "./toProfile";

import { makeStyles } from '@material-ui/core/styles';

//Parte de creación de la interfaz grafica de la página principal , emplea distintos Layaouts

const useStyles = makeStyles(() => ({
  media: {
    objectFit: 'contain'
  },
}));

export default () => {
  const classes = useStyles();
  return  <Grid container spacing={3} alignItems="center" justify="center" direction="column">
    <Grid container item xs={12} sm={9} md={6} spacing={0} justify="center"
          alignItems="stretch"
          direction="column">
		  {/*<Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            View & browse Solid profiles
          </Typography>
          <Typography component="p">
            This app allows to view and browse through Solid WebID Profiles.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
              size="small" color="primary"
              component={Link}
              variant={"contained"}
              to={toProfile('https://angelo.veltens.org/profile/card#me')}>
            Show example profile
          </Button>
        </CardActions>
		  </Card>*/}
    </Grid>
    <Grid container item xs={12} sm={9} md={6} spacing={0} justify="center"
          alignItems="stretch"
          direction="column">
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Don't have a profile, yet?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" component="a" href="https://solidcommunity.net/register">
            Get a profile
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid container item xs={12} sm={9} md={6} spacing={0} justify="center"
          alignItems="stretch"
          direction="column">
      <Card>
        <CardMedia
            component="img"
            height="70"
            className={classes.media}
            alt="Solid Logo"
            image="https://solid.mit.edu/assets/img/solid-logo.svg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            What is Solid?
          </Typography>
          <Typography component="p">
            Solid is an exciting new project led by Prof. Tim Berners-Lee,
            inventor of the World Wide Web, taking place at MIT. The project
            aims to radically change the way Web applications work today,
            resulting in true data ownership as well as improved privacy.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" component="a" href="https://solid.mit.edu/">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>;
}

