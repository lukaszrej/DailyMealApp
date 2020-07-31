import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	button: {
		marginTop: theme.spacing(1),
		marginRight: theme.spacing(1)
	},
	resetContainer: {
		padding: theme.spacing(3),
		paddingTop: 0
	}
}));

export default useStyles;
