import { ChangeEvent } from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedProducts, getStoredProducts } from '../../../store/product/Product.selectors';
import { selectProduct, selectProductReset, deleteProduct, decreaseKcal } from '../../../store/product/Product.actions';
import { HeadCell } from './MealTable.types';
import { useStyles } from "./MealTable.styles";
import * as T from "../../../constants/constants";
import * as S from "../../../styles";

export const headCells: HeadCell[] = [
	{ id: 'name', numeric: false, disablePadding: true, label: 'Product (100g serving)' },
	{ id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
	{ id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
	{ id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
	{ id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' }
];

export const MealTable = () => {
	const dispatch = useDispatch();
	const storedProducts = useSelector(getStoredProducts);
	const selectedProducts = useSelector(getSelectedProducts);
	const classes = useStyles();

	const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			const newSelectedItem = storedProducts.map(product => product.foodId);
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
		selectedProducts.map(selectedId => dispatch(deleteProduct(selectedId)));
		selectedProducts.map(selectedId => dispatch(decreaseKcal(selectedId)));
	};

	if (!storedProducts.length) return null;

	return (
		<>
			<S.Toolbar
				className={clsx(classes.root, {
					[classes.highlight]: selectedProducts.length > 0
				})}
			>
                {selectedProducts.length > 0 
                    ? 
                        <S.Typography color='inherit' variant='subtitle1'>
                            {selectedProducts.length} selected
                        </S.Typography>
                    : 
                        <S.Typography variant='h6'>
                            {T.YOUR_MEAL}
                        </S.Typography>
				}

				{selectedProducts.length > 0 && 
					<S.Tooltip title='Delete'>
						<S.IconButton onClick={handleDeleteSelectedProducts} aria-label='delete'>
							<S.DeleteIcon />
						</S.IconButton>
					</S.Tooltip>
				}
			</S.Toolbar>
            
			<S.TableContainer>
				<S.Table size='medium' aria-labelledby='create-meal-table' aria-label='create meal table'>
					<S.TableHead>
						<S.TableRow>
							<S.TableCell padding='checkbox'>
								<S.Checkbox
									indeterminate={selectedProducts.length > 0 && selectedProducts.length < storedProducts.length}
									checked={storedProducts.length > 0 && selectedProducts.length === storedProducts.length}
									onChange={handleSelectAllClick}
									inputProps={{ 'aria-label': 'select all products' }}
								/>
							</S.TableCell>

							{headCells.map(headCell => 
								<S.TableCell
									key={headCell.id}
									align={headCell.numeric ? 'right' : 'left'}
									padding={headCell.disablePadding ? 'none' : 'default'}
								>
									{headCell.label}
								</S.TableCell>
							)}
						</S.TableRow>
					</S.TableHead>
					<S.TableBody>
						{storedProducts.map((product, index) => {
                            const { foodId: productId, label: productLabel, calories, protein, carbs, fat } = product;
							const isItemSelected = isSelected(productId);
							const labelId = `meal-table-checkbox-${index}`;

							return (
								<S.TableRow hover role='checkbox' tabIndex={-1} key={productId}
									aria-checked={isItemSelected}
									selected={isItemSelected}
									onClick={() => handleSelectClick(productId)}
								>
									<S.TableCell padding='checkbox'>
										<S.Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
									</S.TableCell>
									<S.TableCell component='th' id={labelId} scope='row' padding='none'>
										{productLabel}
									</S.TableCell>
									<S.TableCell align='right'>{Math.round(calories)}</S.TableCell>
									<S.TableCell align='right'>{Math.round(fat)}</S.TableCell>
									<S.TableCell align='right'>{Math.round(carbs)}</S.TableCell>
									<S.TableCell align='right'>{Math.round(protein)}</S.TableCell>
								</S.TableRow>
							);
						})}
					</S.TableBody>
				</S.Table>
			</S.TableContainer>
		</>
	);
};
