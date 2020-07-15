import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MealCounter from '../../components/mealCounter/MealCounter';
import { useSelector } from 'react-redux';
import { getMeals } from '../../store/meal/Meal.selectors';
import { Product } from '../../store/product/Product.types';
import shortid from 'shortid';
import useStyles from './styles';

const MealsPage: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const meals = useSelector(getMeals);

	return (
		<main className={classes.root}>
			<section>
				<Paper square>
					<Typography variant='h6' noWrap>
						Your meals
					</Typography>
					<article className={classes.article}>
						{meals.map((meal: Array<Product>) => {
							return (
								<div key={shortid.generate()}>
									<h5>Meal</h5>
									{meal.map((item: Product) => {
										return <div key={item.food.foodId}>{item.food.label}</div>;
									})}
								</div>
							);
						})}
					</article>
				</Paper>
			</section>

			<aside>
				<MealCounter meals={meals} />
			</aside>
		</main>
	);
};

export default MealsPage;
