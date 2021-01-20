import { useSelector, useDispatch } from 'react-redux';
import { getStoredProducts } from '../../../store/product/Product.selectors';
import { storeMeal, storeToLocalStorage, setIsMealAdded } from '../../../store/meal/Meal.actions';
import { deleteAllProducts } from '../../../store/product/Product.actions';
import { MealTable } from './MealTable';
import * as T from "../../../constants/constants";
import * as S from "../../../styles";

export const MealSection = () => {
	const dispatch = useDispatch();
	const storedProducts = useSelector(getStoredProducts);

	const onMealSubmit = () => {
		dispatch(storeMeal(storedProducts));
		dispatch(setIsMealAdded());
		dispatch(storeToLocalStorage());
		dispatch(deleteAllProducts());
	};

	const onMealDismiss = () => {
		dispatch(deleteAllProducts());
	};

	if (!storedProducts.length) return null;

	return (
		<S.MealSection>
			<MealTable />

			<section>
				<S.Button onClick={onMealSubmit} color='primary' variant='contained'>
					{T.SUBMIT_MEAL}
				</S.Button>
				<S.Button onClick={onMealDismiss} color='secondary'>
					{T.DISMISS}
				</S.Button>
			</section>
		</S.MealSection>
	);
};
