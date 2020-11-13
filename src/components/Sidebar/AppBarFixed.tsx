import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import * as S from "../_styles";

interface AppBarProps {
	handleDrawerToggle: () => void;
}

const AppBarFixed = (props: AppBarProps) => {
	const { handleDrawerToggle } = props;

	return (
		<S.Appbar position='fixed'>
			<Toolbar>
				<IconButton color='inherit' aria-label='open drawer' edge='start' onClick={handleDrawerToggle}>
					<MenuIcon />
				</IconButton>
			</Toolbar>
		</S.Appbar>
	);
};

export default AppBarFixed;
