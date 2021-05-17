import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
    Home,
} from '../pages';

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    )
}

export default Routes;