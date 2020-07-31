import React from 'react';
import Paper from '@material-ui/core/Paper';
import StepperTitle from './title/StepperTitle';
import StepperMain from './main/StepperMain';
import StepperReset from './reset/StepperReset';
import { useDispatch, useSelector } from 'react-redux';
import { removeStepper } from '../../store/start/Start.actions';
import { getShowStepper } from '../../store/start/Start.selectors';
import useStyles from './styles';

const Stepper: React.FC = (): JSX.Element | null => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const showStepper = useSelector(getShowStepper);
	const [ activeStep, setActiveStep ] = React.useState(0);

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
		setActiveStep(0);
		dispatch(removeStepper());
	};

	if (!showStepper) return null;

	return (
		<Paper square className={classes.root}>
			<StepperTitle />
			<StepperMain activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} />
			<StepperReset activeStep={activeStep} handleReset={handleReset} handleRemove={handleRemove} />
		</Paper>
	);
};

export default Stepper;
