import { useHistory } from 'react-router-dom';
import { Props } from './types';
import { useSelector, useDispatch } from 'react-redux';
import { getStartedApp } from '../../../../store/login/Login.selectors';
import { endApp } from '../../../../store/login/Login.actions';
import { routes } from '../../../../routing/routes';
import { TopBar as TopBarContainer, Toolbar, IconButton, MenuIcon, ExitToAppIcon } from '../../../../styles';

export const TopBar = (props: Props) => {
	const { handleDrawerToggle } = props;
	const history = useHistory();
	const dispatch = useDispatch();
	const isStarted = useSelector(getStartedApp);

	const onLogout = () => {
		dispatch(endApp());
		history.push(routes.login);
	};

	return (
		<TopBarContainer position='sticky'>
			<Toolbar>
				<IconButton onClick={handleDrawerToggle} color='inherit' aria-label='open drawer' edge='start'>
					<MenuIcon />
				</IconButton>

				{isStarted && (
					<IconButton onClick={onLogout} color='inherit' aria-label='open drawer' edge='start'>
						<ExitToAppIcon />
					</IconButton>
				)}
			</Toolbar>
		</TopBarContainer>
	);
};
