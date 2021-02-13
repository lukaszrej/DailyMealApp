import { useSelector, useDispatch } from 'react-redux';
import { getStoredProducts } from '../../../store/product/Product.selectors';
import { storeMeal, storeToLocalStorage, setIsMealAdded } from '../../../store/meal/Meal.actions';
import { showLoader } from '../../../store/loader/Loader.actions';
import { deleteAllProducts } from '../../../store/product/Product.actions';
import { MealTable } from './MealTable';
import { MealSection as MealSectionContainer, Button } from '../../../styles';
import * as T from '../../../constants/constants';

export const MealSection = () => {
	const dispatch = useDispatch();
	const storedProducts = useSelector(getStoredProducts);

	const onMealSubmit = () => {
        dispatch(showLoader());
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
		<MealSectionContainer>
			<MealTable />

			<section>
				<Button onClick={onMealSubmit} color='primary' variant='contained'>
					{T.SUBMIT_MEAL}
				</Button>
				<Button onClick={onMealDismiss} color='secondary'>
					{T.DISMISS}
				</Button>
			</section>
		</MealSectionContainer>
	);
};
