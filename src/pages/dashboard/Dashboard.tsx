import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Divider} from "@material-ui/core";
// import Counter from "../../components/counter/Counter";
// import Increment from "../../components/increment/Increment";
// import MealTable from "../../components/mealTable/MealTable";
import AddProduct from "../../components/addProduct/AddProduct";

const Dashboard: React.FC = () => {
    return (
        <>
            <Typography variant='subtitle1'>
                Dashboard
            </Typography>
            <Divider/>
            <AddProduct/>
            {/*<MealTable/>*/}
            {/*<Counter/>*/}
            {/*<Increment/>*/}
        </>
    )
};

export default Dashboard;