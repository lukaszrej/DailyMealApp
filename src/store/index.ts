import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Reducer } from 'redux';
import { LoginReducer } from './login/Login.reducer';
import { UserReducer } from './user/User.reducer';
import { MealReducer } from './meal/Meal.reducer';
import { ProductReducer } from './product/Product.reducer';

export const rootReducer: Reducer = combineReducers({
	login: LoginReducer,
	user: UserReducer,
	product: ProductReducer,
	meal: MealReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
