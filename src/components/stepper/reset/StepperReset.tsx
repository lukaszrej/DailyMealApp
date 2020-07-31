import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { getSteps } from '../utils';
import useStyles from './styles';

interface StepperResetProps {
	activeStep: number;
	handleReset: () => void;
	handleRemove: () => void;
}

const StepperReset: React.FC<StepperResetProps> = (props: StepperResetProps) => {
	const { activeStep, handleReset, handleRemove } = props;
	const classes = useStyles();
	const steps = getSteps();

	return (
		<React.Fragment>

			{activeStep === steps.length && (
				<Paper square elevation={0} className={classes.resetContainer}>
					<Typography>All steps completed - you&apos;re finished</Typography>
					<Button onClick={handleReset} className={classes.button}>
						Reset
					</Button>
					<Button onClick={handleRemove} color='primary' variant='contained' className={classes.button}>
						Got it, remove section
					</Button>
				</Paper>
			)}
			
		</React.Fragment>
	);
};

export default StepperReset;
