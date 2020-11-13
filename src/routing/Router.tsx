import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Container from '../components/Container';
import PrivateRoute from '../routing/PrivateRoute';
import StartForm from '../components/StartForm/StartForm';
import HomePage from '../pages/Home';
import MealsPage from '../pages/Meals';
import NoMatchPage from '../pages/NoMatch';

export default () => {
    return (
        <Router>
            <Container>
                <Switch>
                    <Redirect exact from='/' to='/home' />
                    <Redirect exact from='/.' to='/home' />
                    <Redirect exact from='/DailyMealApp/' to='/home' />
                    <Route path='/start' component={StartForm} />
                    <PrivateRoute path='/home' component={HomePage} />
                    <PrivateRoute path='/meals' component={MealsPage} />
                    <Route path='*' component={NoMatchPage} />
                </Switch>
            </Container>
        </Router>
    )
};

