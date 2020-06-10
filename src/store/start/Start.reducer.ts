import {allStartActionTypes, START} from './Start.types';

export const initialState = {
    started: false
};

export const StartReducer = (state = initialState, action: allStartActionTypes) => {
    switch (action.type) {
        case START:
            return {
                ...state,
                started: !action.started
            }
        default:
            return state
    }
};