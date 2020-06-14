import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';

const drawerWidth: number = 250;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            background: "linear-gradient(270deg, #025997 0%, #00A8CC 55%)",
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            background: '#282828',
            color: '#e6e7e8',
        },
        drawerContainer: {
            overflow: 'auto',
        },
        listItem: {
            "&:hover": {
                background: "#4d4d4d",
                textDecoration: 'underline',
            },
        },
        listItemIcon: {
            color: "#e6e7e8",
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

export default useStyles;