import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { removeStepper } from '../../store/start/Start.actions';
import { getShowStepper } from '../../store/start/Start.selectors';
import { getSteps, getStepContent } from './utils';
import useStyles from './styles';

const InfoStepper: React.FC = (): JSX.Element | null => {
	const classes = useStyles();
	const [ activeStep, setActiveStep ] = React.useState(0);
	const steps = getSteps();
	const showStepper = useSelector(getShowStepper);
	const dispatch = useDispatch();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const handleRemove = () => {
		dispatch(removeStepper());
	};

	if (showStepper === false) return null;
	else {
		return (
			<Paper square>
				<div className={classes.root}>
					<Stepper activeStep={activeStep} orientation='vertical'>
						{steps.map((label, index) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
								<StepContent>
									<Typography>{getStepContent(index)}</Typography>
									<div className={classes.actionsContainer}>
										<div>
											<Button
												disabled={activeStep === 0}
												onClick={handleBack}
												className={classes.button}
											>
												Back
											</Button>
											<Button
												variant='contained'
												color='primary'
												onClick={handleNext}
												className={classes.button}
											>
												{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
											</Button>
										</div>
									</div>
								</StepContent>
							</Step>
						))}
					</Stepper>
					{activeStep === steps.length && (
						<Paper square elevation={0} className={classes.resetContainer}>
							<Typography>All steps completed - you&apos;re finished</Typography>
							<Button onClick={handleReset} className={classes.button}>
								Reset
							</Button>
							<Button
								onClick={handleRemove}
								color='secondary'
								variant='contained'
								className={classes.button}
							>
								Got it, remove section
							</Button>
						</Paper>
					)}
				</div>
			</Paper>
		);
	}
};

export default InfoStepper;
