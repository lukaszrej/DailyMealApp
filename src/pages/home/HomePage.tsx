import React from 'react';
import Stepper from '../../components/stepper/Stepper';
import ProductCreate from '../../components/product/create/ProductCreate';
import MealCreate from '../../components/meal/create/MealCreate';
import UserDetails from '../../components/user/details/UserDetails';
import UserNeed from '../../components/user/dailyNeed/UserNeed';
import MealCounter from '../../components/meal/counter/MealCounter';
import useStyles from './styles';

const HomePage: React.FC = (): JSX.Element => {
	const classes = useStyles();

	return (
		<main className={classes.root}>
			<article>
				<Stepper />
				<ProductCreate />
				<MealCreate />
			</article>
			<aside>
				<UserDetails />
				<UserNeed />
				<MealCounter />
			</aside>
		</main>
	);
};

export default HomePage;
