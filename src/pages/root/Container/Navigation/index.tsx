import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { TopBar } from './TopBar';
import { SideBar } from './SideBar';
import * as S from "../../../../styles";

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

interface AppBarProps {
	window?: () => Window;
}

export const Navigation = (props: AppBarProps) => {
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

			<S.Hidden mdUp implementation='css'>
				<S.Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					classes={{ paper: classes.drawer }}
					ModalProps={{ keepMounted: true }}
				>
					<SideBar />
				</S.Drawer>
			</S.Hidden>

			<S.Hidden smDown implementation='css'>
				<S.Drawer classes={{ paper: classes.drawer }} variant='permanent' open={mobileOpen}>
					<SideBar />
				</S.Drawer>
			</S.Hidden>
		</div>
	);
};
