import React from 'react';
import shortid from 'shortid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MealChart from '../../components/meal/chart/MealChart';
import ProductTag from '../../components/product/tag/ProductTag';
import { useSelector } from 'react-redux';
import { getMeals } from '../../store/meal/Meal.selectors';
import { getUserDailyNeed } from '../../store/user/User.selectors';
import { Product } from '../../store/product/Product.types';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';

import { useHistory } from 'react-router-dom';

const MealsPage: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const meals = useSelector(getMeals);
	const dailyNeed = useSelector(getUserDailyNeed);
	const history = useHistory();

	return (
		<main className={classes.root}>
			<section>
				<Paper square>
					<Typography variant='h6' noWrap>
						Your meals
					</Typography>
				</Paper>
				<Paper square>
					<article className={classes.article}>
						{meals.map((meal: (Product | any)[], index: number) => {
							const mealTotal = {
								calories: 0,
								fat: 0,
								carbs: 0,
								protein: 0
							};

							return (
								<section key={shortid.generate()}>
									<header>Meal {index + 1}</header>
									<main className={classes.meal}>
										{meal.map((item: Product) => {
											mealTotal.calories += Math.round(Number(item.food.nutrients.ENERC_KCAL));
											mealTotal.fat += Math.round(Number(item.food.nutrients.FAT));
											mealTotal.carbs += Math.round(Number(item.food.nutrients.CHOCDF));
											mealTotal.protein += Math.round(Number(item.food.nutrients.PROCNT));
											return (
												<main key={item.food.foodId + shortid.generate()}>
													<ProductTag
														label={item.food.label.toUpperCase()}
														calories={Math.round(Number(item.food.nutrients.ENERC_KCAL))}
													/>
												</main>
											);
										})}
									</main>

									<MealChart
										mealTotalCalories={mealTotal.calories}
										mealTotalFat={mealTotal.fat}
										mealTotalCarbs={mealTotal.carbs}
										mealTotalProtein={mealTotal.protein}
										dailyNeed={dailyNeed}
										mealIndex={index + 1}
									/>
								</section>
							);
						})}
					</article>
				</Paper>

				<div className={classes.buttons}>
					<Button
						variant='contained'
						color='primary'
						size='large'
						onClick={() => history.push('/home')}
						endIcon={<HomeIcon />}
					>
						Go back
					</Button>
				</div>
			</section>
		</main>
	);
};

export default MealsPage;
