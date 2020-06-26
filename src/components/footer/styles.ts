import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			'& > div > span.MuiTypography-displayBlock': {
				fontSize: 14,
				color: 'grey'
			}
		}
	})
);

export default useStyles;
