import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'flex',
		'& > * + *': {
			marginLeft: theme.spacing(2)
		}
	}
}));

export default useStyles;
