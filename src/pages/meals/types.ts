import { ChipProps } from '@material-ui/core/Chip';

interface MealTotal {
	calories?: number;
	fat?: number;
	carbs?: number;
	protein?: number;
}

export interface MealChartProps {
	mealTotal: MealTotal;
	dailyNeed: number;
}

export interface MealDeleteProps {
	handleClose: () => void;
	isModalOpen: boolean;
	onMealDelete: () => void;
}

export interface ProductTagProps extends ChipProps {
	label: string;
	calories: number | null;
}
