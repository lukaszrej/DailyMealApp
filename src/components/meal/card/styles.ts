import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		article: {
			paddingLeft: 24,
			paddingRight: 24,
			paddingBottom: 26,
			'& h5': {
				marginTop: 8,
				marginBottom: 8
			},
			'& header': {
				marginBottom: 24,
				paddingTop: 24,
				fontSize: 28,
				textAlign: 'center'
			},
			'& hr': {
				height: 2,
				marginTop: 58,
				marginBottom: 24,
				background: 'linear-gradient(270deg, #025997 0%, #00A8CC 55%)'
			}
		},
		meal: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
			marginBottom: 32,

			'& p': {
				margin: 0
			},
			'& > div > div': {
				marginBottom: 0
			},
			'& > div > div:first-of-type': {
				marginBottom: 0
			}
		}
	})
);

export default useStyles;
