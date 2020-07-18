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
							const total = {
								calories: 0,
								fat: 0,
								carbs: 0,
								protein: 0
							};

							return (
								<section key={shortid.generate()} className={classes.meal}>
									<header>Meal {index + 1}</header>
									{meal.map((item: Product) => {
										total.calories += Math.round(Number(item.food.nutrients.ENERC_KCAL));
										total.fat += Math.round(Number(item.food.nutrients.FAT));
										total.carbs += Math.round(Number(item.food.nutrients.CHOCDF));
										total.protein += Math.round(Number(item.food.nutrients.PROCNT));
										return (
											<main key={item.food.foodId + shortid.generate()}>
												<h4>{item.food.label.toUpperCase()}</h4>
												<p>{Math.round(Number(item.food.nutrients.ENERC_KCAL))} kcal</p>
											</main>
										);
									})}
									<Chart
										totalCalories={total.calories}
										totalFat={total.fat}
										totalCarbs={total.carbs}
										totalProtein={total.protein}
									/>
									<footer>Total: {Math.round(total.calories)} kcal</footer>
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
