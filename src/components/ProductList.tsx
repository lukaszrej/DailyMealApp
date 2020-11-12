import React from 'react';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { getFoundProducts } from '../store/product/Product.selectors';
import { storeProduct, updateCurrentKcalSum } from '../store/product/Product.actions';
import { Product } from '../store/product/Product.types';
import TooltipComponent from './Tooltip';
import ProductNutrients from './ProductListNutrients';
import * as S from './styles';

const ProductList: React.FC = (): JSX.Element => {
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
					<TooltipComponent
						key={shortid.generate()}
						arrow
						title='Click to add'
						placement='top'
						enterDelay={450}
						leaveDelay={50}
					>
						<li onClick={(e) => handleListItemClick(e, product)}>
							{label}
							<ProductNutrients product={product} />
						</li>
					</TooltipComponent>
				);
			})}
		</S.ProductList>
	);
};

export default ProductList;
