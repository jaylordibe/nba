import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomeContainer from './containers/home/HomeContainer';
import NotFoundContainer from './containers/not-found/NotFoundContainer';

function AppRoute() {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomeContainer}/>
                    <Route component={NotFoundContainer}/>
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default AppRoute;
