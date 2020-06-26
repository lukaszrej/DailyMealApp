import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/index';
import MealCreate from '../../components/mealCreate/mealCreate';
import UserPage from '../../components/user/User';
import WelcomeAlert from '../../components/alert/welcome/WelcomeAlert';
import useStyles from './styles';

const HomePage: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const showWelcomeMessage = useSelector((state: AppState) => state.start.showMessage);

	return (
		<React.Fragment>
			<section className={classes.root}>
				<article>
					<MealCreate />
				</article>
				<aside>
					<UserPage />
				</aside>
			</section>
			{showWelcomeMessage && <WelcomeAlert />}
		</React.Fragment>
	);
};

export default HomePage;
