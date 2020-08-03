import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: 24,
			display: 'flex',
			flexDirection: 'column',

			'& p': {
				margin: 0,
				marginBottom: 12
			},
			'& h6': {
				marginBottom: 12,
				textAlign: 'center'
			},

			// rwd
			[theme.breakpoints.only('xs')]: {
				'& > button': {
					width: '90%'
				}
			}
		}
	})
);

export default useStyles;
