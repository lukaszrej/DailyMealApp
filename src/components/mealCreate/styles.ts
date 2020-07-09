import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			'& h6': {
				marginBottom: 12,
			},
			'& > div': {
				flexGrow: 1,
				padding: 24,
			}
		}
	})
);

export default useStyles;