import React from 'react'
import {
    Login,
} from '../Pages/Auth';
import {
    Dashboard,
    ListView
} from '../Pages/Home';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';
import Header from '../Components/Header';

const Main = () => {
    return (
        <Router history={history} forceRefresh={true}>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/listview" component={ListView} />
            </Switch>
        </Router>
    )
}

export default Main
