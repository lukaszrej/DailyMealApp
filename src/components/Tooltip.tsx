import { withStyles, Theme } from '@material-ui/core/styles';
import * as S from "../styles";

const Tooltip = withStyles((theme: Theme) => ({
	tooltip: {
		boxShadow: theme.shadows[1],
		fontSize: 9
	}
}))(S.Tooltip);

export default Tooltip;
