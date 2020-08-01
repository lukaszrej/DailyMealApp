import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
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
