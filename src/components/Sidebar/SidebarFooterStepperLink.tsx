import React from 'react';
import Link from '@material-ui/core/Link';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { showStepper } from '../../store/start/Start.actions';
import { getShowStepper } from '../../store/start/Start.selectors';
import * as T from "../../utils/constants";

const styles = () =>
	createStyles({
		root: {
			fontSize: 10,
			color: 'grey',
			'& > .MuiButton-label': {
				color: 'grey'
			}
		}
	});

const StepperLink = (props: WithStyles<typeof styles>) => {
	const { classes } = props;
	const isStepper = useSelector(getShowStepper);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(showStepper());
	};

	return (
		<>
			{!isStepper && (
				<Link variant='body2' onClick={handleClick} className={classes.root}>
					{T.STEPPER_LINK_TEXT}
				</Link>
			)}
		</>
	);
};

export default withStyles(styles)(StepperLink);
