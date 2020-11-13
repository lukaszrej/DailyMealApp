import React from 'react';
import { Link } from 'react-router-dom';
import {
	PAGE_NOT_EXIST,
	GO_BACK_HOME
} from "../utils/constants";

export default () => {
	return (
		<main>
			{PAGE_NOT_EXIST} <Link to='/home'>{GO_BACK_HOME}</Link>
		</main>
	);
};
