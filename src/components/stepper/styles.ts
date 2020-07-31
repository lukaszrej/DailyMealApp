import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '100%',
		marginBottom: 12,

		// rwd
		[theme.breakpoints.down('sm')]: {
			marginBottom: 24
		}
	}
}));

export default useStyles;
