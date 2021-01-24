import { Bar } from 'react-chartjs-2';
import { Props } from './index.types';

export const BarChart = (props: Props) => {
	const { label, chartData } = props;

	return (
		<div className='chart'>
			<Bar
				data={chartData}
				options={{
					title: {
						display: true,
						fontSize: 25,
						text: label
					},
					legend: {
						display: false
					},
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true
								}
							}
						]
					}
				}}
			/>
		</div>
	);
};
