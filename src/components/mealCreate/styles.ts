import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			'& h6': {
				marginBottom: 12
			},
			'& > div': {
				flexGrow: 1,
				padding: 24
			}
		},
		tabs: {
			marginTop: 48,
			marginBottom: 48,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		}
	})
);

export default useStyles;
