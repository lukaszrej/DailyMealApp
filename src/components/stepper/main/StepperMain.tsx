import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getSteps, getStepContent } from '../Stepper.utils';
import useStyles from './styles';

interface StepperMainProps {
	activeStep: number;
	handleBack: () => void;
	handleNext: () => void;
}

const StepperMain: React.FC<StepperMainProps> = (props: StepperMainProps) => {
	const { activeStep, handleBack, handleNext } = props;
	const classes = useStyles();
	const steps = getSteps();

	return (
		<Stepper activeStep={activeStep} orientation='vertical'>
			{steps.map((label, index) => (
				<Step key={label + index}>
					<StepLabel>{label}</StepLabel>

					<StepContent>
						<Typography>{getStepContent(index)}</Typography>
						<div className={classes.root}>
							<div>
								<Button disabled={activeStep === 0} onClick={handleBack}>
									Back
								</Button>
								<Button variant='contained' color='primary' onClick={handleNext}>
									{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
								</Button>
							</div>
						</div>
					</StepContent>
				</Step>
			))}
		</Stepper>
	);
};

export default StepperMain;
