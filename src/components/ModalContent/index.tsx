import { withStyles } from '@material-ui/core/styles';
import * as S from "../../styles";

const ModalContent = withStyles(() => ({
	root: {
		padding: 16,
		'& > div': {
			marginTop: 8,
			marginBottom: 8
		},
		'& > fieldset': {
			display: 'flex',
			'& > div': {
				flexDirection: 'row',
				justifyContent: 'center'
			}
		}
	}
}))(S.DialogContent);

export default ModalContent;
