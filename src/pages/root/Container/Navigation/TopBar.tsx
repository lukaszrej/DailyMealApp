import { useHistory } from 'react-router-dom';
import { Props } from './TopBar.types';
import { useSelector, useDispatch } from 'react-redux';
import { getStartedApp } from '../../../../store/login/Login.selectors';
import { endApp } from '../../../../store/login/Login.actions';
import { routes } from '../../../../routing/routes';
import * as S from '../../../../styles';

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
		<S.TopBar position='sticky'>
			<S.Toolbar>
                <S.IconButton 
                    onClick={handleDrawerToggle}
                    color='inherit'
                    aria-label='open drawer'
                    edge='start' >
					<S.MenuIcon />
				</S.IconButton>

				{isStarted && 
                    <S.IconButton
                        onClick={onLogout}
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                    >
						<S.ExitToAppIcon />
					</S.IconButton>
				}
			</S.Toolbar>
		</S.TopBar>
	);
};
