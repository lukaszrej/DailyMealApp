import { withStyles, Theme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const TooltipComponent = withStyles((theme: Theme) => ({
	tooltip: {
		boxShadow: theme.shadows[1],
		fontSize: 9
	}
}))(Tooltip);

export default TooltipComponent;
