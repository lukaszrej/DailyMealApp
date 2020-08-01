import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { ChartProps } from './MealChart.types';

const MealChart: React.FC<ChartProps> = (props: ChartProps) => {
	const { mealTotal, dailyNeed, mealIndex } = props;
	const { calories, fat, carbs, protein } = mealTotal;

	const nutrientsChartData = {
		labels: [ ' Calories', ' Fat (g)', ' Carbs (g)', ' Protein (g)' ],
		datasets: [
			{
				label: 'Nutrients info',
				data: [ calories, fat, carbs, protein ],
				backgroundColor: [ '#007EA7', '#80CED7', '#9AD1D4', '#CCDBDC' ]
			}
		]
	};

	const caloriesChartData = {
		labels: [ 'Meal calorie intake', '(expected) Meal calorie intake (5 meals a day)', 'Daily calorie need' ],
		datasets: [
			{
				label: ' Calories',
				data: [ calories, dailyNeed / 5, dailyNeed ],
				backgroundColor: [ '#da627d', '#a53860', '#450920' ]
			}
		]
	};

	return (
		<div className='chart'>
			<Pie
				data={nutrientsChartData}
				options={{
					title: {
						display: true,
						fontSize: 25,
						text: `Meal ${mealIndex}`
					},
					legend: {
						display: true,
						position: 'bottom'
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

export default MealChart;
