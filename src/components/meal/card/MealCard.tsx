import React from 'react';
import shortid from 'shortid';
import Paper from '@material-ui/core/Paper';
import { Product } from '../../../store/product/Product.types';
import MealChart from '../chart/MealChart';
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
									mealTotal.calories += Math.round(Number(item.food.nutrients.ENERC_KCAL));
									mealTotal.fat += Math.round(Number(item.food.nutrients.FAT));
									mealTotal.carbs += Math.round(Number(item.food.nutrients.CHOCDF));
									mealTotal.protein += Math.round(Number(item.food.nutrients.PROCNT));
									return (
										<ProductTag
											key={shortid.generate()}
											label={item.food.label.toUpperCase()}
											calories={Math.round(Number(item.food.nutrients.ENERC_KCAL))}
										/>
									);
								})}
							</main>

							<MealChart mealTotal={mealTotal} dailyNeed={dailyNeed} mealIndex={index + 1} />
						</section>
					);
				})}
			</article>
		</Paper>
	);
};

export default MealCard;
