import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > article': {
				width: '70%',
				marginRight: 24
			},
			'& > aside': {
				width: '30%'
			},
			display: 'flex',
			'& h6, & h3': {
				padding: 24
			},
			'& h3': {
				paddingTop: 0
			}
		}
	})
);

export default useStyles;
