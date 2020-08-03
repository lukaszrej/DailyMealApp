import React from 'react';
import { Nutrients } from './ProductNutrients.type';

const ProductNutrients: React.FC<Nutrients> = ({ product }: Nutrients): JSX.Element => {
	const calories = product.food.nutrients.ENERC_KCAL;
	const protein = product.food.nutrients.PROCNT;
	const carbs = product.food.nutrients.CHOCDF;
	const fat = product.food.nutrients.FAT;

	return (
		<div>
			{!isNaN(calories) && Math.ceil(calories) + ' kcal'}
			{!isNaN(protein) && ' | ' + Math.ceil(protein) + ' g protein'}
			{!isNaN(carbs) && ' | ' + Math.ceil(carbs) + ' g carbs'}
			{!isNaN(fat) && ' | ' + Math.ceil(fat) + ' g fat '}
		</div>
	);
};

export default ProductNutrients;
