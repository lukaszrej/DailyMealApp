import { useDispatch } from 'react-redux';
import { AlertExtendedProps } from './index.types';
import { removeAlert } from '../../store/login/Login.actions';
import * as S from "../../styles";

const AlertMaterialUI = (props: AlertExtendedProps) => {
	return <S.Alert elevation={6} variant='filled' {...props} />;
};

export const Alert = (props: AlertExtendedProps) => {
	const { children, severity } = props;
    const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(removeAlert());
    };
    
	return (
		<S.Snackbar open={true} autoHideDuration={3500} onClose={handleClose}>
			<AlertMaterialUI onClose={handleClose} severity={severity}>
				{children}
			</AlertMaterialUI>
		</S.Snackbar>
	);
};
