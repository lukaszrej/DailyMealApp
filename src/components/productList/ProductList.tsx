import React from 'react';
import Paper from '@material-ui/core/Paper';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/index';
import { storeProduct } from '../../store/product/Product.actions';
import TooltipComponent from '../tooltip/Tooltip';
import useStyles from './styles';

const ProductList: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const foundProducts = useSelector((state: AppState) => state.product.foundProducts);

	const handleListItemClick = (e: React.SyntheticEvent, product: any): void => {
		e.preventDefault();
		dispatch(storeProduct(product));
	};

	return (
		<Paper square>
			<ul className={classes.root}>
				{foundProducts.map((product: typeof foundProducts) => {
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
								{product.food.label.toLowerCase()}
								<div>
									{!isNaN(Math.ceil(product.food.nutrients.ENERC_KCAL)) &&
										Math.ceil(product.food.nutrients.ENERC_KCAL) + ' kcal'}

									{!isNaN(Math.ceil(product.food.nutrients.PROCNT)) &&
										' | ' + Math.ceil(product.food.nutrients.PROCNT) + ' g protein'}

									{!isNaN(Math.ceil(product.food.nutrients.CHOCDF)) &&
										' | ' + Math.ceil(product.food.nutrients.CHOCDF) + ' g carbs'}

									{!isNaN(Math.ceil(product.food.nutrients.FAT)) &&
										' | ' + Math.ceil(product.food.nutrients.FAT) + ' g fat '}
								</div>
							</li>
						</TooltipComponent>
					);
				})}
			</ul>
		</Paper>
	);
};

export default ProductList;
