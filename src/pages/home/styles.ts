import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			'& > article': {
				width: '70%',
				marginRight: 24
			},
			'& > aside': {
				width: '30%'
			}
		}
	})
);

export default useStyles;
