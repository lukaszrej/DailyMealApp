import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';

interface AppBarProps {
	handleDrawerToggle: () => void;
}

const AppBarComponent: React.FC<AppBarProps> = (props: AppBarProps): JSX.Element => {
	const { handleDrawerToggle } = props;
	const classes = useStyles();

	return (
		<AppBar position='fixed' className={classes.root}>
			<Toolbar>
				<IconButton color='inherit' aria-label='open drawer' edge='start' onClick={handleDrawerToggle}>
					<MenuIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default AppBarComponent;
