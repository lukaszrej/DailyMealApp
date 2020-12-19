import React from 'react';
import { Pie } from 'react-chartjs-2';
import { PieChartProps } from './index.types';

const PieChart = (props: PieChartProps) => {
	const { label, chartData } = props;

	return (
		<div className='chart'>
			<Pie
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
					}
				}}
			/>
		</div>
	);
};

export default PieChart;
