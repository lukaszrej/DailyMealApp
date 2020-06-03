import {allCounterActionTypes, COUNTER} from './Counter.types';

export const initialState = {
    mealCounter: 2
};

export const CounterReducer = (state = initialState, action: allCounterActionTypes) => {
    switch (action.type) {
        case COUNTER:
            return {
                ...state,
                mealCounter: state.mealCounter + 1
            }
        default:
            return state
    }
};