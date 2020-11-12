import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getSteps } from '../utils/stepperContent';
import * as S from "./styles";

interface StepperResetProps {
	activeStep: number;
	handleReset: () => void;
	handleRemove: () => void;
}

const StepperReset: React.FC<StepperResetProps> = (props: StepperResetProps) => {
	const { activeStep, handleReset, handleRemove } = props;
	const steps = getSteps();

	return (
		<React.Fragment>
			{activeStep === steps.length && (
				<S.StepperReset square elevation={0}>
					<Typography>All steps completed - you&apos;re finished</Typography>

					<Button onClick={handleReset}>Reset</Button>
					<Button onClick={handleRemove} color='primary' variant='contained'>
						Got it, remove section
					</Button>
				</S.StepperReset>
			)}
		</React.Fragment>
	);
};

export default StepperReset;
