import React from 'react';
import {Provider} from "react-redux";
import {Switch, Route, Redirect} from "react-router-dom";
import {store} from './store';
import CssBaseline from '@material-ui/core/CssBaseline';

import Router from "./utils/history/history";
import Start from './components/start/Start'
import Nav from "./components/navigation/Nav";
import NoMatch from "./pages/noMatch/NoMatch";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import UserMeals from "./pages/meals/Meals";
import PrivateRoute from "./routing/PrivateRoute";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <CssBaseline/>
            <Router>
                <Nav>
                    <Switch>
                        <Redirect exact from="/" to="/start"/>
                        <Route path="/start" component={Start}/>
                        <PrivateRoute path="/home" component={Home}/>
                        <PrivateRoute path="/user" component={User}/>
                        <PrivateRoute path="/meals" component={UserMeals}/>
                        <Route path="*" component={NoMatch}/>
                    </Switch>
                </Nav>
            </Router>
        </Provider>
    );
};

export default App;
