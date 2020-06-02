import React from 'react';
import {Provider} from "react-redux";
import {Switch, Route, Redirect} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import {store} from './store';
import Router from "./utils/history/history";
import Nav from "./components/navigation/Nav";
import NoMatch from "./pages/noMatch/NoMatch";
import Dashboard from "./pages/dashboard/Dashboard";
import User from "./pages/user/User";
import UserMeals from "./pages/meals/Meals";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <CssBaseline/>
            <Router>
                <Nav>
                    <Switch>
                        <Redirect exact from="/" to="/dashboard"/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/user" component={User}/>
                        <Route path="/meals" component={UserMeals}/>
                        <Route path="*" component={NoMatch}/>
                    </Switch>
                </Nav>
            </Router>
        </Provider>
    );
};

export default App;
