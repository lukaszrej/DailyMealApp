import React from 'react';
import { Bar } from 'react-chartjs-2';
import { BarChartProps } from './index.types';

const BarChart = (props: BarChartProps) => {
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
						display: true,
						position: 'bottom'
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

export default BarChart;
