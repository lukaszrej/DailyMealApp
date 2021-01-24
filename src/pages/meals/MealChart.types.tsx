interface MealTotal {
	calories?: number;
	fat?: number;
	carbs?: number;
	protein?: number;
}

export interface Props {
	mealTotal: MealTotal;
	dailyNeed: number;
}
