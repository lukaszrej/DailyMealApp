import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MealCounter from '../../components/mealCounter/MealCounter';
import Chart from '../../components/chart/Chart';
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
						{meals.map((meal: Array<Product>, index: number) => {
							let totalCalories = 0;

							return (
								<section key={shortid.generate()} className={classes.meal}>
									<header>Meal {index + 1}</header>
									{meal.map((item: Product) => {
										totalCalories += Math.round(Number(item.food.nutrients.ENERC_KCAL));
										return (
											<main key={item.food.foodId + shortid.generate()}>
												<h4>{item.food.label.toUpperCase()}</h4>
												<p>{Math.round(Number(item.food.nutrients.ENERC_KCAL))} kcal</p>
												<Chart/>
											</main>
										);
									})}
									<footer>Total: {Math.round(totalCalories)} kcal</footer>
								</section>
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
