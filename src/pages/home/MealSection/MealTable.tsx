import React from 'react';
import clsx from 'clsx';
import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles';
import { headCells } from '../../../utils/meal-config/mealTableConfig';
import { useSelector, useDispatch } from 'react-redux';
import { Product } from '../../../store/product/Product.types';
import { getSelectedProducts, getStoredProducts } from '../../../store/product/Product.selectors';
import { selectProduct, selectProductReset, deleteProduct } from '../../../store/product/Product.actions';
import * as T from "../../../utils/constants";
import * as S from "../../../styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(1),
			'& > div': {
				flex: '1 1 100%',
				textAlign: 'center'
			}
		},
		highlight:
			theme.palette.type === 'light'
				? {
					color: theme.palette.secondary.main,
					backgroundColor: lighten(theme.palette.secondary.light, 0.85)
				}
				: {
					color: theme.palette.text.primary,
					backgroundColor: theme.palette.secondary.dark
				}
	})
);

const MealTable = () => {
	const dispatch = useDispatch();
	const storedProducts = useSelector(getStoredProducts);
	const selectedProducts = useSelector(getSelectedProducts);
	const classes = useStyles();


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
			<S.Toolbar
				className={clsx(classes.root, {
					[classes.highlight]: selectedProducts.length > 0
				})}
			>
				{selectedProducts.length > 0 ? (
					<S.Typography color='inherit' variant='subtitle1'>
						{selectedProducts.length} {T.SELECTED}
					</S.Typography>
				) : (
						<S.Typography variant='h6'>
							{T.YOUR_MEAL}
						</S.Typography>
					)}
				{selectedProducts.length > 0 && (
					<S.Tooltip title={T.DELETE}>
						<S.IconButton aria-label={T.DELETE} onClick={handleDeleteSelectedProducts}>
							<S.DeleteIcon />
						</S.IconButton>
					</S.Tooltip>
				)}
			</S.Toolbar>
			<S.TableContainer>
				<S.Table size='medium' aria-labelledby={T.CREATE_MEAL_ARIA_LABELLED} aria-label={T.CREATE_MEAL_ARIA}>
					<S.TableHead>
						<S.TableRow>
							<S.TableCell padding='checkbox'>
								<S.Checkbox
									indeterminate={selectedProducts.length > 0 && selectedProducts.length < storedProducts.length}
									checked={storedProducts.length > 0 && selectedProducts.length === storedProducts.length}
									onChange={handleSelectAllClick}
									inputProps={{ 'aria-label': T.SELECT_ALL_PRODUCTS_ARIA }}
								/>
							</S.TableCell>
							{headCells.map((headCell) => (
								<S.TableCell
									key={headCell.id}
									align={headCell.numeric ? 'right' : 'left'}
									padding={headCell.disablePadding ? 'none' : 'default'}
								>
									{headCell.label}
								</S.TableCell>
							))}
						</S.TableRow>
					</S.TableHead>
					<S.TableBody>
						{storedProducts.map((product: Product, index: number) => {
							const productId = product.food.foodId;
							const productLabel = product.food.label;
							const calories = product.food.nutrients.ENERC_KCAL;
							const protein = product.food.nutrients.PROCNT;
							const carbs = product.food.nutrients.CHOCDF;
							const fat = product.food.nutrients.FAT;

							const isItemSelected = isSelected(productId);
							const labelId = `${T.MEAL_CHECKBOX_LABELLED}-${index}`;

							return (
								<S.TableRow
									hover
									onClick={() => handleSelectClick(productId)}
									role='checkbox'
									aria-checked={isItemSelected}
									tabIndex={-1}
									key={productId}
									selected={isItemSelected}
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

export default MealTable;
