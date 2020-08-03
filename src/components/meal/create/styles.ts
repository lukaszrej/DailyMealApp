import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: '100%',
			padding: 24,

			'& section': {
				display: 'flex',
				justifyContent: 'center',
				margin: 12,
				marginTop: 24,
				'& > button': {
					width: '48%'
				},
				'& > button:first-of-type': {
					marginRight: 16
				}
			}
		}
	})
);

export default useStyles;
