import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'column',
			'& .MuiTypography-h6': {
				paddingBottom: 12
			}
		}
	})
);

export default useStyles;
