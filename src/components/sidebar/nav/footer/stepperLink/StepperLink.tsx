import React from 'react';
import Link from '@material-ui/core/Link';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { showStepper } from '../../../../../store/start/Start.actions';
import { getShowStepper } from '../../../../../store/start/Start.selectors';

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

const StepperLink = (props: WithStyles<typeof styles>): JSX.Element => {
	const { classes } = props;
	const isStepper = useSelector(getShowStepper);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(showStepper());
	};

	return (
		<React.Fragment>
			{!isStepper && (
				<Link variant='body2' onClick={handleClick} className={classes.root}>
					Still don't know how to use?
				</Link>
			)}
		</React.Fragment>
	);
};

export default withStyles(styles)(StepperLink);
