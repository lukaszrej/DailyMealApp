import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			flexDirection: 'column',
			width: '80%',
			'& button': {
				marginTop: 18
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
