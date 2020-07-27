import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MealTableToolbar from './tableToolbar/MealTableToolbar';
import MealTableHead from './tableHead/MealTableHead';
import MealTableBody from './tableBody/MealTableBody';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedProducts, getStoredProducts } from '../../../store/product/Product.selectors';
import { Product } from '../../../store/product/Product.types';
import { storeMeal, setIsMealAdded } from '../../../store/meal/Meal.actions';
import {
	selectProduct,
	selectProductReset,
	deleteProduct,
	deleteAllProducts
} from '../../../store/product/Product.actions';
import useStyles from './styles';

const MealCreate = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const storedProducts = useSelector(getStoredProducts);
	const selectedProducts = useSelector(getSelectedProducts);

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			const newSelectedItem: string = storedProducts.map((product: Product) => product.food.foodId);
			dispatch(selectProduct(newSelectedItem));
			return;
		} else {
			dispatch(selectProductReset());
		}
	};

	const handleSelectClick = (productId: string) => {
		dispatch(selectProduct(productId));
	};

	const isSelected = (itemIndex: string) => selectedProducts.indexOf(itemIndex) !== -1;

	const handleDeleteSelectedProducts = () => {
		selectedProducts.map((selectedId: string) => {
			return dispatch(deleteProduct(selectedId));
		});
	};

	const handleSubmitMeal = () => {
		dispatch(storeMeal(storedProducts));
		dispatch(setIsMealAdded());
		dispatch(deleteAllProducts());
	};

	const handleDismissMeal = () => {
		dispatch(deleteAllProducts());
	};

	if (storedProducts.length === 0) return null;
	else {
		return (
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<MealTableToolbar
						numSelected={selectedProducts.length}
						handleDeleteSelectedProducts={handleDeleteSelectedProducts}
					/>
					<TableContainer>
						<Table aria-labelledby='tableTitle' size='medium' aria-label='enhanced table'>
							<MealTableHead
								numSelected={selectedProducts.length}
								onSelectAllClick={handleSelectAllClick}
								rowCount={storedProducts.length}
							/>
							<MealTableBody isSelected={isSelected} handleSelectClick={handleSelectClick} />
						</Table>
					</TableContainer>
					<section className={classes.buttons}>
						<Button color='primary' variant='contained' onClick={handleSubmitMeal}>
							Submit meal
						</Button>
						<Button color='secondary' onClick={handleDismissMeal}>
							Dismiss
						</Button>
					</section>
				</Paper>
			</div>
		);
	}
};

export default MealCreate;
