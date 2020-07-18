import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';

interface ChartProps {
	totalCalories?: number;
	totalFat?: number;
	totalCarbs?: number;
	totalProtein?: number;
}

const Chart: React.FC<ChartProps> = (props: ChartProps) => {
	const { totalCalories, totalFat, totalCarbs, totalProtein } = props;

	const nutrientsChartData = {
		labels: [ 'calories', 'fat', 'carbs', 'protein' ],
		datasets: [
			{
				label: 'Nutrients info',
				data: [ totalCalories, totalFat, totalCarbs, totalProtein ],
				backgroundColor: [ '#007EA7', '#80CED7', '#9AD1D4', '#CCDBDC' ]
			}
		]
	};

	const caloriesChartData = {
		labels: [ 'meal intake', 'daily need' ],
		datasets: [
			{
				label: 'Calories',
				data: [ 1200, 1600 ],
				backgroundColor: [ '#fbd1a2', '#f79256' ]
			}
		]
	};

	return (
		<div className='chart'>
			<Pie
				data={nutrientsChartData}
				options={{
					title: {
						display: false,
						fontSize: 25
					},
					legend: {
						display: false,
						position: 'right'
					}
				}}
			/>
			<Bar
				data={caloriesChartData}
				options={{
					title: {
						display: true,
						fontSize: 25
					},
					legend: {
						display: false,
						position: 'right'
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

export default Chart;
