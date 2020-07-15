import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MealTableToolbar from '../toolbar/Toolbar';
import MealTableHead from '../head/Head';
import MealTableBody from '../body/Body';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedProducts, getStoredProducts } from '../../../store/product/Product.selectors';
import { Product } from '../../../store/product/Product.types';
import { storeMeal } from '../../../store/meal/Meal.actions';
import {
	selectProduct,
	selectProductReset,
	deleteProduct,
	deleteAllProducts
} from '../../../store/product/Product.actions';
import useStyles from './styles';

const MealTable = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const storedProducts = useSelector(getStoredProducts);
	const selected = useSelector(getSelectedProducts);

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			const newSelectedItems = storedProducts.map((product: Product) => product.food.foodId);
			dispatch(selectProduct(newSelectedItems));
			return;
		} else {
			dispatch(selectProductReset());
		}
	};

	const handleSelectClick = (productId: string) => {
		dispatch(selectProduct(productId));
	};

	const isSelected = (itemIndex: string) => selected.indexOf(itemIndex) !== -1;

	const handleDeleteSelectedProducts = () => {
		selected.map((selectedId: string) => {
			return dispatch(deleteProduct(selectedId));
		});
	};

	const handleSubmitMeal = () => {
		dispatch(storeMeal(storedProducts));
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
						numSelected={selected.length}
						handleDeleteSelectedProducts={handleDeleteSelectedProducts}
					/>
					<TableContainer>
						<Table
							className={classes.table}
							aria-labelledby='tableTitle'
							size='medium'
							aria-label='enhanced table'
						>
							<MealTableHead
								numSelected={selected.length}
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

export default MealTable;
