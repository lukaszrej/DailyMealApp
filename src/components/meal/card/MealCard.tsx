import React from 'react';
import shortid from 'shortid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { Product } from '../../../store/product/Product.types';
import MealChart from './chart/MealChart';
import ProductTag from '../../product/tag/ProductTag';
import useStyles from './styles';

interface MealCardProps {
	meals: any[];
	dailyNeed: number;
}

const MealCard: React.FC<MealCardProps> = (props: MealCardProps): JSX.Element => {
	const { meals, dailyNeed } = props;
	const classes = useStyles();

	return (
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
									const calories = Math.round(item.food.nutrients.ENERC_KCAL);
									const protein = Math.round(item.food.nutrients.PROCNT);
									const carbs = Math.round(item.food.nutrients.CHOCDF);
									const fat = Math.round(item.food.nutrients.FAT);
									const label = item.food.label;

									mealTotal.calories += calories;
									mealTotal.fat += fat;
									mealTotal.carbs += carbs;
									mealTotal.protein += protein;

									return <ProductTag key={shortid.generate()} label={label} calories={calories} />;
								})}
							</main>

							<MealChart mealTotal={mealTotal} dailyNeed={dailyNeed} />

							{meals.length > 1 ? <Divider /> : ''}
						</section>
					);
				})}
			</article>
		</Paper>
	);
};

export default MealCard;
