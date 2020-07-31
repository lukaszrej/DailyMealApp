import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			width: '100%',
			'& > article': {
				width: '70%',
				marginRight: 24
			},
			'& > aside': {
				width: '30%'
			},
			// rwd
			[theme.breakpoints.down('md')]: {
				width: '100%',
				flexDirection: 'column',
				marginLeft: 0,
				'& > article': {
					width: '100%',
					marginLeft: 0,
					marginRight: 0
				},
				'& > aside': {
					width: '100%',
					display: 'flex',
					justifyContent: 'space-around',
					marginBottom: 24,
					'& > div': {
						width: '33%',
						marginTop: 0
					}
				}
			},
			// rwd
			[theme.breakpoints.between('xs', 'md')]: {
				'& > aside': {
					flexDirection: 'column-reverse',
					'& > div': {
						width: '100%',
						alignItems: 'center',
						marginBottom: 24
					}
				}
			}
		}
	})
);

export default useStyles;
