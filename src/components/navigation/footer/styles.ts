import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
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
		}
	})
);

export default useStyles;
