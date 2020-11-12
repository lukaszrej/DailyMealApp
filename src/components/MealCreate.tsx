import React from 'react';
import Button from '@material-ui/core/Button';
import MealTable from './MealCreateTable';
import { useSelector, useDispatch } from 'react-redux';
import { getStoredProducts } from '../store/product/Product.selectors';
import { storeMeal, setIsMealAdded } from '../store/meal/Meal.actions';
import { deleteAllProducts } from '../store/product/Product.actions';
import * as S from "./styles";

const MealCreate = () => {
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
		<S.MealCreate>
			<MealTable />

			<section>
				<Button color='primary' variant='contained' onClick={handleSubmitMeal}>
					Submit meal
				</Button>
				<Button color='secondary' onClick={handleDismissMeal}>
					Dismiss
				</Button>
			</section>
		</S.MealCreate>
	);
};

export default MealCreate;
