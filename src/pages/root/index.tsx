import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core/';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { store } from '../../store';
import { routes } from '../../routing/routes';
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
						<Redirect exact from='/' to={routes.home} />
						<Redirect exact from='/.' to={routes.home} />
						<Redirect exact from='/DailyMealApp/' to={routes.home} />
						<Route path={routes.login} component={Login} />
						<PrivateRoute path={routes.home} component={Home} />
						<PrivateRoute path={routes.meals} component={Meals} />
						<Route path='*' component={NoMatch} />
					</Switch>
				</Container>
			</Router>
		</Provider>
	);
};
