import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { store } from '../../store';
import { CssBaseline } from '@material-ui/core/';
import { PrivateRoute } from '../../routing/PrivateRoute';
import { Container } from './Container';
import { Login } from '../login';
import { Home } from '../home';
import { Meals } from '../meals';
import { NoMatch } from '../noMatch';

export const Root = () => {
	return (
		<Provider store={store}>
			<Router>
				<CssBaseline />
				<Container>
					<Switch>
						<Redirect exact from='/' to='/home' />
						<Redirect exact from='/.' to='/home' />
						<Redirect exact from='/DailyMealApp/' to='/home' />
						<Route path='/login' component={Login} />
						<PrivateRoute path='/home' component={Home} />
						<PrivateRoute path='/meals' component={Meals} />
						<Route path='*' component={NoMatch} />
					</Switch>
				</Container>
			</Router>
		</Provider>
	);
};
