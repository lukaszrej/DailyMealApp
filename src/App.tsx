import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { store } from './store';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router from './utils/history/history';
import StartApp from './components/start/StartApp';
import Container from './components/container/Container';
import NoMatchPage from './pages/noMatch/NoMatchPage';
import HomePage from './pages/home/HomePage';
import MealsPage from './pages/meals/MealsPage';
import PrivateRoute from './routing/PrivateRoute';

const App: React.FC = (): JSX.Element => {
	return (
		<Provider store={store}>
			<CssBaseline />
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
		</Provider>
	);
};

export default App;
