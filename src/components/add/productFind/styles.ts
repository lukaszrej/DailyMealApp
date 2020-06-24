import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			marginTop: 24,
			marginBottom: 24,
			'& .MuiButton-root': {
				marginTop: 16,
				background: '#00A8CC',
				color: 'white',
				'&:hover': {
					background: '#025997'
				}
			}
		}
	})
);

export default useStyles;
