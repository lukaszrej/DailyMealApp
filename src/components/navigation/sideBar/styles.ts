import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const drawerWidth: number = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },

    }),
);

export default useStyles;