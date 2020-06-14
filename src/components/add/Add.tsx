import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from "./styles";
import ProductAdd from "./productAdd/ProductAdd";
import ProductFind from "./productFind/ProductFind";

const Add = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Paper square className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="inherit"
                    aria-label="icon label tabs example"
                >
                    <Tab icon={<SearchIcon/>} label="Find product"/>
                    <Tab icon={<AddIcon/>} label="Add own product"/>
                </Tabs>
            </Paper>
            {value ? <ProductAdd/> : <ProductFind/> }
        </>
    );
};

export default Add;