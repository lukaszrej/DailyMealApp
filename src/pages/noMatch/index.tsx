import React from 'react';
import { Link } from 'react-router-dom';
import * as T from "../../utils/constants";

const NoMatch = () => {
	return (
		<main>
			{T.PAGE_NOT_EXIST} <Link to='/home'>{T.GO_BACK_HOME}</Link>
		</main>
	);
};

export default NoMatch;
