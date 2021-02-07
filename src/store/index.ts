import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AlertReducer } from './alert/Alert.reducer';
import { LoginReducer } from './login/Login.reducer';
import { UserReducer } from './user/User.reducer';
import { ProductReducer } from './product/Product.reducer';
import { MealReducer } from './meal/Meal.reducer';

export const rootReducer = combineReducers({
    alert: AlertReducer,
	login: LoginReducer,
	user: UserReducer,
	product: ProductReducer,
	meal: MealReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
