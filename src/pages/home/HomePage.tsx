import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/index';
import Add from '../../components/add/Add';
import WelcomeAlert from '../../components/alert/welcome/WelcomeAlert';

const HomePage: React.FC = (): JSX.Element => {
	const showWelcomeMessage = useSelector((state: AppState) => state.start.showMessage);

	return (
		<React.Fragment>
			<Add />
			{showWelcomeMessage && <WelcomeAlert />}
		</React.Fragment>
	);
};

export default HomePage;
