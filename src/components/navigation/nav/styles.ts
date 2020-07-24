import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth: number = 250;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex'
		},
		drawer: {
			[theme.breakpoints.up('sm')]: {
				width: drawerWidth,
				flexShrink: 0
			}
		},
		appBar: {
			zIndex: theme.zIndex.drawer + 1,
			background: 'linear-gradient(270deg, #025997 0%, #00A8CC 55%)',
			[theme.breakpoints.up('sm')]: {
				width: `calc(100% - ${drawerWidth}px)`,
				marginLeft: drawerWidth
			}
		},
		menuButton: {
			marginRight: theme.spacing(2),
			[theme.breakpoints.up('sm')]: {
				display: 'none'
			}
		},
		drawerPaper: {
			width: drawerWidth,
			background: '#282828',
			color: '#e6e7e8'
		},
		drawerContainer: {
			'& h6': {
				color: 'grey'
			},
			'& hr': {
				background: 'grey'
			}
		},
		content: {
			flexGrow: 1,
			marginLeft: drawerWidth,
			padding: theme.spacing(3),
			[theme.breakpoints.down('xs')]: {
				marginLeft: 24
			}
		},
		listItem: {
			'&:hover': {
				background: '#4d4d4d',
				textDecoration: 'underline'
			}
		},
		listItemIcon: {
			color: '#e6e7e8'
		}
	})
);

export default useStyles;
