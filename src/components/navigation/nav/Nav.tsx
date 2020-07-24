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
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import HomeIcon from '@material-ui/icons/Home';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Footer from '../footer/Footer';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getMeals, getIsMealAdded } from '../../../store/meal/Meal.selectors';
import useStyles from './styles';

interface NavProps {
	children: JSX.Element;
	window?: () => Window;
}

const Nav: React.FC<NavProps> = (props: NavProps): JSX.Element => {
	const classes = useStyles();
	const { window, children } = props;
	const history = useHistory();
	const meals = useSelector(getMeals);
	const isMealAdded = useSelector(getIsMealAdded);
	const [ mobileOpen, setMobileOpen ] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div className={classes.drawerContainer}>
			<Toolbar>
				<Typography variant='h6' noWrap>
					DailyMealApp
				</Typography>
			</Toolbar>
			<div>
				<Divider />
				<List>
					<ListItem className={classes.listItem} button onClick={() => history.push('/home')}>
						<ListItemIcon>
							<HomeIcon className={classes.listItemIcon} />
						</ListItemIcon>
						<ListItemText primary='Home' />
					</ListItem>
					<ListItem
						className={classes.listItem}
						button
						onClick={() => history.push('/meals')}
						disabled={!isMealAdded}
					>
						<ListItemIcon>
							<Badge badgeContent={meals ? meals.length : 0} max={99} color='primary'>
								<FormatListBulletedIcon className={classes.listItemIcon} />
							</Badge>
						</ListItemIcon>
						<ListItemText primary='Your meals' />
					</ListItem>
				</List>
				<Divider />
				<Footer />
			</div>
		</div>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>

			<Hidden smUp implementation='css'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					classes={{
						paper: classes.drawerPaper
					}}
					ModalProps={{
						keepMounted: true
					}}
				>
					{drawer}
				</Drawer>
			</Hidden>

			<Hidden xsDown implementation='css'>
				<Drawer
					classes={{
						paper: classes.drawerPaper
					}}
					variant='permanent'
					open={mobileOpen}
				>
					{drawer}
				</Drawer>
			</Hidden>

			<main className={classes.content}>
				<Toolbar />
				<React.Fragment>{children}</React.Fragment>
			</main>
		</div>
	);
};

export default Nav;
