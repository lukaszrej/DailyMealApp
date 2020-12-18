import React from 'react';
import { AppBarProps } from './index.types';
import { useSelector, useDispatch } from 'react-redux';
import { getStarted } from '../../../../store/login/Login.selectors';
import { endApp } from '../../../../store/login/Login.actions';
import * as S from '../../../../styles';

const TopAppBar = (props: AppBarProps) => {
	const { handleDrawerToggle } = props;
	const dispatch = useDispatch();
	const isStarted = useSelector(getStarted);

	const onLogout = () => {
		dispatch(endApp());
	};

	return (
		<S.TopAppBar position='sticky'>
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
		</S.TopAppBar>
	);
};

export default TopAppBar;
