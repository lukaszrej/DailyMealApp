import { useSelector } from 'react-redux';
import { Stepper } from './Stepper';
import { ProductSection } from './ProductSection';
import { MealSection } from './MealSection';
import { UserDetails } from './UserDetails';
import { DailyNeed } from './DailyNeed';
import { MealCounter } from './MealCounter';
import { Loader } from '../../components/Loader';
import { getIsLoading } from '../../store/loader/Loader.selectors';
import { useTimeoutLoader } from '../../hooks/useTimeoutLoader';
import { hideLoader } from '../../store/loader/Loader.actions';
import { Home as HomeContainer } from '../../styles';

export const Home = () => {
	const isLoading = useSelector(getIsLoading);
	useTimeoutLoader(hideLoader, isLoading);

	return (
		<HomeContainer>
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

			{isLoading && <Loader />}
		</HomeContainer>
	);
};
