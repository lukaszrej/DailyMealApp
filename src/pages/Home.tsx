import React from 'react';
import InfoStepper from '../components/InfoStepper/Stepper';
import ProductSection from '../components/ProductSection/ProductSection';
import MealSection from '../components/MealSection/MealSection';
import UserDetails from '../components/UserDetails/UserDetails';
import UserDailyNeed from '../components/UserDailyNeed/UserDailyNeed';
import MealCounter from '../components/MealCounter/MealCounter';
import * as S from '../styles';

export default () => {
	return (
		<S.Home>
			<article>
				<InfoStepper />
				<ProductSection />
				<MealSection />
			</article>
			<aside>
				<UserDetails />
				<UserDailyNeed />
				<MealCounter />
			</aside>
		</S.Home>
	);
};
