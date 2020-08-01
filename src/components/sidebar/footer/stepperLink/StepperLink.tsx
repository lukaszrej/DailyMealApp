import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import { useDispatch, useSelector } from 'react-redux';
import { showStepper } from '../../../../store/start/Start.actions';
import { getShowStepper } from '../../../../store/start/Start.selectors';
import useStyles from './styles';

const StepperLink: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const isStepper = useSelector(getShowStepper);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(showStepper());
	};

	return (
		<List>
			<ListItem className={classes.root}>
				<ListItemText primary='@2020 DailyMealApp' />
				{!isStepper && (
					<Link variant='body2' onClick={handleClick}>
						Still don't know how to use?
					</Link>
				)}
			</ListItem>
		</List>
	);
};

export default StepperLink;
