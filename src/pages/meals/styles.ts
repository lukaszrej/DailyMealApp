import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			'& h6, & h3': {
				padding: 24
			},
			'& h3': {
				paddingTop: 0
			},
			'& > section': {
				width: '70%',
				marginRight: 24
			},
			'& > aside': {
				width: '30%'
			}
		},
		article: {
			padding: 24
		}
	})
);

export default useStyles;
