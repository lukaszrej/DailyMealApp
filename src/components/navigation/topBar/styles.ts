import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const drawerWidth: number = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
    }),
);

export default useStyles;