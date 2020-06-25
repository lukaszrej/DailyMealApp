import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/index';

const MealsPage: React.FC = (): JSX.Element => {
	const addedProducts = useSelector((state: AppState) => state.product.storedProducts);

	return (
		<React.Fragment>
			<div>
				Your meals goes here...
				{addedProducts.map((product: typeof addedProducts) => {
					return <div key={product.food.foodId}>{product.food.label}</div>;
				})}
			</div>
		</React.Fragment>
	);
};

export default MealsPage;
