import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { ChartProps } from './MealChart.types';
import { getNutrientsChartData, getCaloriesChartData } from './MealChart.utils';

const MealChart: React.FC<ChartProps> = (props: ChartProps) => {
	const { mealTotal, dailyNeed } = props;
	const { calories, fat, carbs, protein } = mealTotal;

	const nutrientsChartData = getNutrientsChartData(calories, fat, carbs, protein);
	const caloriesChartData = getCaloriesChartData(calories, dailyNeed);

	return (
		<div className='chart'>
			<Pie
				data={nutrientsChartData}
				options={{
					title: {
						display: true,
						fontSize: 25,
						text: `Nutrients`
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
						fontSize: 25,
						text: `Calories`
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
