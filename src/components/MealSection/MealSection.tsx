import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import MealTable from './MealCreateTable';
import { getStoredProducts } from '../../store/product/Product.selectors';
import { storeMeal, setIsMealAdded } from '../../store/meal/Meal.actions';
import { deleteAllProducts } from '../../store/product/Product.actions';
import * as S from "../../styles/components";
import * as T from "../../utils/constants";

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
				<Button color='primary' variant='contained' onClick={handleSubmitMeal}>
					{T.SUBMIT_MEAL}
				</Button>
				<Button color='secondary' onClick={handleDismissMeal}>
					{T.DISMISS}
				</Button>
			</section>
		</S.MealSection>
	);
};

export default MealSection;
