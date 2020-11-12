import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import AppBarComponent from './AppBar';
import Nav from './Nav';

const drawerWidth: number = 250;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex'
		},
		drawer: {
			width: drawerWidth,
			background: '#282828',
			color: '#e6e7e8'
		}
	})
);

interface SidebarProps {
	window?: () => Window;
}

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps): JSX.Element => {
	const { window } = props;
	const classes = useStyles();
	const [ mobileOpen, setMobileOpen ] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<AppBarComponent handleDrawerToggle={handleDrawerToggle} />

			<Hidden mdUp implementation='css'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					classes={{ paper: classes.drawer }}
					ModalProps={{ keepMounted: true }}
				>
					<Nav />
				</Drawer>
			</Hidden>

			<Hidden smDown implementation='css'>
				<Drawer classes={{ paper: classes.drawer }} variant='permanent' open={mobileOpen}>
					<Nav />
				</Drawer>
			</Hidden>
		</div>
	);
};

export default Sidebar;
