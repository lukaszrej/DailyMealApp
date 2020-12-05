import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MealTable from './MealCreateTable';
import { getStoredProducts } from '../../store/product/Product.selectors';
import { storeMeal, setIsMealAdded } from '../../store/meal/Meal.actions';
import { deleteAllProducts } from '../../store/product/Product.actions';
import * as T from "../../utils/constants";
import * as S from "../../styles";

const MealSection = () => {
	const dispatch = useDispatch();
	const storedProducts = useSelector(getStoredProducts);

	const handleSubmitMeal = () => {
		dispatch(storeMeal(storedProducts));
		dispatch(setIsMealAdded());
		dispatch(deleteAllProducts());
	};

	const handleDismissMeal = () => {
		dispatch(deleteAllProducts());
	};

	if (storedProducts.length === 0) return null;

	return (
		<S.MealSection>
			<MealTable />

			<section>
				<S.Button color='primary' variant='contained' onClick={handleSubmitMeal}>
					{T.SUBMIT_MEAL}
				</S.Button>
				<S.Button color='secondary' onClick={handleDismissMeal}>
					{T.DISMISS}
				</S.Button>
			</section>
		</S.MealSection>
	);
};

export default MealSection;
