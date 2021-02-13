import { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { TopBar } from './TopBar';
import { SideBar } from './SideBar';
import { Hidden, Drawer } from '../../../../styles';

const drawerWidth = 250;

const useStyles = makeStyles(() =>
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

interface Props {
	window?: () => Window;
}

export const Navigation = (props: Props) => {
	const { window } = props;
	const classes = useStyles();
	const [ mobileOpen, setMobileOpen ] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<TopBar handleDrawerToggle={handleDrawerToggle} />

			<Hidden mdUp implementation='css'>
				<Drawer
					open={mobileOpen}
					container={container}
					variant='temporary'
					onClose={handleDrawerToggle}
					classes={{ paper: classes.drawer }}
					ModalProps={{ keepMounted: true }}
				>
					<SideBar />
				</Drawer>
			</Hidden>

			<Hidden smDown implementation='css'>
				<Drawer classes={{ paper: classes.drawer }} variant='permanent' open={mobileOpen}>
					<SideBar />
				</Drawer>
			</Hidden>
		</div>
	);
};
