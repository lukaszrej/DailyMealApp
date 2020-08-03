import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		marginBottom: theme.spacing(2),
		'& button': {
			marginTop: theme.spacing(1),
			marginRight: theme.spacing(1)
		}
	}
}));

export default useStyles;
