import React from 'react';
import { getSteps, getStepContent } from '../../utils/stepperContent';
import * as T from "../../utils/constants";
import * as S from "../../styles";

interface StepperMainProps {
	activeStep: number;
	secondsToRemove: number;
	handleBack: () => void;
	handleNext: (activeStep: number, steps: string[]) => void;
	handleReset: () => void;
}

const StepperMain = (props: StepperMainProps) => {
	const { activeStep, secondsToRemove, handleBack, handleNext, handleReset } = props;
	const steps = getSteps();

	return (
		<S.Stepper activeStep={activeStep} orientation='vertical'>
			{steps.map((label, index) => (
				<S.Step key={label + index}>
					<S.StepLabel>{label}</S.StepLabel>

					<S.StepContent>
						<S.Typography>{getStepContent(index)}</S.Typography>
						<S.StepperContent>
							<div>
								<S.Button disabled={activeStep === 0} variant="outlined" onClick={handleBack}>
									{T.BACK}
								</S.Button>
								<S.Button
									variant='outlined'
									color={activeStep === steps.length - 1 ? 'secondary' : 'primary'}
									onClick={() => handleNext(activeStep, steps)}>

									{activeStep === steps.length - 1 ? T.FINISH_AND_REMOVE : T.NEXT}
								</S.Button>
								{activeStep === steps.length - 1 &&
									<S.Button variant='outlined' color="primary" onClick={handleReset}>
										{T.RESET}
									</S.Button>
								}
							</div>
						</S.StepperContent>
					</S.StepContent>
				</S.Step>
			))}

			{
				secondsToRemove > 0 &&
				<S.StepperRemove>{T.WILL_BE_REMOVED_AFTER} <span>{secondsToRemove}</span> {T.SECONDS}</S.StepperRemove>
			}
		</S.Stepper>
	);
};

export default StepperMain;
