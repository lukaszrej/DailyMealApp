import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { Product } from '../../../../../store/product/Product.types';
import { useSelector } from 'react-redux';
import { getStoredProducts } from '../../../../../store/product/Product.selectors';

interface TableBodyProps {
	isSelected: (name: string) => boolean;
	handleSelectClick: (productId: string) => void;
}

const MealTableBody = (props: TableBodyProps) => {
	const { isSelected, handleSelectClick } = props;
	const storedProducts = useSelector(getStoredProducts);

	return (
		<TableBody>
			{storedProducts.map((product: Product, index: number) => {
				const productId = product.food.foodId;
				const productLabel = product.food.label;
				const calories = product.food.nutrients.ENERC_KCAL;
				const protein = product.food.nutrients.PROCNT;
				const carbs = product.food.nutrients.CHOCDF;
				const fat = product.food.nutrients.FAT;

				const isItemSelected = isSelected(productId);
				const labelId = `enhanced-table-checkbox-${index}`;

				return (
					<TableRow
						hover
						onClick={() => handleSelectClick(productId)}
						role='checkbox'
						aria-checked={isItemSelected}
						tabIndex={-1}
						key={productId}
						selected={isItemSelected}
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
	);
	// }
};

export default MealTableBody;
