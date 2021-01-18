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
