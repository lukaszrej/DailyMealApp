import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NoMatchPage: React.FC = () => {
	return (
		<Fragment>
			The page does not exist. <Link to='/home'>Go back to the home page</Link>
		</Fragment>
	);
};

export default NoMatchPage;
