import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import HomeIcon from '@material-ui/icons/Home';

import useStyles from './styles';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import Footer from '../footer/Footer';

interface NavProps {
	children: JSX.Element;
}

const Nav: React.FC<NavProps> = ({ children }: NavProps): JSX.Element => {
	const classes = useStyles();
	const history = useHistory();
	const started = useSelector((state: AppState) => state.start.started);

	return (
		<div className={classes.root}>
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar>
					<Typography variant='h6' noWrap>
						DailyMealApp
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='permanent'
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<Toolbar />
				<div className={classes.drawerContainer}>
					<Divider />
					<List>
						<ListItem
							className={classes.listItem}
							disabled={!started}
							button
							onClick={() => history.push('/home')}
						>
							<ListItemIcon>
								<HomeIcon className={classes.listItemIcon} />
							</ListItemIcon>
							<ListItemText primary='Home' />
						</ListItem>
						<ListItem
							className={classes.listItem}
							disabled={!started}
							button
							onClick={() => history.push('/user')}
						>
							<ListItemIcon>
								<AccountCircleIcon className={classes.listItemIcon} />
							</ListItemIcon>
							<ListItemText primary='Your profile' />
						</ListItem>
						<ListItem
							className={classes.listItem}
							disabled={!started}
							button
							onClick={() => history.push('/meals')}
						>
							<ListItemIcon>
								<FormatListBulletedIcon className={classes.listItemIcon} />
							</ListItemIcon>
							<ListItemText primary='Your meals' />
						</ListItem>
					</List>
					<Divider />
					<Footer />
				</div>
			</Drawer>
			<main className={classes.content}>
				<Toolbar />
				<React.Fragment>{children}</React.Fragment>
			</main>
		</div>
	);
};

export default Nav;
