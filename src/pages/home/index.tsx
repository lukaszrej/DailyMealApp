import { Stepper } from './Stepper';
import { ProductSection } from './ProductSection';
import { MealSection } from './MealSection';
import { UserDetails } from './UserDetails';
import { DailyNeed } from './DailyNeed';
import { MealCounter } from './MealCounter';
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
				<MealCounter />
			</aside>
		</S.Home>
	);
};
