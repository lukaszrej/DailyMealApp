import React from 'react';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/index';
import { storeProduct } from '../../store/product/Product.actions';
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
		<ul className={classes.root}>
			{foundProducts.map((product: any) => {
				return (
					<li key={shortid.generate()} onClick={(e) => handleListItemClick(e, product)}>
						{product.food.label.toLowerCase()}
					</li>
				);
			})}
		</ul>
	);
};

export default ProductList;
