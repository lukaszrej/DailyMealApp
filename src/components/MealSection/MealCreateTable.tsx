import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MealTableToolbar from './MealTableToolbar';
import MealTableHead from './MealTableHead';
import MealTableBody from './MealTableBody';
import { Product } from '../../store/product/Product.types';
import { getSelectedProducts, getStoredProducts } from '../../store/product/Product.selectors';
import { selectProduct, selectProductReset, deleteProduct } from '../../store/product/Product.actions';
import * as T from "../../utils/constants";
import * as S from "../../styles";

const MealTable = () => {
	const dispatch = useDispatch();
	const storedProducts = useSelector(getStoredProducts);
	const selectedProducts = useSelector(getSelectedProducts);

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			const newSelectedItem: string = storedProducts.map((product: Product) => product.food.foodId);
			dispatch(selectProduct(newSelectedItem));
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
		<>
			<MealTableToolbar
				numSelected={selectedProducts.length}
				handleDeleteSelectedProducts={handleDeleteSelectedProducts}
			/>
			<S.TableContainer>
				<S.Table size='medium' aria-labelledby={T.CREATE_MEAL_ARIA_LABELLED} aria-label={T.CREATE_MEAL_ARIA}>
					<MealTableHead
						numSelected={selectedProducts.length}
						onSelectAllClick={handleSelectAllClick}
						rowCount={storedProducts.length}
					/>
					<MealTableBody
						isSelected={isSelected}
						handleSelectClick={handleSelectClick} />
				</S.Table>
			</S.TableContainer>
		</>
	);
};

export default MealTable;
