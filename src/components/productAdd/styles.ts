import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			'& > div': {
				marginBottom: 12
			}
		},
		tabs: {
			paddingBottom: 24,
			paddingTop: 24,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center'
		}
	})
);

export default useStyles;
