import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../App';
import Friends from './Friends';
import Map from './Map';

const BasicRouter = () => {
    return (
        <div>
            <Router>
            <div>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/quiz">QuizCard</Link>
                </li>
                <li>
                    <Link to="/results">ResultsCard</Link>
                </li>
                </ul>

                <hr />

                <Route exact path="/" component={App} />
                <Route path="/map" component={Map} />
                <Route path="/friends" component={Friends} />
            </div>
            </Router>
        
        </div>
    )
}

export default BasicRouter
