import { ChartProps } from './MealChart.types';
import { getNutrientsChartData } from '../../utils/getNutrientsChartData';
import { getCaloriesChartData } from '../../utils/getCaloriesChartData';
import { PieChart } from '../../components/PieChart';
import { BarChart } from '../../components/BarChart';
import * as S from '../../styles';

export const MealChart = (props: ChartProps) => {
	const { mealTotal, dailyNeed } = props;
	const { calories, fat, carbs, protein } = mealTotal;

	const nutrientsData = getNutrientsChartData(calories, fat, carbs, protein);
	const caloriesData = getCaloriesChartData(calories, dailyNeed);

	return (
		<S.MealChart>
			<PieChart label="Nutrients" chartData={nutrientsData} />
			<BarChart label="Calories" chartData={caloriesData} />
		</S.MealChart>
	);
};
