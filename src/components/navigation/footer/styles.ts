import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		footer: {
			flexDirection: 'column',
			'& >div:first-of-type': {
				flex: 'none'
			},
			'& > div > span.MuiTypography-displayBlock': {
				fontSize: 12,
				color: 'grey'
			},
			'& > a': {
				fontSize: 10,
				color: 'grey',
				'& > .MuiButton-label': {
					color: 'grey'
				}
			}
		},
		social: {
			display: 'flex',
			justifyContent: 'center',
			'& li': {
				padding: 0,
				width: 'auto',
				marginRight: 18
			},
			'& li:last-of-type': {
				marginRight: 0
			},
			'& a': {
				color: 'grey',
				'&:hover': {
					color: '#4d4d4d'
				}
			}
		}
	})
);

export default useStyles;
