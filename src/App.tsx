import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { store } from './store';
import CssBaseline from '@material-ui/core/CssBaseline';

import Router from './utils/history/history';
import Start from './components/start/Start';
import Nav from './components/navigation/Nav';
import NoMatchPage from './pages/noMatch/NoMatchPage';
import HomePage from './pages/home/HomePage';
import UserPage from './pages/user/UserPage';
import MealPage from './pages/meals/MealPage';
import PrivateRoute from './routing/PrivateRoute';

const App: React.FC = (): JSX.Element => {
	return (
		<Provider store={store}>
			<CssBaseline />
			<Router>
				<Nav>
					<Switch>
						<Redirect exact from='/' to='/home' />
						<Route path='/start' component={Start} />
						<PrivateRoute path='/home' component={HomePage} />
						<PrivateRoute path='/user' component={UserPage} />
						<PrivateRoute path='/meals' component={MealPage} />
						<Route path='*' component={NoMatchPage} />
					</Switch>
				</Nav>
			</Router>
		</Provider>
	);
};

export default App;
