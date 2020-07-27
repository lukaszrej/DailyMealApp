import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '100%',
		marginBottom: 12,
		// rwd
		[theme.breakpoints.down('sm')]: {
			marginBottom: 24
		}
	},
	button: {
		marginTop: theme.spacing(1),
		marginRight: theme.spacing(1)
	},
	actionsContainer: {
		marginBottom: theme.spacing(2)
	},
	resetContainer: {
		padding: theme.spacing(3),
		paddingTop: 0
	}
}));

export default useStyles;
