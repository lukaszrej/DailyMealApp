export interface UserEditProps {
	handleClose: () => void;
	isModalOpen: boolean;
	setIsModalOpen: (open: boolean) => void;
	setIsAlertDisplayed: (displayAlert: boolean) => void;
}
