import React from 'react';
import { useSelector } from 'react-redux';
import { getShowAlert } from '../../store/start/Start.selectors';
import { getUserName } from '../../store/user/User.selectors';
import Alert from '../../components/utilsComponents/alert/Alert';
import Stepper from '../../components/stepper/Stepper';
import ProductCreate from '../../components/product/create/ProductCreate';
import UserDetails from '../../components/user/details/UserDetails';
import UserNeed from '../../components/user/need/UserNeed';
import MealCounter from '../../components/meal/counter/MealCounter';
import MealCreate from '../../components/meal/create/MealCreate';
import useStyles from './styles';

const HomePage: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const showAlert = useSelector(getShowAlert);
	const userName = useSelector(getUserName);

	return (
		<React.Fragment>
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

			{showAlert && <Alert severity='success'>Hello {userName ? userName : 'User'}!</Alert>}
		</React.Fragment>
	);
};

export default HomePage;
