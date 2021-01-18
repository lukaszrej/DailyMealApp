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
