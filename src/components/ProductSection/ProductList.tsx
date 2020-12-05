import React from 'react';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { getFoundProducts } from '../../store/product/Product.selectors';
import { storeProduct, updateCurrentKcalSum } from '../../store/product/Product.actions';
import { Product } from '../../store/product/Product.types';
import Tooltip from '../Tooltip';
import ProductNutrients from './ProductListNutrients';
import * as S from '../../styles';

const ProductList = () => {
	const dispatch = useDispatch();
	const foundProducts = useSelector(getFoundProducts);

	const handleListItemClick = (e: React.SyntheticEvent, product: Product): void => {
		e.preventDefault();

		const calories = product.food.nutrients.ENERC_KCAL;
		const currentKcalSum = Math.ceil(Number(calories));

		dispatch(storeProduct(product));
		dispatch(updateCurrentKcalSum(currentKcalSum));
	};

	return (
		<S.ProductList>
			{foundProducts.map((product: Product) => {
				const label = product.food.label;
				return (
					<Tooltip
						key={shortid.generate()}
						arrow
						title='Click to add'
						placement='top'
						enterDelay={650}
						leaveDelay={50}
					>
						<li onClick={(e) => handleListItemClick(e, product)}>
							{label}
							<ProductNutrients product={product} />
						</li>
					</Tooltip>
				);
			})}
		</S.ProductList>
	);
};

export default ProductList;
