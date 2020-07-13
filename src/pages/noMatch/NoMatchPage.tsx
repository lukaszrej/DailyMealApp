import React from 'react';
import { Link } from 'react-router-dom';

const NoMatchPage: React.FC = (): JSX.Element => {
	return (
		<main>
			The page does not exist. <Link to='/home'>Go back to the home page</Link>
		</main>
	);
};

export default NoMatchPage;
