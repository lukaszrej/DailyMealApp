export const getNutrientsChartData = (
	calories: number | undefined,
	fat: number | undefined,
	carbs: number | undefined,
	protein: number | undefined
) => {
	return {
		labels: [ ' Calories', ' Fat (g)', ' Carbs (g)', ' Protein (g)' ],
		datasets: [
			{
				label: 'Nutrients info',
				data: [ calories, fat, carbs, protein ],
				backgroundColor: [ '#007EA7', '#80CED7', '#9AD1D4', '#CCDBDC' ]
			}
		]
	};
};

export const getCaloriesChartData = (calories: number | undefined, dailyNeed: number) => {
	return {
		labels: [ 'Meal calorie intake', '(expected) Meal calorie intake (5 meals a day)', 'Daily calorie need' ],
		datasets: [
			{
				label: ' Calories',
				data: [ calories, dailyNeed / 5, dailyNeed ],
				backgroundColor: [ '#da627d', '#a53860', '#450920' ]
			}
		]
	};
};
