import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Map from '../routes/Map';
import Friends from '../routes/Friends';
import Me from '../routes/Me';

const MainRouter = () => {
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
            <Route path="/me">
                <Me />
            </Route>
            </Switch>
        </Router>
        </div>
    )
}

export default MainRouter
