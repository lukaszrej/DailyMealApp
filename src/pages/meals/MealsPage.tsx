import React from 'react';
import { useSelector } from 'react-redux';
import { getStoredProducts } from '../../store/product/Product.selectors';
import { Product } from '../../store/product/Product.types';

const MealsPage: React.FC = (): JSX.Element => {
	const addedProducts = useSelector(getStoredProducts);

	return (
		<React.Fragment>
			Your meals goes here...
			{addedProducts.map((product: Product) => {
				return <div key={product.food.foodId}>{product.food.label}</div>;
			})}
		</React.Fragment>
	);
};

export default MealsPage;
