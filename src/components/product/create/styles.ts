import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > div': {
				marginBottom: 12,
				textAlign: 'center'
			},
			'& > div> h6': {
				padding: 24
			},

			// rwd
			[theme.breakpoints.down('sm')]: {
				marginBottom: 24,
				'& > div> h6': {
					marginBottom: 24,
					fontSize: 18
				}
			}
		},
		tabs: {
			paddingBottom: 24,
			paddingTop: 24,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',

			// rwd
			[theme.breakpoints.down('sm')]: {
				paddingRight: 12,
				paddingLeft: 12
			}
		}
	})
);

export default useStyles;
