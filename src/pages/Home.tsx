import React from 'react';
import Stepper from '../components/Stepper';
import ProductCreate from '../components/ProductCreate';
import MealCreate from '../components/MealCreate';
import UserDetails from '../components/UserDetails';
import UserNeed from '../components/UserNeed';
import MealCounter from '../components/MealCounter';
import * as S from './styles';

const HomePage: React.FC = (): JSX.Element => {
	return (
		<S.Home>
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
		</S.Home>
	);
};

export default HomePage;
