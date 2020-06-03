import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        tableContainer: {
            padding: 12,
            marginBottom: 24,
        },
        table: {
            minWidth: 450,
            margin: 0,
        },
    }),
);

export default useStyles;