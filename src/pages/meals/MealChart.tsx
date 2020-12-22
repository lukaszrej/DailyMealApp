import React from 'react';
import PieChart from '../../components/PieChart';
import BarChart from '../../components/BarChart';
import { ChartProps } from './MealChart.types';
import { getNutrientsChartData, getCaloriesChartData } from '../../utils/meal-config/chartConfig';

const MealChart = (props: ChartProps) => {
	const { mealTotal, dailyNeed } = props;
	const { calories, fat, carbs, protein } = mealTotal;

	const nutrientsData = getNutrientsChartData(calories, fat, carbs, protein);
	const caloriesData = getCaloriesChartData(calories, dailyNeed);

	return (
		<>
			<PieChart label="Nutrients" chartData={nutrientsData} />
			<BarChart label="Calories" chartData={caloriesData} />
		</>
	);
};

export default MealChart;
