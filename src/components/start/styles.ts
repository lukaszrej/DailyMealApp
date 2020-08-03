import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'column',

			'& button': {
				marginTop: 16,
				fontSize: 18,
				minHeight: 48,
				background: '#00A8CC',
				color: 'white',
				'&:hover': {
					background: '#025997'
				}
			}
		},
		activity: {
			marginTop: 16,
			marginBottom: 8
		},
		gender: {
			marginTop: 16,
			marginBottom: 8,
			'& div': {
				flexDirection: 'row',
				justifyContent: 'center'
			}
		}
	})
);

export default useStyles;
