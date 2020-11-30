import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import HomeIcon from '@material-ui/icons/Home';
import Badge from '@material-ui/core/Badge';
import SidebarFooter from './SidebarFooter';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMeals, getIsMealAdded } from '../../store/meal/Meal.selectors';
import { getStarted } from '../../store/start/Start.selectors';
import { endApp } from '../../store/start/Start.actions';
import * as T from '../../utils/constants';
import * as S from '../../styles/components';

const Sidebar = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const isStarted = useSelector(getStarted);
	const meals = useSelector(getMeals);
	const isMealAdded = useSelector(getIsMealAdded);

	const onLogout = () => {
		dispatch(endApp());
	};

	return (
		<S.Sidebar>
			<Toolbar>
				<Typography variant='h6' noWrap>
					{T.APP_NAME}
				</Typography>
			</Toolbar>

			<Divider />

			<List>
				<ListItem button onClick={() => history.push('/home')}>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary={T.HOME} />
				</ListItem>
				<ListItem button onClick={() => history.push('/meals')} disabled={!isMealAdded}>
					<ListItemIcon>
						<Badge badgeContent={meals ? meals.length : 0} max={99} color='primary'>
							<FormatListBulletedIcon />
						</Badge>
					</ListItemIcon>
					<ListItemText primary={T.YOUR_MEALS} />
				</ListItem>
			</List>

			<Divider />

			<SidebarFooter />

			<Divider />

			{isStarted && (
				<aside>
					<Button color='secondary' variant='contained' onClick={onLogout}>
						Logout
					</Button>
				</aside>
			)}
		</S.Sidebar>
	);
};

export default Sidebar;
