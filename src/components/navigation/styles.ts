import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth: number = 250;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex'
		},
		drawer: {
			[theme.breakpoints.up('md')]: {
				width: drawerWidth,
				flexShrink: 0
			}
		},
		appBar: {
			zIndex: theme.zIndex.drawer + 1,
			background: 'linear-gradient(270deg, #025997 0%, #00A8CC 55%)',
			// rwd
			[theme.breakpoints.up('md')]: {
				width: `calc(100% - ${drawerWidth}px)`,
				marginLeft: drawerWidth
			}
		},
		menuButton: {
			marginRight: theme.spacing(2),
			// rwd
			[theme.breakpoints.up('md')]: {
				display: 'none'
			}
		},
		drawerPaper: {
			width: drawerWidth,
			background: '#282828',
			color: '#e6e7e8'
		},
		drawerContainer: {
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
			}
		},
		content: {
			flexGrow: 1,
			marginLeft: drawerWidth,
			padding: theme.spacing(3),
			// rwd
			[theme.breakpoints.down('sm')]: {
				marginLeft: 0,
				marginRight: 0,
				width: '100%'
			}
		},
		listItem: {
			'&:hover': {
				background: '#4d4d4d',
				textDecoration: 'underline'
			},
			'&.MuiListItem-root.Mui-disabled': {
				opacity: 0.3
			}
		},
		listItemIcon: {
			color: '#e6e7e8'
		}
	})
);

export default useStyles;
