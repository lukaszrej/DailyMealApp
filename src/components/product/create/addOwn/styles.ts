import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			flexDirection: 'column',
			width: '90%',
			'& button': {
				marginTop: 18
			},
			'& input': {
				letterSpacing: 2,
				fontSize: 20
			},

			// rwd
			[theme.breakpoints.down('sm')]: {
				width: '95%'
			}
		},
		group: {
			marginBottom: 0,
			marginLeft: 0,
			marginRight: 0,
			marginTop: theme.spacing(3)
		}
	})
);

export default useStyles;
