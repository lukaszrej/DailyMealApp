import React from 'react';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { getFoundProducts } from '../../store/product/Product.selectors';
import { storeProduct } from '../../store/product/Product.actions';
import TooltipComponent from '../tooltip/Tooltip';
import Nutrients from './Nutrients';
import useStyles from './styles';

const ProductList: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const foundProducts = useSelector(getFoundProducts);

	const handleListItemClick = (e: React.SyntheticEvent, product: string): void => {
		e.preventDefault();
		dispatch(storeProduct(product));
	};

	return (
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
							<Nutrients product={product} />
						</li>
					</TooltipComponent>
				);
			})}
		</ul>
	);
};

export default ProductList;
