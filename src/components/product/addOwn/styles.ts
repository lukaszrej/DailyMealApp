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
			// rwd
			[theme.breakpoints.down('sm')]: {
				width: '95%'
			}
		},
		margin: {
			margin: theme.spacing(1),
			marginBottom: 0,
			marginLeft: 0,
			marginRight: 0
		},
		withoutLabel: {
			marginTop: theme.spacing(3)
		}
	})
);

export default useStyles;
