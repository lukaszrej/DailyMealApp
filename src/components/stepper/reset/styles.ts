import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(3),
		paddingTop: 0,

		'& button': {
			padding: 6,
			paddingRight: 8,
			marginTop: theme.spacing(1),
			marginRight: theme.spacing(1)
		}
	}
}));

export default useStyles;
