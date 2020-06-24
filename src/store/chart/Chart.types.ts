export const CHART = 'CHART';
export interface ChartAction {
	type: typeof CHART;
	chart?: any;
}

export type allChartActionTypes = ChartAction;
