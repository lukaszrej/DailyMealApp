import React from 'react';
import { Product } from '../../store/product/Product.types';
import { useSelector } from 'react-redux';
import { getStoredProducts } from '../../store/product/Product.selectors';
import * as T from "../../utils/constants";
import * as S from "../../styles";

interface TableBodyProps {
	isSelected: (name: string) => boolean;
	handleSelectClick: (productId: string) => void;
}

const MealTableBody = (props: TableBodyProps) => {
	const { isSelected, handleSelectClick } = props;
	const storedProducts = useSelector(getStoredProducts);

	return (
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
	);
};

export default MealTableBody;
