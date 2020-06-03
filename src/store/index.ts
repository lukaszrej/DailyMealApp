import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {CounterReducer} from "./counter/Counter.reducer";
import {ChartReducer} from "./chart/Chart.reducer";
import {ProductReducer} from "./product/Product.reducer";

export const rootReducer: any = combineReducers({
    counter: CounterReducer,
    chart: ChartReducer,
    product: ProductReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));