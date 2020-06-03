import {allChartActionTypes, CHART} from './Chart.types';

export const initialState = {
    labels: [ 'Calories', 'Fat', 'Carbs', 'Protein' ]
};

export const ChartReducer = (state = initialState, action: allChartActionTypes) => {
    switch (action.type) {
        case CHART:
            return {
                ...state,
                state
            }
        default:
            return state
    }
};