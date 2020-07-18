import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';

interface ChartProps {
	mealTotalCalories?: number;
	mealTotalFat?: number;
	mealTotalCarbs?: number;
	mealTotalProtein?: number;
	dailyNeed: number;
}

const Chart: React.FC<ChartProps> = (props: ChartProps) => {
	const { mealTotalCalories, mealTotalFat, mealTotalCarbs, mealTotalProtein, dailyNeed } = props;

	const nutrientsChartData = {
		labels: [ ' calories', ' fat', ' carbs', ' protein' ],
		datasets: [
			{
				label: 'Nutrients info',
				data: [ mealTotalCalories, mealTotalFat, mealTotalCarbs, mealTotalProtein ],
				backgroundColor: [ '#007EA7', '#80CED7', '#9AD1D4', '#CCDBDC' ]
			}
		]
	};

	const caloriesChartData = {
		labels: [ 'meal calorie intake', 'expected meal calorie intake (5 meals a day)', 'daily calorie need' ],
		datasets: [
			{
				label: ' calories',
				data: [ mealTotalCalories, dailyNeed / 5, dailyNeed ],
				backgroundColor: [ '#fbd1a2', 'red', '#f79256' ]
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
