import { Product } from '../../../store/product/Product.types';

export interface MealCardProps {
	meals: Array<Product[]>;
	dailyNeed: number;
	openModal: boolean;
	handleClose: () => void;
}
