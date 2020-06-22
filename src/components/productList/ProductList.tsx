import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/index';
import shortid from 'shortid';
import useStyles from './styles';

const ProductList: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const foundProductsData = useSelector((state: AppState) => state.product.productsFound);

	return (
		<ul className={classes.root}>
			{foundProductsData.map((product: any) => {
				return <li key={shortid.generate()}>{product.food.label}</li>;
			})}
		</ul>
	);
};

export default ProductList;
