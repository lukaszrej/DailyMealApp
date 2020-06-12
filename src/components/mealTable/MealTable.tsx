import React from "react";
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import useStyles from "./styles";
import {useSelector} from "react-redux";
import {AppState} from '../../store/'
import {generate} from 'shortid';

const MealTable: React.FC = () => {
    const classes = useStyles();
    const labels = useSelector((state: AppState) => state.chart.labels)

    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product name</TableCell>
                        {labels.map((label: string) => <TableCell key={generate()} align="right">{label}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">Example name</TableCell>
                        <TableCell align="right">15g calories</TableCell>
                        <TableCell align="right">30g fat</TableCell>
                        <TableCell align="right">45g carbs</TableCell>
                        <TableCell align="right">16g protein</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total</TableCell>
                        {/*<TableCell align="right">*/}{/*{Number(props.fat) + Number(props.carbs) + Number(props.protein)}*/}{/*</TableCell>*/}
                        {/*<TableCell align="right">{props.fat}</TableCell>*/}
                        {/*<TableCell align="right">{props.carbs}</TableCell>*/}
                        {/*<TableCell align="right">{props.protein}</TableCell>*/}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default MealTable;