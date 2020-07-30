import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			marginBottom: 24
		},
		paper: {
			width: '100%',
			padding: 12
		},
		visuallyHidden: {
			border: 0,
			clip: 'rect(0 0 0 0)',
			height: 1,
			margin: -1,
			overflow: 'hidden',
			padding: 0,
			position: 'absolute',
			top: 20,
			width: 1
		},
		buttons: {
			display: 'flex',
			justifyContent: 'center',
			margin: 12,
			marginTop: 24,
			'& > button': {
				width: '48%'
			},
			'& > button:first-of-type': {
				marginRight: 16
			}
		}
	})
);

export default useStyles;
