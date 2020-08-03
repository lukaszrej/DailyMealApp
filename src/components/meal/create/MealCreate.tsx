import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MealTable from './table/MealTable';
import { useSelector, useDispatch } from 'react-redux';
import { getStoredProducts } from '../../../store/product/Product.selectors';
import { storeMeal, setIsMealAdded } from '../../../store/meal/Meal.actions';
import { deleteAllProducts } from '../../../store/product/Product.actions';
import useStyles from './styles';

const MealCreate = () => {
	const classes = useStyles();
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
		<Paper className={classes.root}>
			<MealTable />

			<section>
				<Button color='primary' variant='contained' onClick={handleSubmitMeal}>
					Submit meal
				</Button>
				<Button color='secondary' onClick={handleDismissMeal}>
					Dismiss
				</Button>
			</section>
		</Paper>
	);
};

export default MealCreate;
