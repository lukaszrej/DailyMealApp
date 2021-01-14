import React from 'react';
import { Stepper } from './Stepper';
import { ProductSection } from './ProductSection';
import { MealSection } from './MealSection';
import { UserDetails } from './UserDetails';
import { DailyNeed } from './DailyNeed';
import { MealsCounter } from './MealsCounter';
import * as S from '../../styles';

export const Home = () => {
	return (
		<S.Home>
			<article>
				<Stepper />
				<ProductSection />
				<MealSection />
			</article>
			<aside>
				<UserDetails />
				<DailyNeed />
				<MealsCounter />
			</aside>
		</S.Home>
	);
};
