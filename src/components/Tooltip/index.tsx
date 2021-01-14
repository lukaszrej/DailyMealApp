import { withStyles, Theme } from '@material-ui/core/styles';
import * as S from "../../styles";

export const Tooltip = withStyles((theme: Theme) => ({
	tooltip: {
		boxShadow: theme.shadows[1],
		fontSize: 9
	}
}))(S.Tooltip);
