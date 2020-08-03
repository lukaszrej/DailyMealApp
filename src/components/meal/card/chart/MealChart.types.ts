export interface MealTotal {
	calories?: number;
	fat?: number;
	carbs?: number;
	protein?: number;
}

export interface ChartProps {
	mealTotal: MealTotal;
	dailyNeed: number;
}
