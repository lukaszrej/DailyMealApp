import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Divider} from "@material-ui/core";
import AddProduct from "../../components/addProduct/AddProduct";

const Dashboard: React.FC = () => {
    return (
        <>
            <Typography variant='subtitle1'>
                Dashboard
            </Typography>
            <Divider/>
            <AddProduct/>
        </>
    )
};

export default Dashboard;