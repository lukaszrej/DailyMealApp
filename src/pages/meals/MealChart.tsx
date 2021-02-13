import { MealChartProps } from './types';
import { getNutrientsChartData } from '../../utils/getNutrientsChartData';
import { getCaloriesChartData } from '../../utils/getCaloriesChartData';
import { PieChart } from '../../components/PieChart';
import { BarChart } from '../../components/BarChart';
import { MealChart as MealChartContainer } from '../../styles';

export const MealChart = (props: MealChartProps) => {
	const { mealTotal, dailyNeed } = props;
	const { calories, fat, carbs, protein } = mealTotal;

	const nutrientsData = getNutrientsChartData(calories, fat, carbs, protein);
	const caloriesData = getCaloriesChartData(calories, dailyNeed);

	return (
		<MealChartContainer>
			<PieChart label="Nutrients" chartData={nutrientsData} />
			<BarChart label="Calories" chartData={caloriesData} />
		</MealChartContainer>
	);
};
