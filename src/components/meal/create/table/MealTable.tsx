import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import MealTableToolbar from './toolbar/MealTableToolbar';
import MealTableHead from './head/MealTableHead';
import MealTableBody from './body/MealTableBody';
import { Product } from '../../../../store/product/Product.types';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedProducts, getStoredProducts } from '../../../../store/product/Product.selectors';
import { selectProduct, selectProductReset, deleteProduct } from '../../../../store/product/Product.actions';

const MealTable: React.FC = (): JSX.Element | null => {
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

	if (storedProducts.length === 0) return null;

	return (
		<React.Fragment>
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
		</React.Fragment>
	);
};

export default MealTable;
