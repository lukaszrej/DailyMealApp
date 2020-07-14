import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { StartReducer } from './start/Start.reducer';
import { UserReducer } from './user/User.reducer';
import { MealReducer } from './meal/Meal.reducer';
import { ProductReducer } from './product/Product.reducer';

export const rootReducer: any = combineReducers({
	start: StartReducer,
	user: UserReducer,
	product: ProductReducer,
	meal: MealReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
