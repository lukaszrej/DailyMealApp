export interface UserEditProps {
	handleClose: () => void;
	openEditModal: boolean;
	setOpenEditModal: (open: boolean) => void;
	setDisplayAlert: (displayAlert: boolean) => void;
}
