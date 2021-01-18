import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppBarProps } from './TopBar.types';
import { useSelector, useDispatch } from 'react-redux';
import { getStartedApp } from '../../../../store/login/Login.selectors';
import { endApp } from '../../../../store/login/Login.actions';
import * as S from '../../../../styles';

export const TopBar = (props: AppBarProps) => {
	const { handleDrawerToggle } = props;
	const history = useHistory();
	const dispatch = useDispatch();
	const isStarted = useSelector(getStartedApp);

	const onLogout = () => {
		dispatch(endApp());
		history.push("login");
	};

	return (
		<S.TopBar position='sticky'>
			<S.Toolbar>
				<S.IconButton color='inherit' aria-label='open drawer' edge='start' onClick={handleDrawerToggle}>
					<S.MenuIcon />
				</S.IconButton>

				{isStarted && (
					<S.IconButton color='inherit' aria-label='open drawer' edge='start' onClick={onLogout}>
						<S.ExitToAppIcon />
					</S.IconButton>
				)}
			</S.Toolbar>
		</S.TopBar>
	);
};
