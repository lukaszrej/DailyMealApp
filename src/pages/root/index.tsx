import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { store } from '../../store';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from './Container';
import PrivateRoute from '../../routing/PrivateRoute';
import LoginPage from '../login';
import HomePage from '../home';
import MealsPage from '../meals';
import NoMatchPage from '../noMatch';

export default () => {
	return (
		<Provider store={store}>
			<Router>
				<CssBaseline />
				<Container>
					<Switch>
						<Redirect exact from='/' to='/home' />
						<Redirect exact from='/.' to='/home' />
						<Redirect exact from='/DailyMealApp/' to='/home' />
						<Route path='/login' component={LoginPage} />
						<PrivateRoute path='/home' component={HomePage} />
						<PrivateRoute path='/meals' component={MealsPage} />
						<Route path='*' component={NoMatchPage} />
					</Switch>
				</Container>
			</Router>
		</Provider>
	);
};
