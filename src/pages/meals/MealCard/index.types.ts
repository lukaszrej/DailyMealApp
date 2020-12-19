import { Product } from '../../../store/product/Product.types';

export interface MealCardProps {
	meals: Product[];
	dailyNeed: number;
}
