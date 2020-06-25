import { Theme, withStyles } from '@material-ui/core/styles';
import MuiDialogContent from '@material-ui/core/DialogContent';

const ModalContent = withStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(2)
	}
}))(MuiDialogContent);

export default ModalContent;
