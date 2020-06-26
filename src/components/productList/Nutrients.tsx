import React from 'react';

interface Props {
	product: any;
}

const Nutrients: any = ({ product }: Props): JSX.Element => {
	return (
		<div>
			{!isNaN(Math.ceil(product.food.nutrients.ENERC_KCAL)) &&
				Math.ceil(product.food.nutrients.ENERC_KCAL) + ' kcal'}

			{!isNaN(Math.ceil(product.food.nutrients.PROCNT)) &&
				' | ' + Math.ceil(product.food.nutrients.PROCNT) + ' g protein'}

			{!isNaN(Math.ceil(product.food.nutrients.CHOCDF)) &&
				' | ' + Math.ceil(product.food.nutrients.CHOCDF) + ' g carbs'}

			{!isNaN(Math.ceil(product.food.nutrients.FAT)) && ' | ' + Math.ceil(product.food.nutrients.FAT) + ' g fat '}
		</div>
	);
};

export default Nutrients;
