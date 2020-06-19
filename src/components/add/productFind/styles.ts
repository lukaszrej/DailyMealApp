import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			marginTop: 24,
			marginBottom: 24,
			'& .MuiButton-root': {
				background: 'green',
				color: 'white'
			}
		},
		buttonProgress: {
			color: 'green[500]',
			position: 'absolute',
			top: '50%',
			left: '50%',
			marginTop: -12,
			marginLeft: -12
		}
	})
);

export default useStyles;
