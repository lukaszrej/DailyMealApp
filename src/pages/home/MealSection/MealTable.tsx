import { ChangeEvent } from 'react';
import { generate } from 'shortid';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedProducts, getStoredProducts } from '../../../store/product/Product.selectors';
import { selectProduct, selectProductReset, deleteProduct, decreaseKcal } from '../../../store/product/Product.actions';
import { HeadCell } from './types';
import { useStyles } from "./styles";
import * as T from "../../../constants/constants";
import { 
    Toolbar,
    Typography,
    Tooltip,
    IconButton,
    DeleteIcon,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Checkbox,
    TableBody 
} from "../../../styles";

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
			<Toolbar
				className={clsx(classes.root, {
					[classes.highlight]: selectedProducts.length > 0
				})}
			>
                {selectedProducts.length > 0 
                    ? 
                        <Typography color='inherit' variant='subtitle1'>
                            {selectedProducts.length} selected
                        </Typography>
                    : 
                        <Typography variant='h6'>
                            {T.YOUR_MEAL}
                        </Typography>
				}

				{selectedProducts.length > 0 && 
					<Tooltip title='Delete'>
						<IconButton onClick={handleDeleteSelectedProducts} aria-label='delete'>
							<DeleteIcon />
						</IconButton>
					</Tooltip>
				}
			</Toolbar>
            
			<TableContainer>
				<Table size='medium' aria-labelledby='create-meal-table' aria-label='create meal table'>
					<TableHead>
						<TableRow>
							<TableCell padding='checkbox'>
								<Checkbox
									indeterminate={selectedProducts.length > 0 && selectedProducts.length < storedProducts.length}
									checked={storedProducts.length > 0 && selectedProducts.length === storedProducts.length}
									onChange={handleSelectAllClick}
									inputProps={{ 'aria-label': 'select all products' }}
								/>
							</TableCell>

							{headCells.map(headCell => 
								<TableCell
									key={headCell.id}
									align={headCell.numeric ? 'right' : 'left'}
									padding={headCell.disablePadding ? 'none' : 'default'}
								>
									{headCell.label}
								</TableCell>
							)}
						</TableRow>
					</TableHead>
					<TableBody>
						{storedProducts.map((product, index) => {
                            const { foodId: productId, label: productLabel, calories, protein, carbs, fat } = product;
							const isItemSelected = isSelected(productId);
							const labelId = `meal-table-checkbox-${index}`;

							return (
								<TableRow hover role='checkbox' tabIndex={-1} key={`${productId}-${generate()}`}
									aria-checked={isItemSelected}
									selected={isItemSelected}
									onClick={() => handleSelectClick(productId)}
								>
									<TableCell padding='checkbox'>
										<Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
									</TableCell>
									<TableCell component='th' id={labelId} scope='row' padding='none'>
										{productLabel}
									</TableCell>
									<TableCell align='right'>{Math.round(calories)}</TableCell>
									<TableCell align='right'>{Math.round(fat)}</TableCell>
									<TableCell align='right'>{Math.round(carbs)}</TableCell>
									<TableCell align='right'>{Math.round(protein)}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
