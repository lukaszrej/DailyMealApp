import { MealDeleteProps } from './types';
import { ModalTitle } from '../../components/ModalTitle';
import { ModalContent } from '../../components/ModalContent';
import { Dialog, Button, ModalButtonsContainer } from '../../styles';
import * as T from '../../constants/constants';

export const MealDeleteModal = (props: MealDeleteProps) => {
	const { handleClose, isModalOpen, onMealDelete } = props;

	return (
		<Dialog open={isModalOpen} onClose={handleClose} aria-labelledby='delete-meal-dialog'>
			<ModalTitle onClose={handleClose} id='delete-meal-dialog-title'>
				{T.DELETE_CONFIRMATION}
			</ModalTitle>

			<ModalContent dividers>
				<div>{T.DELETE_CONFIRMATION_TEXT}</div>
			</ModalContent>

			<ModalContent>
				<ModalButtonsContainer>
					<Button onClick={handleClose} variant='contained' color='secondary'>
						{T.CANCEL}
					</Button>
					<Button onClick={onMealDelete} variant='outlined'>
						{T.CONFIRM_AND_DELETE}
					</Button>
				</ModalButtonsContainer>
			</ModalContent>
		</Dialog>
	);
};
