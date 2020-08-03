import React from 'react';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { getFoundProducts } from '../../../../../store/product/Product.selectors';
import { storeProduct, updateCurrentKcalSum } from '../../../../../store/product/Product.actions';
import { Product } from '../../../../../store/product/Product.types';
import TooltipComponent from '../../../../utilsComponents/tooltip/Tooltip';
import ProductNutrients from './nutrients/ProductNutrients';
import useStyles from './styles';

const ProductList: React.FC = (): JSX.Element => {
	const classes = useStyles();
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
		<ul className={classes.root}>
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
		</ul>
	);
};

export default ProductList;
