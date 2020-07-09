import React from 'react';
import { useSelector } from 'react-redux';
import { getShowAlert } from '../../store/start/Start.selectors';
import { getUserName } from '../../store/user/User.selectors';
import MealCreate from '../../components/mealCreate/mealCreate';
import User from '../../components/user/User';
import UserNeed from '../../components/userNeed/UserNeed';
import Alert from '../../components/alert/Alert';
import useStyles from './styles';

const HomePage: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const showAlert = useSelector(getShowAlert);
	const userName = useSelector(getUserName);

	return (
		<React.Fragment>
			<section className={classes.root}>
				<article>
					<MealCreate />
				</article>
				<aside>
					<User />
					<UserNeed />
				</aside>
			</section>
			{showAlert && <Alert severity='info'>Hello {userName ? userName : 'User'}!</Alert>}
		</React.Fragment>
	);
};

export default HomePage;