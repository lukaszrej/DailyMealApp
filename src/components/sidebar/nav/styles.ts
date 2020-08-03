import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& div:first-of-type': {
				display: 'flex',
				justifyContent: 'center'
			},
			'& h6': {
				color: 'grey',
				fontSize: 19
			},
			'& hr': {
				background: '#343a40'
			},

			// list items elements
			'& ul > div': {
				'&:hover': {
					background: '#4d4d4d',
					textDecoration: 'underline'
				},
				'&.MuiListItem-root.Mui-disabled': {
					opacity: 0.3
				},
				'& svg': {
					color: '#e6e7e8'
				}
			}
		}
	})
);

export default useStyles;
