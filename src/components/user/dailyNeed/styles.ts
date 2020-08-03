import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			padding: 24,
			display: 'flex',
			flexDirection: 'column',
			marginTop: 12,
			'& p': {
				margin: 0,
				marginBottom: 12
			},
			'& h6': {
				marginBottom: 12,
				textAlign: 'center'
			},
			'& h3': {
				paddingBottom: 12
			}
		}
	})
);

export default useStyles;
