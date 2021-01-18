export interface ChartConfig {
	labels: string[];
	datasets: Array<{
		label: string;
		data: Array<number | undefined>;
		backgroundColor: string[];
	}>;
}
