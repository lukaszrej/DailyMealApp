import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Container from './../components/container/Container';
import PrivateRoute from '../routing/PrivateRoute';
import StartApp from '../components/start/StartApp';
import HomePage from './../pages/home/HomePage';
import MealsPage from './../pages/meals/MealsPage';
import NoMatchPage from './../pages/noMatch/NoMatchPage';

export default () => {
    return (
        <Router>
            <Container>
                <Switch>
                    <Redirect exact from='/' to='/home' />
                    <Redirect exact from='/.' to='/home' />
                    <Redirect exact from='/DailyMealApp/' to='/home' />
                    <Route path='/start' component={StartApp} />
                    <PrivateRoute path='/home' component={HomePage} />
                    <PrivateRoute path='/meals' component={MealsPage} />
                    <Route path='*' component={NoMatchPage} />
                </Switch>
            </Container>
        </Router>
    )
};

