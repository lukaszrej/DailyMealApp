import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Router from './routing/Router';

export default () => {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	);
};
