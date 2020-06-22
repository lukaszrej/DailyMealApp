import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { StartReducer } from './start/Start.reducer';
import { UserReducer } from './user/User.reducer';
import { ChartReducer } from './chart/Chart.reducer';
import { ProductReducer } from './product/Product.reducer';

export const rootReducer: any = combineReducers({
	start: StartReducer,
	user: UserReducer,
	product: ProductReducer,
	chart: ChartReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
