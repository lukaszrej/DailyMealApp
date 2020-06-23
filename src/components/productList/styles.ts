import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			background: '#e6e7e8',
			color: '#282828',
			listStyle: 'none',
			padding: 0,
			'& > li': {
				paddingTop: 4
			},
			'& > li:hover': {
				background: 'red',
			}
		}
	})
);

export default useStyles;
