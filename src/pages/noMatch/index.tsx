import { Link } from 'react-router-dom';
import { routes } from '../../routing/routes';
import * as T from "../../constants/constants";

export const NoMatch = () => {
	return (
		<main>
			{T.PAGE_NOT_EXIST}

            <Link to={routes.home}>
                {T.GO_BACK_HOME}
            </Link>
		</main>
	);
};
