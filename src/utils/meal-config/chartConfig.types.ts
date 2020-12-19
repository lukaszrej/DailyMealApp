export interface ChartData {
	labels: string[];
	datasets: Array<{
		label: string;
		data: Array<number | undefined>;
		backgroundColor: string[];
	}
	>
}
