import React from 'react';
import { Link } from 'react-router-dom';

const NoMatchPage: React.FC = (): JSX.Element => {
	return (
		<React.Fragment>
			The page does not exist. <Link to='/home'>Go back to the home page</Link>
		</React.Fragment>
	);
};

export default NoMatchPage;
