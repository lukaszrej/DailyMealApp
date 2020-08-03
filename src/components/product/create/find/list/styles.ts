import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			listStyle: 'none',
			width: '90%',
			padding: 0,
			margin: 0,
			textAlign: 'center',
			'& > li': {
				paddingTop: 8,
				paddingBottom: 8,
				paddingLeft: 8,
				borderBottom: '1px solid #3f51b5',
				fontWeight: 700,
				letterSpacing: 2,
				textTransform: 'lowercase'
			},
			'& > li:hover': {
				background: '#00A8CC',
				color: 'white'
			},
			'& > * > div': {
				fontSize: 13,
				fontStyle: 'italic',
				fontWeight: 'normal',
				letterSpacing: 0,
				wordSpacing: 2
			}
		}
	})
);

export default useStyles;
