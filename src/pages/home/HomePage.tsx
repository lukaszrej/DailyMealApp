import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Add from '../../components/add/Add';
import WelcomeAlert from '../../components/alert/welcome/WelcomeAlert';

const HomePage: React.FC = () => {
	const showMessage = useSelector((state: any) => state.start.showMessage);

	return (
		<Fragment>
			<Add />
			{showMessage && <WelcomeAlert />}
		</Fragment>
	);
};

export default HomePage;
