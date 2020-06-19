// action constants
export const CHART = 'CHART';

// types
export interface ChartAction {
	type: typeof CHART;
	chart?: any; // just for now
}

export type allChartActionTypes = ChartAction;
