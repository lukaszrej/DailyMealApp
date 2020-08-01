import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		article: {
			paddingLeft: 24,
			paddingRight: 24,
			paddingBottom: 26,
			'& h5': {
				marginTop: 8,
				marginBottom: 8
			},
			'& header': {
				marginBottom: 8,
				paddingTop: 24,
				fontSize: 28
			}
		},
		meal: {
			display: 'flex',
			'& p': {
				margin: 0
			}
		}
	})
);

export default useStyles;
