import React from 'react';
import { Pie } from 'react-chartjs-2';

const Chart: React.FC = () => {
	const chartData = {
		labels: [ 'calories', 'fat', 'carbs', 'protein' ],
		datasets: [
			{
				label: 'Meal nutrients',
				data: [ 617594, 181045, 153060, 106519 ],
				backgroundColor: [ '#007EA7', '#80CED7', '#9AD1D4', '#CCDBDC' ]
			}
		]
	};

	return (
		<div className='chart'>
			<Pie
				data={chartData}
				options={{
					title: {
						display: true,
						fontSize: 25
					},
					legend: {
						display: true,
						position: 'right'
					}
				}}
			/>
		</div>
	);
};

export default Chart;
