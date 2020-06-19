import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { StartReducer } from './start/Start.reducer';
import { UserReducer } from './user/User.reducer';
import { ChartReducer } from './chart/Chart.reducer';
import { AddProductReducer } from './product/add/add.reducer';
import { FindProductReducer } from './product/find/Find.reducer';

export const rootReducer: any = combineReducers({
	start: StartReducer,
	user: UserReducer,
	find: FindProductReducer,
	chart: ChartReducer,
	product: AddProductReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
