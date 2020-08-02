import React from 'react';
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
import Footer from '../footer/Footer';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getMeals, getIsMealAdded } from '../../../store/meal/Meal.selectors';
import useStyles from './styles';

const DrawerComponent: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const history = useHistory();
	const meals = useSelector(getMeals);
	const isMealAdded = useSelector(getIsMealAdded);

	return (
		<div className={classes.root}>
			<Toolbar>
				<Typography variant='h6' noWrap>
					DailyMealApp
				</Typography>
			</Toolbar>

			<Divider />

			<List>
				<ListItem className={classes.item} button onClick={() => history.push('/home')}>
					<ListItemIcon>
						<HomeIcon className={classes.icon} />
					</ListItemIcon>
					<ListItemText primary='Home' />
				</ListItem>
				<ListItem
					className={classes.item}
					button
					onClick={() => history.push('/meals')}
					disabled={!isMealAdded}
				>
					<ListItemIcon>
						<Badge badgeContent={meals ? meals.length : 0} max={99} color='primary'>
							<FormatListBulletedIcon className={classes.icon} />
						</Badge>
					</ListItemIcon>
					<ListItemText primary='Your meals' />
				</ListItem>
			</List>

			<Divider />

			<Footer />
		</div>
	);
};

export default DrawerComponent;
