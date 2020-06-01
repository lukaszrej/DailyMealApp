import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {CounterReducer} from "./counter/Counter.reducer";

export const rootReducer: any = combineReducers({
    counter: CounterReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));