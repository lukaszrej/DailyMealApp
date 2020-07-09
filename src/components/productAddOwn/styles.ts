import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			flexDirection: 'column',
			width: '80%'
		},
		margin: {
			margin: theme.spacing(1)
		},
		withoutLabel: {
			marginTop: theme.spacing(3)
		}
	})
);

export default useStyles;
