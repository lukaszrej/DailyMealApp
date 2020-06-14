import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
        },
        fieldset: {
            marginTop: 16,
            marginBottom: 8,
        },
        radioGroup: {
            flexDirection: 'row',
            justifyContent: 'center',
        },
        button: {
            marginTop: 16,
            background: '#00A8CC',
            color: 'white',
            '&:hover': {
                background: '#025997',
            }
        },
    }),
);

export default useStyles;