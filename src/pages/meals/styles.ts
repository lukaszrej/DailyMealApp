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
			paddingLeft: 24,
			paddingRight: 24,
			paddingBottom: 26,
			'& h5': {
				marginTop: 8,
				marginBottom: 8
			}
		},
		meal: {
			'& header': {
				marginBottom: 8,
				fontSize: 28
			},
			'& h4': {
				margin: 0
			},
			'& p': {
				margin: 0
			},
			'& footer': {
				marginBottom: 8
			}
		},
		chart: {
			background: 'yellow',
			minWidth: 300,
			minHeight: 300
		}
	})
);

export default useStyles;
