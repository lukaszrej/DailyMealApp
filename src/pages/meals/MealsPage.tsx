import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MealCounter from '../../components/mealCounter/MealCounter';
import { useSelector } from 'react-redux';
import { getStoredProducts } from '../../store/product/Product.selectors';
import { Product } from '../../store/product/Product.types';
import useStyles from './styles';

const MealsPage: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const addedProducts = useSelector(getStoredProducts);

	return (
		<main className={classes.root}>
			<section>
				<Paper square>
					<Typography variant='h6' noWrap>
						Your meals goes here...
					</Typography>
					<article className={classes.article}>
						{addedProducts.map((product: Product) => {
							return <div key={product.food.foodId}>{product.food.label}</div>;
						})}
					</article>
				</Paper>
			</section>
			<aside>
				<MealCounter />
			</aside>
		</main>
	);
};

export default MealsPage;
