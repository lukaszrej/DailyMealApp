import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStoredProducts } from '../../../store/product/Product.selectors';
import { storeMeal, storeToLocalStorage, setIsMealAdded } from '../../../store/meal/Meal.actions';
import { deleteAllProducts } from '../../../store/product/Product.actions';
import MealTable from './MealTable';
import * as T from "../../../utils/constants";
import * as S from "../../../styles";

const MealSection = () => {
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

	if (storedProducts.length === 0) return null;

	return (
		<S.MealSection>
			<MealTable />

			<section>
				<S.Button color='primary' variant='contained' onClick={onMealSubmit}>
					{T.SUBMIT_MEAL}
				</S.Button>
				<S.Button color='secondary' onClick={onMealDismiss}>
					{T.DISMISS}
				</S.Button>
			</section>
		</S.MealSection>
	);
};

export default MealSection;
