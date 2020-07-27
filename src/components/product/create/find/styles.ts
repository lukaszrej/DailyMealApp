import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			marginTop: 24,
			'& input': {
				letterSpacing: 2,
				fontSize: 20
			},
			width: '90%',
			'& > div': {
				width: '100%'
			},
			'& .MuiButton-root': {
				width: '100%',
				marginTop: 18
			},
			// rwd
			[theme.breakpoints.down('sm')]: {
				width: '95%'
			}
		}
	})
);

export default useStyles;
