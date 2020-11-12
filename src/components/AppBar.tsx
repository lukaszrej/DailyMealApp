import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth: number = 250;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			zIndex: theme.zIndex.drawer + 1,
			background: 'linear-gradient(270deg, #025997 0%, #00A8CC 55%)',

			// rwd
			[theme.breakpoints.up('md')]: {
				width: `calc(100% - ${drawerWidth}px)`,
				marginLeft: drawerWidth
			},
			'& button': {
				marginRight: theme.spacing(2),

				// rwd
				[theme.breakpoints.up('md')]: {
					display: 'none'
				}
			}
		}
	})
);



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
