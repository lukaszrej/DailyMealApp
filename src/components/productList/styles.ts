import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			listStyle: 'none',
			padding: 0,
			width: '80%',
			margin: 0,
			'& > li': {
				paddingTop: 8,
				paddingBottom: 4,
				paddingLeft: 8,
				borderBottom: '1px solid #3f51b5'
			},
			'& > li:hover': {
				background: '#00A8CC',
				color: 'white'
			},
			'& > * > div': {
				fontSize: 13,
				fontStyle: 'italic'
			}
		}
	})
);

export default useStyles;
