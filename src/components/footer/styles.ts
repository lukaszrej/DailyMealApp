import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        text: {
            '& > .MuiTypography-body1': {
                fontSize: 14,
                color: 'grey',
            }
        }
    }),
);

export default useStyles;