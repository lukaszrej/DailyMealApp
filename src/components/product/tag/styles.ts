import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		textTransform: 'uppercase',

		'& div > svg': {
			marginLeft: 11,
			marginRight: -6,
			marginBottom: 2
		},
		'& > *': {
			margin: theme.spacing(0.5)
		}
	}
}));

export default useStyles;
