import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		activity: {
			width: '100%'
		},
		buttons: {
			display: 'flex',
			justifyContent: 'center',
			margin: 0,
			padding: theme.spacing(1)
		}
	})
);

export default useStyles;
