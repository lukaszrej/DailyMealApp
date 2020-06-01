import {makeStyles, Theme, createStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,

            "& > .MuiToolbar-root": {
                justifyContent: "center",
            },
            "& > ..MuiIconButton-root": {
                marginRight: theme.spacing(2),
            },
            "& > .MuiTypography-h6": {
                flexGrow: 1,
            }
        },
    }));

export default useStyles;